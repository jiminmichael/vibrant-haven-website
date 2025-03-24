
import React, { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui-components/Button";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the property interface
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  featured: boolean;
  type: string;
  description: string;
  image: string;
}

const AdminProperties = () => {
  // Sample properties data
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      image: "https://zainhomes.com.ng/wp-content/uploads/2021/10/pexels-expect-best-323780-scaled.jpg",
      title: "Luxury Villa in Lekki Phase 1",
      location: "Lekki Phase 1, Lagos",
      price: "₦150,000,000",
      beds: 5,
      baths: 4,
      area: "450 sq m",
      featured: true,
      type: "sale",
      description: "This exquisite villa in Lekki Phase 1 offers luxurious living spaces."
    },
    {
      id: 2,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-1.jpg",
      title: "Modern Apartment in Victoria Island",
      location: "Victoria Island, Lagos",
      price: "₦85,000,000",
      beds: 3,
      baths: 3,
      area: "210 sq m",
      featured: false,
      type: "sale",
      description: "A beautiful modern apartment in the heart of Victoria Island."
    },
    {
      id: 3,
      image: "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-2.jpg",
      title: "Family Home in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "₦220,000,000",
      beds: 6,
      baths: 5,
      area: "580 sq m",
      featured: false,
      type: "sale",
      description: "A spacious family home in a prime location in Ikoyi."
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null);
  const [newProperty, setNewProperty] = useState<Partial<Property>>({
    title: "",
    location: "",
    price: "",
    beds: 0,
    baths: 0,
    area: "",
    featured: false,
    type: "sale",
    description: "",
    image: ""
  });

  // Create a new property
  const handleCreateProperty = () => {
    const id = properties.length > 0 ? Math.max(...properties.map(p => p.id)) + 1 : 1;
    setProperties([...properties, { id, ...newProperty as Property }]);
    setNewProperty({
      title: "",
      location: "",
      price: "",
      beds: 0,
      baths: 0,
      area: "",
      featured: false,
      type: "sale",
      description: "",
      image: ""
    });
    setIsAddDialogOpen(false);
  };

  // Edit property
  const handleEditProperty = () => {
    if (currentProperty) {
      setProperties(properties.map(p => 
        p.id === currentProperty.id ? currentProperty : p
      ));
      setCurrentProperty(null);
      setIsEditDialogOpen(false);
    }
  };

  // Delete property
  const handleDeleteProperty = () => {
    if (currentProperty) {
      setProperties(properties.filter(p => p.id !== currentProperty.id));
      setCurrentProperty(null);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-semibold">Properties</h1>
            <p className="text-muted-foreground">Manage your real estate listings</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button icon={<Plus size={16} />}>Add Property</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Add New Property</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Property Title</Label>
                    <Input 
                      id="title" 
                      value={newProperty.title} 
                      onChange={(e) => setNewProperty({...newProperty, title: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={newProperty.location} 
                      onChange={(e) => setNewProperty({...newProperty, location: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input 
                      id="price" 
                      value={newProperty.price} 
                      onChange={(e) => setNewProperty({...newProperty, price: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type</Label>
                    <select 
                      id="type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={newProperty.type}
                      onChange={(e) => setNewProperty({...newProperty, type: e.target.value})}
                    >
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="beds">Bedrooms</Label>
                    <Input 
                      id="beds" 
                      type="number"
                      value={newProperty.beds?.toString()} 
                      onChange={(e) => setNewProperty({...newProperty, beds: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="baths">Bathrooms</Label>
                    <Input 
                      id="baths" 
                      type="number"
                      value={newProperty.baths?.toString()} 
                      onChange={(e) => setNewProperty({...newProperty, baths: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Area</Label>
                    <Input 
                      id="area" 
                      value={newProperty.area} 
                      onChange={(e) => setNewProperty({...newProperty, area: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input 
                    id="image" 
                    value={newProperty.image} 
                    onChange={(e) => setNewProperty({...newProperty, image: e.target.value})}
                  />
                  <p className="text-xs text-muted-foreground">Enter a URL for the property image</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    rows={3}
                    value={newProperty.description} 
                    onChange={(e) => setNewProperty({...newProperty, description: e.target.value})}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={newProperty.featured}
                    onChange={(e) => setNewProperty({...newProperty, featured: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor="featured">Featured Property</Label>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleCreateProperty}>Create Property</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex justify-between pb-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8" placeholder="Search properties..." />
          </div>
          <div className="space-x-2">
            <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="all">All Properties</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border">
              {properties.map((property) => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-md overflow-hidden">
                        <img className="h-10 w-10 object-cover" src={property.image} alt={property.title} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{property.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {property.beds} beds, {property.baths} baths, {property.area}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {property.featured ? 'Featured' : 'Standard'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => {
                          setCurrentProperty(property);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Pencil size={16} />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => {
                          setCurrentProperty(property);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Edit Property Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
          </DialogHeader>
          {currentProperty && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Property Title</Label>
                  <Input 
                    id="edit-title" 
                    value={currentProperty.title} 
                    onChange={(e) => setCurrentProperty({...currentProperty, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-location">Location</Label>
                  <Input 
                    id="edit-location" 
                    value={currentProperty.location} 
                    onChange={(e) => setCurrentProperty({...currentProperty, location: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-price">Price</Label>
                  <Input 
                    id="edit-price" 
                    value={currentProperty.price} 
                    onChange={(e) => setCurrentProperty({...currentProperty, price: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-type">Property Type</Label>
                  <select 
                    id="edit-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={currentProperty.type}
                    onChange={(e) => setCurrentProperty({...currentProperty, type: e.target.value})}
                  >
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-beds">Bedrooms</Label>
                  <Input 
                    id="edit-beds" 
                    type="number"
                    value={currentProperty.beds.toString()} 
                    onChange={(e) => setCurrentProperty({...currentProperty, beds: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-baths">Bathrooms</Label>
                  <Input 
                    id="edit-baths" 
                    type="number"
                    value={currentProperty.baths.toString()} 
                    onChange={(e) => setCurrentProperty({...currentProperty, baths: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-area">Area</Label>
                  <Input 
                    id="edit-area" 
                    value={currentProperty.area} 
                    onChange={(e) => setCurrentProperty({...currentProperty, area: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-image">Image URL</Label>
                <Input 
                  id="edit-image" 
                  value={currentProperty.image} 
                  onChange={(e) => setCurrentProperty({...currentProperty, image: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea 
                  id="edit-description" 
                  rows={3}
                  value={currentProperty.description} 
                  onChange={(e) => setCurrentProperty({...currentProperty, description: e.target.value})}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="edit-featured"
                  checked={currentProperty.featured}
                  onChange={(e) => setCurrentProperty({...currentProperty, featured: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="edit-featured">Featured Property</Label>
              </div>
            </div>
          )}
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleEditProperty}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this property? This action cannot be undone.</p>
            {currentProperty && (
              <div className="mt-2 p-4 bg-muted rounded-md">
                <p className="font-medium">{currentProperty.title}</p>
                <p className="text-sm text-muted-foreground">{currentProperty.location}</p>
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteProperty}>Delete Property</Button>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminProperties;
