
import React from "react";
import { SectionHeading } from "./ui-components/SectionHeading";
import { PropertyCard } from "./PropertyCard";
import { Button } from "./ui-components/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedListings = () => {
  const properties = [
    {
      id: 1,
      image: "https://zainhomes.com.ng/wp-content/uploads/2021/10/pexels-expect-best-323780-scaled.jpg",
      title: "Luxury Villa in Lekki Phase 1",
      location: "Lekki Phase 1, Lagos",
      price: "₦150,000,000",
      beds: 5,
      baths: 4,
      area: "450 sq m",
      featured: true,
    },
    {
      id: 2,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-1.jpg",
      title: "Modern Apartment in Victoria Island",
      location: "Victoria Island, Lagos",
      price: "₦85,000,000",
      beds: 3,
      baths: 3,
      area: "210 sq m",
      featured: false,
    },
    {
      id: 3,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-2.jpg",
      title: "Family Home in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "₦220,000,000",
      beds: 6,
      baths: 5,
      area: "580 sq m",
      featured: false,
    },
    {
      id: 4,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-3.jpg",
      title: "Penthouse in Banana Island",
      location: "Banana Island, Lagos",
      price: "₦300,000,000",
      beds: 4,
      baths: 4.5,
      area: "350 sq m",
      featured: true,
    },
    {
      id: 5,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/Banner-5-1.jpg",
      title: "Waterfront Estate Villa",
      location: "Osborne, Lagos",
      price: "₦250,000,000",
      beds: 5,
      baths: 5,
      area: "520 sq m",
      featured: false,
    },
    {
      id: 6,
      image: "https://zainhomes.com.ng/wp-content/uploads/2021/10/pexels-expect-best-323780-scaled.jpg",
      title: "Executive Apartment in Oniru",
      location: "Oniru, Lagos",
      price: "₦120,000,000",
      beds: 3,
      baths: 3,
      area: "230 sq m",
      featured: false,
    },
  ];

  // For the homepage, we'll show only 3 properties
  const displayProperties = properties.slice(0, 3);

  return (
    <section id="properties" className="section-container">
      <SectionHeading
        title="Featured Properties"
        subtitle="Explore our handpicked selection of premium properties in the most desirable locations in Nigeria"
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProperties.map((property, index) => (
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
            id={property.id}
            className="animate-zoom-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/properties">
          <Button 
            variant="outline" 
            size="lg"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            View All Properties
          </Button>
        </Link>
      </div>
    </section>
  );
};
