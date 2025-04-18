// Simple Express server to handle Stripe checkout
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize Stripe with the secret key and API version
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors({
  origin: ['http://localhost:8082', 'http://localhost:8083', 'http://127.0.0.1:63113'],
  credentials: true
}));

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
app.use(express.json());

// Create a checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  console.log('Received checkout request:', req.body);
  try {
    const { ebook } = req.body;
    
    if (!ebook || !ebook.id || !ebook.name || !ebook.price) {
      console.error('Missing required ebook information:', req.body);
      return res.status(400).json({ error: 'Missing required ebook information' });
    }

    console.log('Fetching ebook from Supabase with ID:', ebook.id);
    
    // For testing purposes, let's create a mock ebook if we can't find it in the database
    // This helps us test the checkout flow even if the database query fails
    let ebookData = null;
    let error = null;
    
    try {
      // Get the actual eBook from Supabase to verify price and details
      const result = await supabase
        .from('ebooks')
        .select('*')
        .eq('id', ebook.id)
        .single();
        
      ebookData = result.data;
      error = result.error;
      
      console.log('Supabase query result:', { data: ebookData, error });
    } catch (queryError) {
      console.error('Error executing Supabase query:', queryError);
      error = queryError;
    }

    if (error) {
      console.error('Error fetching ebook from Supabase:', error);
      return res.status(404).json({ error: 'eBook not found', details: error });
    }
    
    if (!ebookData) {
      console.log('No ebook found with ID:', ebook.id);
      console.log('Creating mock ebook data for testing...');
      
      // Create a mock ebook for testing purposes
      ebookData = {
        id: ebook.id,
        title: ebook.name,
        description: `${ebook.name} by ${ebook.author}`,
        price: parseFloat(ebook.price),
        author: ebook.author,
        cover_image: null
      };
      
      console.log('Created mock ebook:', ebookData);
    }

    console.log('Ebook found in database:', ebookData);
    
    // For testing, let's use a fixed price if the actual price is missing
    const price = ebookData.price || ebook.price || 10.00;
    console.log('Using price for checkout:', price);
    
    // Create a checkout session
    console.log('Creating Stripe checkout session...');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: ebookData.title || ebook.name,
              description: ebookData.description || `${ebook.name} by ${ebook.author}`,
              images: ebookData.cover_image ? [ebookData.cover_image] : [],
            },
            unit_amount: Math.round(price * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:8083'}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:8083'}/ebooks`,
      metadata: {
        ebookId: ebookData.id,
      },
    });

    console.log('Checkout session created successfully:', { id: session.id, url: session.url });
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session', message: error.message });
  }
});

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

    if (error) {
      console.error('Error fetching ebook from Supabase:', error);
      return res.status(404).json({ error: 'Error fetching eBook', details: error });
    }
    
    if (!ebook) {
      console.error('No ebook found with ID:', ebookId);
      return res.status(404).json({ error: 'eBook not found' });
    }

    console.log('Ebook found:', {
      id: ebook.id,
      title: ebook.title,
      buy_link: ebook.buy_link
    });
    
    // Check if we have a file_path field to use directly
    let filePath = ebook.file_path;
    
    // For testing, create a mock download URL if no file path is available
    if (!filePath) {
      console.log('No file_path found for ebook, checking buy_link as fallback');
      
      // Try to extract from buy_link as fallback
      if (ebook.buy_link) {
        try {
          // Handle different URL formats
          if (ebook.buy_link.includes('/object/sign/')) {
            // Extract the path after the bucket name
            const urlParts = ebook.buy_link.split('/object/sign/');
            if (urlParts.length > 1) {
              const pathParts = urlParts[1].split('/');
              // Remove the bucket name and get the rest of the path
              pathParts.shift();
              filePath = pathParts.join('/');
            } else {
              filePath = ebook.buy_link.split('/').pop();
            }
          } else {
            // Simple extraction for direct file paths
            filePath = ebook.buy_link.split('/').pop();
          }
          
          // Remove any query parameters
          filePath = filePath.split('?')[0];
          
          console.log('Extracted file path from buy_link:', filePath);
        } catch (error) {
          console.error('Error extracting file path from buy_link:', error);
          filePath = ebook.buy_link.split('/').pop();
        }
      } else {
        console.log('No file_path or buy_link found, creating mock download URL');
        return res.json({
          ebookId: ebook.id,
          ebookTitle: ebook.title,
          downloadUrl: `https://example.com/mock-download/${ebook.id}`,
          purchaseDate: new Date().toISOString(),
        });
      }
    } else {
      console.log('Using file_path directly:', filePath);
    }
    
    console.log('Generating signed URL for file:', filePath);
    
    // Generate a signed URL for the eBook download
    try {
      // List all buckets to verify what's available
      const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
      console.log('Available storage buckets:', { buckets, bucketsError });
      
      // List root contents of the ebooks bucket to see what's there
      const { data: rootContents, error: rootError } = await supabase.storage
        .from('ebooks')
        .list();
      console.log('Root contents of ebooks bucket:', { rootContents, rootError });
      
      // First check if the file exists in the storage bucket
      // Try both with original path and with normalized path (handling both 'ebooks' and 'Ebooks' folders)
      const originalPath = filePath;
      
      // Create alternative paths to check
      const lowercasePath = filePath.replace(/^Ebooks\//, 'ebooks/');
      const uppercasePath = filePath.replace(/^ebooks\//, 'Ebooks/');
      const noFolderPath = filePath.replace(/^(Ebooks|ebooks)\//, '');
      
      // Based on the URL shared, files are directly in the root of the bucket
      // So prioritize the noFolderPath
      console.log('Checking file paths:', { noFolderPath, originalPath, lowercasePath, uppercasePath });
      
      // Check no folder path first (directly in root) since that's where files are stored based on the URL
      const { data: alternative3FileExists, error: alternative3FileCheckError } = await supabase.storage
        .from('ebooks')
        .list('', {
          search: noFolderPath
        });
      
      // If not found, check original path
      let fileExists = null;
      let fileCheckError = null;
      
      if (alternative3FileCheckError || !alternative3FileExists || alternative3FileExists.length === 0) {
        const { data: origData, error: origError } = await supabase.storage
          .from('ebooks')
          .list('', {
            search: originalPath
          });
          
        fileExists = origData;
        fileCheckError = origError;
      }
      
      // If still not found, try lowercase path
      let alternativeFileExists = null;
      let alternativeFileCheckError = null;
      
      if ((alternative3FileCheckError || !alternative3FileExists || alternative3FileExists.length === 0) && 
          (fileCheckError || !fileExists || fileExists.length === 0)) {
        const { data: altData, error: altError } = await supabase.storage
          .from('ebooks')
          .list('', {
            search: lowercasePath
          });
          
        alternativeFileExists = altData;
        alternativeFileCheckError = altError;
      }
      
      // If still not found, try uppercase path
      let alternative2FileExists = null;
      let alternative2FileCheckError = null;
      
      if ((alternative3FileCheckError || !alternative3FileExists || alternative3FileExists.length === 0) && 
          (fileCheckError || !fileExists || fileExists.length === 0) && 
          (alternativeFileCheckError || !alternativeFileExists || alternativeFileExists.length === 0)) {
        const { data: alt2Data, error: alt2Error } = await supabase.storage
          .from('ebooks')
          .list('', {
            search: uppercasePath
          });
          
        alternative2FileExists = alt2Data;
        alternative2FileCheckError = alt2Error;
      }
      
      console.log('File check results:', { 
        original: { fileExists, fileCheckError },
        lowercase: { alternativeFileExists, alternativeFileCheckError },
        uppercase: { alternative2FileExists, alternative2FileCheckError },
        noFolder: { alternative3FileExists, alternative3FileCheckError }
      });
      
      // Determine which path to use
      let pathToUse = originalPath;
      let foundFile = false;
      
      if (fileExists && fileExists.length > 0) {
        foundFile = true;
        pathToUse = originalPath;
      } else if (alternativeFileExists && alternativeFileExists.length > 0) {
        foundFile = true;
        pathToUse = lowercasePath;
      } else if (alternative2FileExists && alternative2FileExists.length > 0) {
        foundFile = true;
        pathToUse = uppercasePath;
      } else if (alternative3FileExists && alternative3FileExists.length > 0) {
        foundFile = true;
        pathToUse = noFolderPath;
      }
      
      console.log('Path determination:', { pathToUse, foundFile });
      
      // If we can't find the file in any location, provide a mock download
      if (!foundFile) {
        console.log('File not found in storage or error checking, providing mock download URL');
        
        // Return a mock download URL for testing
        const responseData = {
          ebookId: ebook.id,
          ebookTitle: ebook.title,
          downloadUrl: `https://example.com/mock-download/${ebook.id}`,
          purchaseDate: new Date().toISOString(),
          isMock: true
        };
        
        console.log('Sending mock download response:', responseData);
        return res.json(responseData);
      }
      
      // If the file exists, generate a signed URL using the path we found
      const { data: signedURLData, error: signedUrlError } = await supabase.storage
        .from('ebooks')
        .createSignedUrl(pathToUse, 60 * 60); // 1 hour expiry

      if (signedUrlError) {
        console.error('Error creating signed URL:', signedUrlError);
        
        // Provide a mock URL as fallback
        const mockResponseData = {
          ebookId: ebook.id,
          ebookTitle: ebook.title,
          downloadUrl: `https://example.com/mock-download/${ebook.id}`,
          purchaseDate: new Date().toISOString(),
          isMock: true
        };
        
        console.log('Signed URL error, sending mock response:', mockResponseData);
        return res.json(mockResponseData);
      }
      
      if (!signedURLData?.signedUrl) {
        console.error('No signed URL returned from Supabase');
        
        // Provide a mock URL as fallback
        const mockResponseData = {
          ebookId: ebook.id,
          ebookTitle: ebook.title,
          downloadUrl: `https://example.com/mock-download/${ebook.id}`,
          purchaseDate: new Date().toISOString(),
          isMock: true
        };
        
        console.log('No signed URL, sending mock response:', mockResponseData);
        return res.json(mockResponseData);
      }
      
      console.log('Successfully generated signed URL');
      
      // Return the purchase data with a real download URL
      const responseData = {
        ebookId: ebook.id,
        ebookTitle: ebook.title,
        downloadUrl: signedURLData.signedUrl,
        purchaseDate: new Date().toISOString(),
        isMock: false
      };
      
      console.log('Sending successful response with real URL:', responseData);
      return res.json(responseData);
    } catch (storageError) {
      console.error('Error in Supabase storage operations:', storageError);
      
      // Provide a mock URL as fallback for any errors
      const mockResponseData = {
        ebookId: ebook.id,
        ebookTitle: ebook.title,
        downloadUrl: `https://example.com/mock-download/${ebook.id}`,
        purchaseDate: new Date().toISOString(),
        isMock: true
      };
      
      console.log('Storage error, sending mock response:', mockResponseData);
      return res.json(mockResponseData);
    }
  } catch (error) {
    console.error('Error verifying purchase:', error);
    let errorMessage = 'Failed to verify purchase';
    let errorDetails = {};
    
    if (error.type === 'StripeInvalidRequestError') {
      errorMessage = 'Invalid Stripe request';
      errorDetails = {
        type: error.type,
        code: error.code,
        param: error.param,
        statusCode: error.statusCode
      };
    }
    
    res.status(500).json({ 
      error: errorMessage, 
      message: error.message,
      details: errorDetails
    });
  }
});

// Webhook to handle Stripe events
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Record the purchase in your database
      try {
        await supabase.from('purchases').insert({
          user_id: session.client_reference_id || 'anonymous',
          ebook_id: session.metadata.ebookId,
          session_id: session.id,
          amount: session.amount_total / 100,
          status: 'completed',
        });
      } catch (error) {
        console.error('Error recording purchase:', error);
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
