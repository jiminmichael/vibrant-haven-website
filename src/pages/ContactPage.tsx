
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28"> {/* Added padding to account for fixed navbar */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
