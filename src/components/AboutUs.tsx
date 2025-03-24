
import React from "react";
import { SectionHeading } from "./ui-components/SectionHeading";
import { Button } from "./ui-components/Button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const advantages = [
    "Premier luxury real estate company in Nigeria",
    "Extensive portfolio of properties in Lagos' most prestigious areas",
    "Expert local knowledge and market insights",
    "Personalized service for each client",
    "Complete support throughout the buying or renting process",
  ];

  return (
    <section id="about" className="bg-estate-50 py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Nigeria's Leading Luxury Real Estate Company"
              subtitle="At Zain Homes, we provide exceptional real estate solutions tailored to meet the needs of discerning clients"
              className="text-left mb-8"
            />

            <p className="text-estate-600 mb-8">
              With years of experience in Nigeria's luxury real estate market, Zain Homes has established itself as a trusted name in property acquisition, sales, and advisory services. We understand that finding the right property is about more than just location and amenities—it's about finding a place that reflects your lifestyle and aspirations.
            </p>

            <ul className="space-y-3 mb-10">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-estate-700">{advantage}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button size="lg">Learn More About Us</Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl animate-zoom-in">
              <img
                src="https://zainhomes.com.ng/wp-content/uploads/2020/07/Banner-5-1.jpg"
                alt="Luxury home in Lagos"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-500/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-estate-300/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
