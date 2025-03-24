
import React, { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash, Home, Building, Key, Users, PenTool, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const AVAILABLE_ICONS = [
  { name: "Home", component: <Home size={24} /> },
  { name: "Building", component: <Building size={24} /> },
  { name: "Key", component: <Key size={24} /> },
  { name: "Users", component: <Users size={24} /> },
  { name: "PenTool", component: <PenTool size={24} /> },
  { name: "Briefcase", component: <Briefcase size={24} /> },
];

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      title: "Residential Sales",
      description: "Find your dream home with our extensive selection of luxury residential properties in Lagos and across Nigeria.",
      icon: "Home"
    },
    {
      id: "2",
      title: "Commercial Real Estate",
      description: "Strategic commercial property solutions for businesses looking to establish or expand in Nigeria's growing market.",
      icon: "Building"
    },
    {
      id: "3",
      title: "Property Management",
      description: "Comprehensive property management services to protect and enhance the value of your Nigerian real estate investments.",
      icon: "Key"
    },
    {
      id: "4",
      title: "Investment Advisory",
      description: "Expert guidance on Nigerian real estate investments, market trends, and strategies to maximize your portfolio's potential.",
      icon: "Users"
    },
    {
      id: "5",
      title: "Interior Design",
      description: "Transformative interior design services to elevate your property's aesthetic and functional appeal to meet Nigerian tastes.",
      icon: "PenTool"
    },
    {
      id: "6",
      title: "Legal Assistance",
      description: "Professional legal support throughout the property transaction process to ensure smooth and compliant transfers in Nigeria.",
      icon: "Briefcase"
    }
  ]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const [newServiceTitle, setNewServiceTitle] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");
  const [newServiceIcon, setNewServiceIcon] = useState("Home");

  const handleOpenCreateDialog = () => {
    setNewServiceTitle("");
    setNewServiceDescription("");
    setNewServiceIcon("Home");
    setOpenCreateDialog(true);
  };

  const handleCreateService = () => {
    const newService: Service = {
      id: String(Date.now()),
      title: newServiceTitle,
      description: newServiceDescription,
      icon: newServiceIcon,
    };

    setServices([...services, newService]);
    setOpenCreateDialog(false);
    toast({
      title: "Success",
      description: "Service created successfully.",
    });
  };

  const handleOpenEditDialog = (id: string) => {
    const serviceToEdit = services.find(service => service.id === id);
    if (serviceToEdit) {
      setNewServiceTitle(serviceToEdit.title);
      setNewServiceDescription(serviceToEdit.description);
      setNewServiceIcon(serviceToEdit.icon);
      setSelectedServiceId(id);
      setOpenEditDialog(true);
    }
  };

  const handleEditService = () => {
    setServices(services.map(service => 
      service.id === selectedServiceId 
        ? {
            ...service,
            title: newServiceTitle,
            description: newServiceDescription,
            icon: newServiceIcon
          }
        : service
    ));
    
    setOpenEditDialog(false);
    setSelectedServiceId(null);
    toast({
      title: "Success",
      description: "Service updated successfully.",
    });
  };

  const handleOpenDeleteDialog = (id: string) => {
    setSelectedServiceId(id);
    setOpenDeleteDialog(true);
  };

  const handleDeleteService = () => {
    setServices(services.filter(service => service.id !== selectedServiceId));
    setOpenDeleteDialog(false);
    setSelectedServiceId(null);
    toast({
      title: "Success",
      description: "Service deleted successfully.",
    });
  };

  // Helper function to get icon component by name
  const getIconComponent = (iconName: string) => {
    const icon = AVAILABLE_ICONS.find(i => i.name === iconName);
    return icon ? icon.component : <Home size={24} />;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-serif font-semibold">Services</h1>
          <Button onClick={handleOpenCreateDialog}>
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Service List</CardTitle>
            <CardDescription>Manage your services and offerings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="p-6 rounded-xl border border-estate-100 hover:border-accent-300 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center text-accent-500">
                      {getIconComponent(service.icon)}
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" onClick={() => handleOpenEditDialog(service.id)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleOpenDeleteDialog(service.id)}>
                        <Trash className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                  <p className="text-estate-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Create Service Dialog */}
        <Dialog open={openCreateDialog} onOpenChange={setOpenCreateDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>Create a new service offering.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Service Title</Label>
                <Input 
                  id="title" 
                  value={newServiceTitle} 
                  onChange={(e) => setNewServiceTitle(e.target.value)} 
                  placeholder="e.g. Property Management" 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={newServiceDescription} 
                  onChange={(e) => setNewServiceDescription(e.target.value)} 
                  placeholder="Describe this service..." 
                  rows={4}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="icon">Icon</Label>
                <Select 
                  value={newServiceIcon} 
                  onValueChange={setNewServiceIcon}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an icon" />
                  </SelectTrigger>
                  <SelectContent>
                    {AVAILABLE_ICONS.map((icon) => (
                      <SelectItem key={icon.name} value={icon.name}>
                        <div className="flex items-center">
                          <div className="mr-2">{icon.component}</div>
                          <span>{icon.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleCreateService}>
                Create Service
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Service Dialog */}
        <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>Update service details.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Service Title</Label>
                <Input 
                  id="edit-title" 
                  value={newServiceTitle} 
                  onChange={(e) => setNewServiceTitle(e.target.value)} 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea 
                  id="edit-description" 
                  value={newServiceDescription} 
                  onChange={(e) => setNewServiceDescription(e.target.value)} 
                  rows={4}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="edit-icon">Icon</Label>
                <Select 
                  value={newServiceIcon} 
                  onValueChange={setNewServiceIcon}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an icon" />
                  </SelectTrigger>
                  <SelectContent>
                    {AVAILABLE_ICONS.map((icon) => (
                      <SelectItem key={icon.name} value={icon.name}>
                        <div className="flex items-center">
                          <div className="mr-2">{icon.component}</div>
                          <span>{icon.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleEditService}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Service Dialog */}
        <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Service</DialogTitle>
              <DialogDescription>Are you sure you want to delete this service? This action cannot be undone.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                variant="outline"
                className="text-red-500 hover:bg-red-50"
                onClick={handleDeleteService}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminServices;
