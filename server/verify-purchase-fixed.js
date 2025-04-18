// Verify purchase and provide download link
app.get('/api/verify-purchase', async (req, res) => {
  console.log('Received verify-purchase request with query:', req.query);
  try {
    const { session_id } = req.query;
    
    if (!session_id) {
      console.error('Missing session_id in request');
      return res.status(400).json({ error: 'Missing session ID' });
    }

    console.log('Verifying session with Stripe:', session_id);
    
    // Retrieve the session from Stripe with expanded line items
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items']
    });
    
    console.log('Stripe session retrieved:', {
      id: session.id,
      payment_status: session.payment_status,
      metadata: session.metadata,
      customer: session.customer,
      line_items_count: session.line_items?.data?.length || 0
    });
    
    if (!session) {
      console.error('No session found with ID:', session_id);
      return res.status(404).json({ error: 'Session not found' });
    }
    
    if (session.payment_status !== 'paid') {
      console.error('Payment not completed for session:', session_id, 'Status:', session.payment_status);
      return res.status(400).json({ error: 'Payment not completed', status: session.payment_status });
    }

    // Get the eBook details from metadata
    const ebookId = session.metadata?.ebookId;
    
    if (!ebookId) {
      console.error('No ebookId found in session metadata:', session.metadata);
      return res.status(400).json({ error: 'No eBook ID found in session metadata' });
    }
    
    console.log('Fetching ebook with ID:', ebookId);
    
    // Get the eBook details from Supabase
    const { data: ebook, error } = await supabase
      .from('ebooks')
      .select('*')
      .eq('id', ebookId)
      .single();
    
    if (error || !ebook) {
      console.error('Error fetching ebook:', error);
      return res.status(404).json({ error: 'eBook not found', details: error });
    }
    
    console.log('Ebook found:', ebook.title);
    
    // Possible filenames to check (common formats for ebooks)
    const possibleFilenames = [
      `${ebook.id}.pdf`,
      `${ebook.id}.epub`,
      `${ebook.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`,
      `${ebook.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.epub`,
    ];
    
    console.log('Checking for possible filenames:', possibleFilenames);
    
    // List all files in the ebooks bucket to find the right one
    const { data: allFiles, error: listError } = await supabase.storage
      .from('ebooks')
      .list();
      
    if (listError) {
      console.error('Error listing files in ebooks bucket:', listError);
      return res.status(500).json({ 
        error: 'Could not list files in storage bucket',
        ebookId: ebook.id,
        ebookTitle: ebook.title,
        downloadUrl: `https://example.com/mock-download/${ebook.id}`,
        purchaseDate: new Date().toISOString(),
        isMock: true
      });
    }
    
    console.log('Files in ebooks bucket:', allFiles?.map(f => f.name) || []);
    
    // Find the file that matches one of our possible filenames
    const matchingFile = allFiles?.find(file => 
      possibleFilenames.some(name => file.name.toLowerCase() === name.toLowerCase())
    );
    
    if (matchingFile) {
      console.log('Found matching file:', matchingFile.name);
      
      // Generate a signed URL for the eBook download
      try {
        // Create a signed URL that expires in 1 hour (3600 seconds)
        const { data: signedURLData, error: signedUrlError } = await supabase.storage
          .from('ebooks')
          .createSignedUrl(matchingFile.name, 3600);
          
        if (signedUrlError) {
          console.error('Error creating signed URL:', signedUrlError);
          throw new Error('Could not create download link');
        }
        
        if (!signedURLData?.signedUrl) {
          console.error('No signed URL returned from Supabase');
          throw new Error('No download link available');
        }
        
        console.log('Generated signed URL successfully');
        
        // Return the download information
        return res.json({
          ebookId: ebook.id,
          ebookTitle: ebook.title,
          downloadUrl: signedURLData.signedUrl,
          purchaseDate: new Date().toISOString(),
          isMock: false
        });
      } catch (error) {
        console.error('Error generating signed URL:', error);
        // Fall through to the mock response below
      }
    }
    
    // No matching file found or error generating URL, provide a helpful error message
    console.log('No matching file found for ebook:', ebook.id);
    console.log('Attempted to find files with names:', possibleFilenames);
    
    // Return a response with mock data since we couldn't find the real file
    return res.json({
      ebookId: ebook.id,
      ebookTitle: ebook.title,
      downloadUrl: `https://example.com/mock-download/${ebook.id}`,
      purchaseDate: new Date().toISOString(),
      isMock: true,
      message: 'This is a mock download because the actual file could not be found. Please contact support.'
    });
    
  } catch (error) {
    console.error('Error verifying purchase:', error);
    let errorMessage = 'Failed to verify purchase';
    let errorDetails = {};
    
    if (error.type === 'StripeInvalidRequestError') {
      errorMessage = 'Invalid checkout session';
      errorDetails = {
        type: error.type,
        code: error.code,
        param: error.param
      };
    }
    
    res.status(500).json({ 
      error: errorMessage, 
      message: error.message,
      details: errorDetails
    });
  }
});
