
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28"> {/* Added padding to account for fixed navbar */}
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;
