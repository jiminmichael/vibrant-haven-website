
import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui-components/Button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="http://zainhomes.com.ng/Booking/wp-content/uploads/2024/01/cropped-IMG-20240106-WA0007_2_prev_ui.png"
          alt="Luxury building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-estate-900/90 via-estate-900/70 to-estate-900/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <span className="inline-block bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-6">
            Premium Properties
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 max-w-5xl mx-auto leading-tight">
            Your Perfect Home Awaits in Nigeria
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover luxury homes, apartments and investment properties in Lagos and across Nigeria with Zain Homes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-2xl animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow p-4 md:p-6 bg-white">
              <div className="flex items-center">
                <Search className="mr-2 text-estate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for properties in Lagos, Abuja..."
                  className="w-full border-none focus:outline-none text-estate-800 text-lg placeholder-estate-400"
                />
              </div>
            </div>
            <Button 
              className="px-8 py-6 rounded-none text-base"
            >
              Search
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white/95 border-t border-estate-100">
            <div className="p-4 text-left border-r border-estate-100">
              <label className="block text-xs text-estate-500 mb-1">Location</label>
              <div className="flex items-center justify-between">
                <span className="text-estate-800 font-medium">Lagos</span>
                <ChevronDown size={16} className="text-estate-400" />
              </div>
            </div>
            <div className="p-4 text-left border-r border-estate-100">
              <label className="block text-xs text-estate-500 mb-1">Type</label>
              <div className="flex items-center justify-between">
                <span className="text-estate-800 font-medium">Any Type</span>
                <ChevronDown size={16} className="text-estate-400" />
              </div>
            </div>
            <div className="p-4 text-left border-r border-estate-100">
              <label className="block text-xs text-estate-500 mb-1">Price Range</label>
              <div className="flex items-center justify-between">
                <span className="text-estate-800 font-medium">Any Price</span>
                <ChevronDown size={16} className="text-estate-400" />
              </div>
            </div>
            <div className="p-4 text-left">
              <label className="block text-xs text-estate-500 mb-1">Bedrooms</label>
              <div className="flex items-center justify-between">
                <span className="text-estate-800 font-medium">Any</span>
                <ChevronDown size={16} className="text-estate-400" />
              </div>
            </div>
          </div>
        </div>

        <a 
          href="#properties" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/90 hover:text-white flex flex-col items-center transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </div>
  );
};
