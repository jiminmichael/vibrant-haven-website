
import React from "react";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  featured?: boolean;
  className?: string;
};

export const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  featured = false,
  className,
}: PropertyCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl",
        featured ? "border-2 border-accent-500" : "border border-estate-200",
        className
      )}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-accent-600 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-estate-900/80 to-transparent h-1/3" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-medium text-estate-900 line-clamp-1">{title}</h3>
          <p className="text-accent-600 font-semibold">{price}</p>
        </div>
        
        <div className="flex items-center mb-4 text-estate-600">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex justify-between pt-4 border-t border-estate-100">
          <div className="flex items-center text-estate-700">
            <BedDouble size={18} className="mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center text-estate-700">
            <Bath size={18} className="mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center text-estate-700">
            <Square size={18} className="mr-1" />
            <span className="text-sm">{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
