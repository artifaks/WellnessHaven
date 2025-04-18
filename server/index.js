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
const PORT = process.env.PORT || 3002;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors({
  origin: ['http://localhost:8082', 'http://localhost:8083', 'http://localhost:8089', 'http://127.0.0.1:63113'],
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
    const { ebook, userId } = req.body;
    
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
      success_url: `${process.env.CLIENT_URL || 'http://localhost:8089'}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:8089'}/ebooks`,
      metadata: {
        ebookId: ebookData.id,
      },
      // Only include client_reference_id if userId is a non-empty string
      ...(userId && userId.trim() !== '' ? { client_reference_id: userId } : {}),
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
          // Fall through to the mock response below
        }
        
        if (!signedURLData?.signedUrl) {
          console.error('No signed URL returned from Supabase');
          // Fall through to the mock response below
        }
        
        console.log('Generated signed URL successfully');
        
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
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.error('Missing STRIPE_WEBHOOK_SECRET environment variable');
    return res.status(500).send('Webhook secret is not configured');
  }
  
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment succeeded for session:', session.id);
      
      // Record the purchase in Supabase
      try {
        // Get customer information
        const customer = await stripe.customers.retrieve(session.customer);
        console.log('Customer data:', customer);
        
        // Get line items from the session
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        console.log('Line items:', lineItems.data);
        
        // Get user ID from metadata if available
        const userId = session.client_reference_id || session.metadata?.userId || null;
        console.log('User ID from metadata:', userId);
        
        // Create the purchase record
        const { data: purchaseData, error: purchaseError } = await supabase
          .from('user_purchases')
          .insert({
            user_id: userId,
            stripe_session_id: session.id,
            stripe_customer_id: session.customer,
            total_amount: session.amount_total / 100, // Convert from cents to dollars
            status: 'completed'
          })
          .select()
          .single();
        
        if (purchaseError) {
          console.error('Error creating purchase record:', purchaseError);
          return res.status(500).send('Error recording purchase');
        }
        
        console.log('Created purchase record:', purchaseData);
        
        // Record each line item as a purchase item
        const purchaseItems = lineItems.data.map(item => {
          // Extract the product ID from the description or metadata
          const ebookId = session.metadata?.ebookId || null;
          
          return {
            purchase_id: purchaseData.id,
            ebook_id: ebookId,
            price: item.amount_total / 100 // Convert from cents to dollars
          };
        });
        
        if (purchaseItems.length > 0) {
          const { data: itemsData, error: itemsError } = await supabase
            .from('purchase_items')
            .insert(purchaseItems);
          
          if (itemsError) {
            console.error('Error creating purchase items:', itemsError);
          } else {
            console.log('Created purchase items successfully');
          }
        }
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
