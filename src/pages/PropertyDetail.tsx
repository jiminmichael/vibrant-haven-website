
import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, BedDouble, Bath, Square, Share2, Heart, Calendar, Home } from "lucide-react";
import { Button } from "@/components/ui-components/Button";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally come from an API, but for now we'll use placeholder data
  const property = {
    id: id,
    title: "Luxury Villa in Lekki Phase 1",
    location: "Lekki Phase 1, Lagos",
    price: "₦150,000,000",
    description: "This exquisite villa in Lekki Phase 1 offers luxurious living spaces, premium amenities, and a stunning view. The property features 5 bedrooms, 4 bathrooms, a spacious kitchen with modern appliances, a swimming pool, and a beautifully landscaped garden. Perfect for families looking for comfort and elegance in one of Lagos' most prestigious neighborhoods.",
    features: [
      "Swimming Pool",
      "24/7 Security",
      "Backup Generator",
      "Air Conditioning",
      "Modern Kitchen",
      "Garden",
      "Parking Space",
      "Smart Home System"
    ],
    images: [
      "https://zainhomes.com.ng/wp-content/uploads/2021/10/pexels-expect-best-323780-scaled.jpg",
      "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-1.jpg",
      "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-2.jpg"
    ],
    beds: 5,
    baths: 4,
    area: "450 sq m",
    built: 2020,
    type: "Villa",
    status: "For Sale"
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Property Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-estate-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-estate-600 mb-2">
                <MapPin size={18} className="mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-2xl md:text-3xl text-accent-500 font-semibold">{property.price}</p>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="md:col-span-2 h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <img 
                src={property.images[0]} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <div key={index} className="h-[200px] md:h-[242px] rounded-xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${property.title} ${index + 2}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-estate-100 mb-8">
                <h2 className="text-2xl font-serif font-semibold text-estate-900 mb-6">Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 mb-2">
                      <BedDouble size={24} />
                    </div>
                    <span className="text-estate-600 text-sm">Bedrooms</span>
                    <span className="text-estate-900 font-medium">{property.beds}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 mb-2">
                      <Bath size={24} />
                    </div>
                    <span className="text-estate-600 text-sm">Bathrooms</span>
                    <span className="text-estate-900 font-medium">{property.baths}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 mb-2">
                      <Square size={24} />
                    </div>
                    <span className="text-estate-600 text-sm">Area</span>
                    <span className="text-estate-900 font-medium">{property.area}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 mb-2">
                      <Calendar size={24} />
                    </div>
                    <span className="text-estate-600 text-sm">Year Built</span>
                    <span className="text-estate-900 font-medium">{property.built}</span>
                  </div>
                </div>
                <p className="text-estate-700 leading-relaxed">{property.description}</p>
              </div>
              
              {/* Features */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-estate-100">
                <h2 className="text-2xl font-serif font-semibold text-estate-900 mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-accent-50 rounded-full flex items-center justify-center text-accent-500 mr-3">
                        <Home size={16} />
                      </div>
                      <span className="text-estate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-estate-100 mb-6">
                <h3 className="text-xl font-serif font-semibold text-estate-900 mb-4">Interested in this property?</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-estate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
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
                      className="w-full px-4 py-2 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-estate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-estate-200 focus:ring-accent-500 focus:border-accent-500 text-estate-900"
                      placeholder="I'm interested in this property..."
                      defaultValue="I'm interested in this property and would like to schedule a viewing."
                    ></textarea>
                  </div>
                  <Button fullWidth>
                    Send Inquiry
                  </Button>
                </form>
              </div>
              
              {/* Property Info Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-estate-100">
                <h3 className="text-xl font-serif font-semibold text-estate-900 mb-4">Property Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-estate-100">
                    <span className="text-estate-600">Status</span>
                    <span className="text-estate-900 font-medium">{property.status}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-estate-100">
                    <span className="text-estate-600">Property Type</span>
                    <span className="text-estate-900 font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-estate-100">
                    <span className="text-estate-600">Year Built</span>
                    <span className="text-estate-900 font-medium">{property.built}</span>
                  </div>
                </div>
                <div className="flex space-x-2 mt-6">
                  <Button variant="outline" fullWidth icon={<Share2 size={16} />}>
                    Share
                  </Button>
                  <Button variant="outline" fullWidth icon={<Heart size={16} />}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
