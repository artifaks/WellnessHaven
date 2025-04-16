
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DisclaimerProps {
  className?: string;
}

const Disclaimer = ({ className = "" }: DisclaimerProps) => {
  return (
    <Alert className={`bg-herb-50 text-herb-700 ${className}`}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="font-serif">Medical Disclaimer</AlertTitle>
      <AlertDescription className="font-sans text-xs">
        The information provided on this website is for educational purposes only and is not intended to be a substitute for medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
      </AlertDescription>
    </Alert>
  );
};

export default Disclaimer;
