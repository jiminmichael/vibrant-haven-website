
import React from "react";
import { SectionHeading } from "./ui-components/SectionHeading";
import { Button } from "./ui-components/Button";
import { CheckCircle } from "lucide-react";

export const AboutUs = () => {
  const advantages = [
    "20+ years of experience in luxury real estate",
    "Personalized service for each client",
    "Carefully selected premium properties",
    "Expert knowledge of local markets",
    "Transparent communication throughout the process",
  ];

  return (
    <section id="about" className="bg-estate-50 py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="We Help You Find Your Dream Home"
              subtitle="Our mission is to help discerning clients find their perfect property through personalized service and exceptional market expertise"
              className="text-left mb-8"
            />

            <p className="text-estate-600 mb-8">
              With over two decades of experience in luxury real estate, ESTATE has earned a reputation for excellence and integrity. We understand that finding the right property is about more than just square footage and amenities—it's about finding a place where you truly belong.
            </p>

            <ul className="space-y-3 mb-10">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-accent-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-estate-700">{advantage}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">Learn More About Us</Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl animate-zoom-in">
              <img
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Luxury home interior"
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
