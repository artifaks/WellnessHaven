
import { Link } from "react-router-dom";
import { Leaf, Mail, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-herb-900 text-herb-100">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
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

          {/* Newsletter Signup */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Stay Updated</h3>
            <p className="font-sans text-sm text-herb-200">
              Join 2,000+ subscribers learning herbal healing
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="border-herb-700 bg-herb-800 text-white placeholder:text-herb-400 focus:border-herb-500"
              />
              <Button className="bg-herb-600 hover:bg-herb-500">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-lg font-medium text-white">Connect With Us</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:admin@wellnessisgolden.com" 
                className="flex items-center space-x-2 font-sans text-sm text-herb-200 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>admin@wellnessisgolden.com</span>
              </a>
              
              {/* Instagram Preview */}
              <div className="mt-3">
                <h4 className="mb-2 font-sans text-sm font-medium text-herb-200">Instagram</h4>
                <div className="grid grid-cols-3 gap-1">
                  <a 
                    href="https://www.instagram.com/wellness_is_golden" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-item overflow-hidden rounded-sm"
                  >
                    <img 
                      src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//medicinal-herbs-and-tinctures.jpg" 
                      alt="Instagram post" 
                      className="aspect-square h-16 w-16 object-cover"
                    />
                  </a>
                  <a 
                    href="https://www.instagram.com/wellness_is_golden" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-item overflow-hidden rounded-sm"
                  >
                    <img 
                      src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//healing-medical-herbs-and-flowers-2025-02-25-00-03-28-utc.jpg" 
                      alt="Instagram post" 
                      className="aspect-square h-16 w-16 object-cover"
                    />
                  </a>
                  <a 
                    href="https://www.instagram.com/wellness_is_golden" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-item overflow-hidden rounded-sm"
                  >
                    <img 
                      src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//herbal-db-logo.png" 
                      alt="Instagram post" 
                      className="aspect-square h-16 w-16 object-cover"
                    />
                  </a>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <a 
                  href="https://www.instagram.com/wellness_is_golden" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-herb-300 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/Wellnessisgolden" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-herb-300 transition-colors hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
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
