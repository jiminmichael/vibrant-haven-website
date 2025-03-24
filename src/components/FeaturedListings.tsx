
import React from "react";
import { SectionHeading } from "./ui-components/SectionHeading";
import { PropertyCard } from "./PropertyCard";
import { Button } from "./ui-components/Button";
import { ArrowRight } from "lucide-react";

export const FeaturedListings = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Modern Villa with Pool",
      location: "Beverly Hills, CA",
      price: "$4,500,000",
      beds: 5,
      baths: 4,
      area: "4,200 sq ft",
      featured: true,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      beds: 3,
      baths: 3.5,
      area: "2,800 sq ft",
      featured: false,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Waterfront Residence",
      location: "Miami Beach, FL",
      price: "$5,750,000",
      beds: 6,
      baths: 5,
      area: "5,100 sq ft",
      featured: false,
    },
  ];

  return (
    <section id="properties" className="section-container">
      <SectionHeading
        title="Featured Properties"
        subtitle="Explore our handpicked selection of premium properties in the most desirable locations"
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard 
            key={property.id}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
            beds={property.beds}
            baths={property.baths}
            area={property.area}
            featured={property.featured}
            className="animate-zoom-in"
            style={{ animationDelay: `${property.id * 0.1}s` }}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button 
          variant="outline" 
          size="lg"
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          View All Properties
        </Button>
      </div>
    </section>
  );
};
