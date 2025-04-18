
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Herb Database", path: "/herbs" },
    { name: "Tea Recipes", path: "/tea-recipes" },
    { name: "Blog", path: "/blog" },
    { name: "Herbal Chat", path: "/chat" },
    { name: "Ebook Store", path: "/ebooks" },
    { name: "Admin", path: "/admin/blog" },
  ];

  return (
    <nav className="bg-herb-100 py-4 md:py-6 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center py-3 md:py-4"
            onClick={closeMenu}
          >
            <img 
              src="/images/herbal-db-logo.png" 
              alt="Wellness is Golden" 
              className="h-32 md:h-48 lg:h-56 w-auto max-w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-base font-medium transition-colors hover:text-herb-600 ${
                  isActive(link.path) ? "text-herb-600" : "text-herb-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="text-herb-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-herb-200 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans px-2 py-1 text-base transition-colors hover:text-herb-600 ${
                    isActive(link.path) 
                      ? "font-medium text-herb-600" 
                      : "text-herb-800"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
