
import React from "react";
import { SectionHeading } from "./ui-components/SectionHeading";
import { Home, Building, Key, Users, PenTool, Briefcase } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Home size={24} />,
      title: "Residential Sales",
      description: "Find your dream home with our curated selection of premium residential properties in the most desirable locations."
    },
    {
      icon: <Building size={24} />,
      title: "Commercial Real Estate",
      description: "Strategic commercial property solutions for businesses looking to establish or expand their physical presence."
    },
    {
      icon: <Key size={24} />,
      title: "Property Management",
      description: "Comprehensive property management services to protect and enhance the value of your real estate investments."
    },
    {
      icon: <Users size={24} />,
      title: "Advisory Services",
      description: "Expert guidance on real estate investments, market trends, and strategies to maximize your portfolio's potential."
    },
    {
      icon: <PenTool size={24} />,
      title: "Interior Design",
      description: "Transformative interior design services to elevate your property's aesthetic and functional appeal."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Legal Assistance",
      description: "Professional legal support throughout the property transaction process to ensure smooth and compliant transfers."
    }
  ];

  return (
    <section id="services" className="section-container">
      <SectionHeading
        title="Our Services"
        subtitle="Comprehensive real estate services tailored to your unique needs"
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-8 rounded-xl border border-estate-100 hover:border-accent-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 glass-panel"
          >
            <div className="w-14 h-14 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600 mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-estate-800">
              {service.title}
            </h3>
            <p className="text-estate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
