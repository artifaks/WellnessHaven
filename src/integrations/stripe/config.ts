import { loadStripe } from '@stripe/stripe-js';

// Make sure to add your Stripe publishable key to the .env file
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

// Initialize Stripe
export const stripePromise = loadStripe(stripePublishableKey);
