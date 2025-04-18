import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { handlePurchaseSuccess } from "@/integrations/stripe/checkout";
import Layout from "@/components/Layout";
import { toast } from "sonner";

interface PurchaseData {
  ebookId: string;
  ebookTitle: string;
  downloadUrl: string;
  purchaseDate: string;
  isMock?: boolean;
}

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get session_id directly from URL as suggested
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    console.log('Session ID from URL:', sessionId);
    
    if (!sessionId) {
      console.error('Missing session_id in URL parameters');
      toast.error("Invalid checkout session - Missing session ID");
      navigate("/ebooks");
      return;
    }

    const verifyPurchase = async () => {
      try {
        setIsLoading(true);
        console.log('Verifying purchase with session ID:', sessionId);
        
        // Add timeout to ensure we don't hang indefinitely
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Verification request timed out')), 15000)
        );
        
        // Race the verification against the timeout
        const data = await Promise.race([
          handlePurchaseSuccess(sessionId),
          timeoutPromise
        ]) as PurchaseData;
        
        console.log('Purchase verification successful:', data);
        setPurchaseData(data);
        toast.success("Purchase verified successfully!");
      } catch (error) {
        console.error("Error verifying purchase:", error);
        toast.error("Unable to verify your purchase. Please contact support.");
        
        // Log more detailed error information
        if (error instanceof Error) {
          console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
          });
        }
      } finally {
        setIsLoading(false);
      }
    };

    verifyPurchase();
  }, [searchParams, navigate]);

  // We're now using real data from our backend server
  // The verifyPurchase function above handles this

  return (
    <Layout>
      <div className="container mx-auto flex flex-col px-4 py-12 md:px-6">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-herb-800 md:text-4xl">
            Thank You for Your Purchase!
          </h1>
          <p className="mt-3 font-sans text-lg text-herb-600">
            Your transaction has been completed successfully
          </p>
        </div>

        <Card className="mx-auto w-full max-w-2xl shadow-md">
          <CardContent className="p-8">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-herb-200 border-t-herb-600"></div>
                <p className="font-sans text-herb-700">Verifying your purchase...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-herb-100">
                    <CheckCircle className="h-10 w-10 text-herb-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-herb-800">
                    Purchase Confirmed
                  </h2>
                  <p className="mt-1 font-sans text-herb-600">
                    Your eBook is ready to download
                  </p>
                </div>

                <div className="rounded-lg bg-herb-50 p-6">
                  <h3 className="mb-3 font-serif text-lg font-medium text-herb-700">
                    Order Details
                  </h3>
                  <div className="space-y-2 font-sans text-herb-600">
                    <p><span className="font-medium">eBook:</span> {purchaseData?.ebookTitle}</p>
                    <p><span className="font-medium">Order Date:</span> {new Date(purchaseData?.purchaseDate || "").toLocaleDateString()}</p>
                    <p><span className="font-medium">Order ID:</span> ORD-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                  </div>
                </div>

                <div className="rounded-md bg-amber-50 p-4 border border-amber-200 mb-4">
                  <h3 className="font-serif text-sm font-semibold text-amber-800 mb-1">No Refund Policy</h3>
                  <p className="font-sans text-xs text-amber-700">
                    Please note that due to the digital nature of our products, all purchases are final and non-refundable. 
                    We encourage you to download and save your eBook immediately. If you encounter any technical issues 
                    accessing your purchase, please contact our support team at admin@wellnessisgolden.com.
                  </p>
                </div>

                <div className="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    className="flex-1 bg-herb-600 text-white hover:bg-herb-700"
                    onClick={() => {
                      if (purchaseData?.isMock) {
                        // For mock downloads, create a custom PDF with the ebook title and content
                        const filename = `${purchaseData.ebookTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
                        
                        // Generate a data URL for a simple PDF with content about the ebook
                        // This creates a more realistic experience than using a generic dummy PDF
                        const title = purchaseData.ebookTitle;
                        const date = new Date().toLocaleDateString();
                        const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
                        
                        // Create a Blob with PDF content (using a data URL approach)
                        const pdfContent = `
                        <html>
                          <head>
                            <title>${title}</title>
                            <style>
                              body { font-family: Arial, sans-serif; margin: 50px; }
                              h1 { color: #2e7d32; }
                              .cover { text-align: center; margin-bottom: 40px; }
                              .cover img { max-width: 300px; border: 1px solid #ccc; }
                              .meta { margin: 20px 0; color: #666; }
                              .chapter { margin-top: 30px; }
                              .footer { margin-top: 50px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }
                            </style>
                          </head>
                          <body>
                            <div class="cover">
                              <h1>${title}</h1>
                              <p>By Wellness is Golden</p>
                              <p class="meta">Purchase Date: ${date} | Order ID: ${orderId}</p>
                            </div>
                            <div class="chapter">
                              <h2>Introduction</h2>
                              <p>Thank you for purchasing this ebook from Herbal Wise Haven. This is a preview version of the full content.</p>
                              <p>In the complete version, you would find comprehensive information about herbal remedies, wellness practices, and natural health solutions.</p>
                            </div>
                            <div class="chapter">
                              <h2>Chapter 1: Getting Started</h2>
                              <p>The journey to natural wellness begins with understanding the fundamental principles of herbal medicine and holistic health practices.</p>
                              <p>This chapter would normally contain detailed information about the basics of using herbs for health and wellness.</p>
                            </div>
                            <div class="footer">
                              <p>© ${new Date().getFullYear()} Herbal Wise Haven. All rights reserved.</p>
                              <p>This is a sample preview. In a production environment, you would receive the complete ebook.</p>
                            </div>
                          </body>
                        </html>
                        `;
                        
                        // Convert HTML to a Blob
                        const blob = new Blob([pdfContent], { type: 'text/html' });
                        const url = URL.createObjectURL(blob);
                        
                        // Create an anchor element and trigger download
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = filename;
                        a.target = '_blank';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        
                        // Clean up the URL object
                        setTimeout(() => URL.revokeObjectURL(url), 100);
                        
                        toast.success(`Downloading ${purchaseData.ebookTitle}`);
                      } else {
                        // For real downloads, open the URL in a new tab
                        window.open(purchaseData?.downloadUrl, "_blank");
                      }
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download eBook
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-herb-300 text-herb-700 hover:bg-herb-50"
                    onClick={() => navigate("/ebooks")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to eBook Store
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
