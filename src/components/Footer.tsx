
import { Link } from "react-router-dom";
import { Leaf, Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-herb-900 text-herb-100">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-herb-300" />
              <span className="font-serif text-xl font-medium text-white">Herbal Harmony</span>
            </Link>
            <p className="font-sans text-sm text-herb-200">
              Discover the healing power of nature with our curated collection of medicinal herbs and expert resources.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Explore</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/herbs" className="font-sans text-sm text-herb-200 transition-colors hover:text-white">
                Herb Database
              </Link>
              <Link to="/chat" className="font-sans text-sm text-herb-200 transition-colors hover:text-white">
                Herbal Chat
              </Link>
              <Link to="/ebooks" className="font-sans text-sm text-herb-200 transition-colors hover:text-white">
                Ebook Store
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:contact@herbalharmony.com" 
                className="flex items-center space-x-2 font-sans text-sm text-herb-200 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>contact@herbalharmony.com</span>
              </a>
              <div className="flex space-x-3 pt-2">
                <a 
                  href="#" 
                  className="text-herb-300 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-herb-300 transition-colors hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-herb-800 pt-6 text-center">
          <p className="font-sans text-xs text-herb-300">
            © {currentYear} Herbal Harmony. All rights reserved.
          </p>
          <p className="mt-2 font-sans text-xs text-herb-400">
            Disclaimer: Information provided is for educational purposes only and is not intended as medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
