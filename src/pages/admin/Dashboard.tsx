
import React from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Buildings, Users, FileText, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-serif font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Properties</CardTitle>
              <Buildings className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Total properties</p>
              <Link 
                to="/admin/properties" 
                className="flex items-center gap-1 mt-4 text-sm text-blue-500 hover:underline"
              >
                Manage Properties <ArrowUpRight size={14} />
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Inquiries</CardTitle>
              <Users className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Customer inquiries</p>
              <Link 
                to="/admin/contact" 
                className="flex items-center gap-1 mt-4 text-sm text-blue-500 hover:underline"
              >
                View Inquiries <ArrowUpRight size={14} />
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Services</CardTitle>
              <FileText className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Active services</p>
              <Link 
                to="/admin/services" 
                className="flex items-center gap-1 mt-4 text-sm text-blue-500 hover:underline"
              >
                Manage Services <ArrowUpRight size={14} />
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Buildings size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Property Added</p>
                    <p className="text-sm text-muted-foreground">New property "Luxury Villa in Lekki" was added</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">2 days ago</div>
                </div>
                
                <div className="flex items-center gap-4 pb-4 border-b">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="font-medium">New Inquiry</p>
                    <p className="text-sm text-muted-foreground">You received a new property inquiry</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">3 days ago</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Service Updated</p>
                    <p className="text-sm text-muted-foreground">Service "Property Management" was updated</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">1 week ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
