
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="text-white font-serif text-2xl font-bold inline-block mb-6">
              ESTATE<span className="text-accent-500">.</span>
            </a>
            <p className="text-estate-300 mb-6 max-w-xs">
              Premium real estate services for discerning clients seeking exceptional properties and personalized attention.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-estate-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-estate-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-estate-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-estate-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#properties" className="text-estate-300 hover:text-white transition-colors duration-300">Properties</a>
              </li>
              <li>
                <a href="#about" className="text-estate-300 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-estate-300 hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-estate-300 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Properties</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors duration-300">Luxury Homes</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors duration-300">Condominiums</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors duration-300">Waterfront Properties</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors duration-300">Commercial Spaces</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors duration-300">New Developments</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Subscribe</h3>
            <p className="text-estate-300 mb-4">
              Stay updated with our latest properties and real estate news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg bg-estate-700 border border-estate-600 text-white w-full focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
                <button 
                  type="submit" 
                  className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-estate-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-estate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-estate-400 text-sm">
              &copy; {new Date().getFullYear()} ESTATE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-estate-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-estate-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-estate-400 hover:text-white text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
