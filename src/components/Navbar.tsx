
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "./ui-components/Button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-estate-900 font-serif text-2xl font-bold">
              ZAIN<span className="text-accent-500">HOMES</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-estate-700 hover:text-estate-900 text-sm font-medium link-underline",
                  isActive(item.href) && "text-accent-500 font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <div className="mr-6 flex items-center text-estate-700">
              <Phone size={16} className="mr-2 text-accent-500" />
              <span className="text-sm font-medium">+2349039045094</span>
            </div>
            <Button>Schedule a Viewing</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-estate-700 hover:text-estate-900"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen
            ? "max-h-screen opacity-100 visible bg-white"
            : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="p-4 space-y-2 divide-y divide-estate-100">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "block py-3 text-base font-medium text-estate-700 hover:text-estate-900",
                isActive(item.href) && "text-accent-500 font-semibold"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <div className="flex items-center py-3 text-estate-700">
              <Phone size={16} className="mr-2 text-accent-500" />
              <span className="text-base font-medium">+234 903 904 5094</span>
            </div>
            <Button fullWidth className="mt-3">
              Schedule a Viewing
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
