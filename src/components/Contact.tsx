
import React from "react";
import { SectionHeading } from "./ui-components/SectionHeading";
import { Button } from "./ui-components/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-estate-900 text-white py-16 md:py-24">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions about a property or our services? Contact Zain Homes today and our team will be happy to assist you."
          center
          className="text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-serif font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-accent-400 mt-1 mr-4" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">+234 903 904 5094</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-accent-400 mt-1 mr-4" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">info@zainhomes.com.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent-400 mt-1 mr-4" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Address</p>
                    <p className="text-white font-medium">Suit C2, Silver line plaza, Garki 2, Abuja 900103, Federal Capital Territory</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-400 mt-1 mr-4" />
                  <div>
                    <p className="text-white/70 text-sm mb-1">Office Hours</p>
                    <p className="text-white font-medium">Monday-Friday: 9am-6pm</p>
                    <p className="text-white font-medium">Saturday: 10am-4pm</p>
                    <p className="text-white font-medium">Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-semibold mb-6 text-estate-900">Send Us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-estate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-estate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-estate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button fullWidth size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
