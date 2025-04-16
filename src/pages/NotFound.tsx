import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-herb-50 px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-herb-100">
        <Leaf className="h-10 w-10 text-herb-600" />
      </div>
      <h1 className="mb-2 font-serif text-4xl font-bold text-herb-800 md:text-5xl">
        404
      </h1>
      <p className="mb-6 font-sans text-xl text-herb-600">
        Oops! This page appears to have withered away.
      </p>
      <p className="mb-8 max-w-md font-sans text-herb-700">
        The page you're looking for doesn't exist or has been moved. Let's get you back on the path.
      </p>
      <Button asChild className="bg-herb-600 text-white hover:bg-herb-700">
        <Link to="/" className="flex items-center">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
