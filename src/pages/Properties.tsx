
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/ui-components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Properties = () => {
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
      type: "sale"
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
      type: "sale"
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
      type: "sale"
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
      type: "sale"
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
      type: "sale"
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
      type: "sale"
    },
    {
      id: 7,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/Banner-5-1.jpg",
      title: "Luxury Apartment for Rent",
      location: "Lekki Phase 1, Lagos",
      price: "₦12,000,000/yr",
      beds: 3,
      baths: 3,
      area: "200 sq m",
      featured: true,
      type: "rent"
    },
    {
      id: 8,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-1.jpg",
      title: "Serviced Apartment",
      location: "Victoria Island, Lagos",
      price: "₦15,000,000/yr",
      beds: 2,
      baths: 2,
      area: "150 sq m",
      featured: false,
      type: "rent"
    },
    {
      id: 9,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-2.jpg",
      title: "Family Home with Garden",
      location: "Ikoyi, Lagos",
      price: "₦25,000,000/yr",
      beds: 4,
      baths: 4,
      area: "400 sq m",
      featured: false,
      type: "rent"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28 pb-16">
        <div className="section-container">
          <SectionHeading
            title="Our Properties"
            subtitle="Browse our collection of premium properties across Nigeria's most prestigious locations"
            center
          />
          
          <Tabs defaultValue="all" className="w-full mt-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:w-[400px]">
                <TabsTrigger value="all">All Properties</TabsTrigger>
                <TabsTrigger value="sale">For Sale</TabsTrigger>
                <TabsTrigger value="rent">For Rent</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
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
                    style={{ animationDelay: `${index * 0.05}s` }}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sale" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties
                  .filter(property => property.type === "sale")
                  .map((property, index) => (
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
                      style={{ animationDelay: `${index * 0.05}s` }}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rent" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties
                  .filter(property => property.type === "rent")
                  .map((property, index) => (
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
                      style={{ animationDelay: `${index * 0.05}s` }}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
