
import React, { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const AdminContactInfo = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "+234 123 456 7890",
    email: "info@estatenigeria.com",
    address: "123 Estate Road, Lekki, Lagos, Nigeria",
    officeHours: "Monday - Friday: 9am - 5pm, Saturday: 10am - 2pm",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7376245650974!2d3.4796180112104516!3d6.429678724421653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cdcd58!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1662745345018!5m2!1sen!2sng"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    toast({
      title: "Success",
      description: "Contact information updated successfully.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-serif font-semibold">Contact Information</h1>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Contact Details</CardTitle>
            <CardDescription>Update your contact information visible to customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-accent-500" />
                    <Label htmlFor="phone">Phone Number</Label>
                  </div>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={contactInfo.phone} 
                    onChange={handleChange} 
                    placeholder="Phone Number" 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-accent-500" />
                    <Label htmlFor="email">Email Address</Label>
                  </div>
                  <Input 
                    id="email" 
                    name="email" 
                    value={contactInfo.email} 
                    onChange={handleChange} 
                    placeholder="Email Address" 
                    type="email" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-accent-500" />
                  <Label htmlFor="address">Office Address</Label>
                </div>
                <Input 
                  id="address" 
                  name="address" 
                  value={contactInfo.address} 
                  onChange={handleChange} 
                  placeholder="Office Address" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="officeHours">Office Hours</Label>
                <Input 
                  id="officeHours" 
                  name="officeHours" 
                  value={contactInfo.officeHours} 
                  onChange={handleChange} 
                  placeholder="Office Hours" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mapEmbedUrl">Google Maps Embed URL</Label>
                <Textarea 
                  id="mapEmbedUrl" 
                  name="mapEmbedUrl" 
                  value={contactInfo.mapEmbedUrl} 
                  onChange={handleChange} 
                  placeholder="Google Maps Embed URL" 
                  rows={3}
                />
                <p className="text-sm text-muted-foreground">
                  Enter the embed URL from Google Maps to display your office location on the contact page.
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2">Map Preview</h3>
                <div className="rounded-lg overflow-hidden border border-estate-200 h-[300px]">
                  <iframe 
                    src={contactInfo.mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminContactInfo;
