import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ebook } from "@/types";
import { createCheckoutSession } from "@/integrations/stripe/checkout";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RefundPolicy from "./RefundPolicy";
import { supabase } from "@/integrations/supabase/client";

interface CheckoutButtonProps {
  ebook: Ebook;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

const CheckoutButton = ({ 
  ebook, 
  variant = "default", 
  size = "default", 
  className,
  children 
}: CheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  
  // Get the current user when the component mounts
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserId(data.user.id);
        console.log('Current user ID:', data.user.id);
      }
    };
    
    getCurrentUser();
  }, []);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      console.log('Starting checkout with user ID:', userId);
      await createCheckoutSession(ebook, userId || undefined);
      // Note: The user will be redirected to Stripe's checkout page
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Unable to process checkout. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setShowConfirmation(true)}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
            Processing...
          </div>
        ) : (
          <>
            {!children && (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase
              </>
            )}
            {children}
          </>
        )}
      </Button>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-herb-800">Confirm Purchase</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <div className="mb-6 rounded-md bg-herb-50 p-4">
              <h3 className="mb-2 font-serif text-sm font-semibold text-herb-700">Purchase Details</h3>
              <p className="mb-1 font-sans text-sm text-herb-600"><span className="font-medium">Item:</span> {ebook.title}</p>
              <p className="font-sans text-sm text-herb-600"><span className="font-medium">Price:</span> ${ebook.price.toFixed(2)}</p>
            </div>
            
            <RefundPolicy />
            
            <p className="mt-4 font-sans text-xs text-herb-600">
              By clicking "Proceed to Checkout", you acknowledge that you have read and agree to our no refund policy for digital products.
            </p>
          </div>
          
          <DialogFooter className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Button 
              variant="outline" 
              onClick={() => setShowConfirmation(false)}
              className="border-herb-300 text-herb-700 hover:bg-herb-50"
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                setShowConfirmation(false);
                handleCheckout();
              }}
              className="bg-herb-600 text-white hover:bg-herb-700"
              disabled={isLoading}
            >
              Proceed to Checkout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutButton;
