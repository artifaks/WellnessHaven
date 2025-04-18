import { Ebook } from "@/types";
import { stripePromise } from "./config";
import { toast } from "sonner";

// API base URL - points to our backend server
const API_BASE_URL = 'http://localhost:3001';

// Function to create a Stripe checkout session for an eBook
export const createCheckoutSession = async (ebook: Ebook) => {
  try {
    console.log('Creating checkout session for ebook:', ebook);
    
    const stripe = await stripePromise;
    
    if (!stripe) {
      console.error('Stripe failed to initialize');
      throw new Error("Stripe failed to initialize");
    }

    console.log('Making API request to backend server:', `${API_BASE_URL}/api/create-checkout-session`);
    
    // Create a checkout session via our backend server
    const response = await fetch(`${API_BASE_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ebook: {
          id: ebook.id,
          name: ebook.title,
          price: ebook.price,
          author: ebook.author,
        },
      }),
      // Add mode 'cors' to explicitly request CORS
      mode: 'cors',
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      let errorMessage = 'Failed to create checkout session';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
        console.error('Error response data:', errorData);
      } catch (jsonError) {
        console.error('Could not parse error response as JSON:', jsonError);
        // If we can't parse the response as JSON, try to get the text
        const errorText = await response.text();
        console.error('Error response text:', errorText);
      }
      throw new Error(errorMessage);
    }

    const session = await response.json();
    console.log('Checkout session created:', session);

    // If the session has a direct URL (Stripe Checkout), redirect to it
    if (session.url) {
      console.log('Redirecting to Stripe Checkout URL:', session.url);
      window.location.href = session.url;
      return;
    }

    // Otherwise, use redirectToCheckout method
    console.log('Using redirectToCheckout with sessionId:', session.id);
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error('Stripe redirectToCheckout error:', result.error);
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    toast.error('Unable to process checkout. Please try again.');
    throw error;
  }
};

// Function to handle successful purchase
export const handlePurchaseSuccess = async (sessionId: string) => {
  try {
    // Verify the purchase with our backend server
    const response = await fetch(`${API_BASE_URL}/api/verify-purchase?session_id=${sessionId}`, {
      method: 'GET',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to verify purchase');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error verifying purchase:', error);
    toast.error('Unable to verify your purchase. Please contact support.');
    throw error;
  }
};
