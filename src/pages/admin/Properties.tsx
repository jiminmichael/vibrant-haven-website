
import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  status: "active" | "inactive";
  images: string[];
}

const AdminProperties = () => {
  const [properties, setProperties] = useState<Property[]>([
    { 
      id: "1", 
      name: "Luxury Villa", 
      location: "Lekki", 
      price: 500000, 
      status: "active",
      images: [
        "https://zainhomes.com.ng/wp-content/uploads/2021/10/pexels-expect-best-323780-scaled.jpg",
        "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-1.jpg",
      ]
    },
    { 
      id: "2", 
      name: "Apartment Suite", 
      location: "Ikeja", 
      price: 250000, 
      status: "inactive",
      images: [
        "https://zainhomes.com.ng/wp-content/uploads/2020/07/estate-1-2.jpg"
      ]
    },
  ]);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const [newPropertyName, setNewPropertyName] = useState("");
  const [newPropertyLocation, setNewPropertyLocation] = useState("");
  const [newPropertyPrice, setNewPropertyPrice] = useState(0);
  const [newPropertyImages, setNewPropertyImages] = useState<string[]>([""]);

  const addImageField = () => {
    setNewPropertyImages([...newPropertyImages, ""]);
  };

  const removeImageField = (index: number) => {
    const updatedImages = [...newPropertyImages];
    updatedImages.splice(index, 1);
    setNewPropertyImages(updatedImages);
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...newPropertyImages];
    updatedImages[index] = value;
    setNewPropertyImages(updatedImages);
  };

  const handleOpenCreateDialog = () => {
    setOpenCreateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
    setNewPropertyName("");
    setNewPropertyLocation("");
    setNewPropertyPrice(0);
    setNewPropertyImages([""]);
  };

  const handleCreateProperty = () => {
    // Filter out empty image URLs
    const filteredImages = newPropertyImages.filter(img => img.trim() !== "");
    
    const newProperty: Property = {
      id: String(Date.now()),
      name: newPropertyName,
      location: newPropertyLocation,
      price: newPropertyPrice,
      status: "active",
      images: filteredImages.length > 0 ? filteredImages : ["https://zainhomes.com.ng/wp-content/uploads/2021/10/pexels-expect-best-323780-scaled.jpg"], // Default image if none provided
    };

    setProperties([...properties, newProperty]);
    handleCloseCreateDialog();
    toast({
      title: "Success",
      description: "Property created successfully.",
    });
  };

  const handleOpenEditDialog = (id: string) => {
    setSelectedPropertyId(id);
    
    // Find the property to edit
    const propertyToEdit = properties.find(prop => prop.id === id);
    if (propertyToEdit) {
      setNewPropertyName(propertyToEdit.name);
      setNewPropertyLocation(propertyToEdit.location);
      setNewPropertyPrice(propertyToEdit.price);
      setNewPropertyImages(propertyToEdit.images.length > 0 ? [...propertyToEdit.images] : [""]);
    }
    
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedPropertyId(null);
    setNewPropertyName("");
    setNewPropertyLocation("");
    setNewPropertyPrice(0);
    setNewPropertyImages([""]);
  };

  const handleEditProperty = () => {
    if (selectedPropertyId) {
      // Filter out empty image URLs
      const filteredImages = newPropertyImages.filter(img => img.trim() !== "");
      
      setProperties(properties.map(property => 
        property.id === selectedPropertyId 
          ? {
              ...property,
              name: newPropertyName,
              location: newPropertyLocation,
              price: newPropertyPrice,
              images: filteredImages.length > 0 ? filteredImages : property.images,
            }
          : property
      ));
      
      handleCloseEditDialog();
      toast({
        title: "Success",
        description: "Property updated successfully.",
      });
    }
  };

  const handleOpenDeleteDialog = (id: string) => {
    setSelectedPropertyId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedPropertyId(null);
  };

  const handleDeleteProperty = () => {
    if (selectedPropertyId) {
      setProperties(properties.filter((property) => property.id !== selectedPropertyId));
      handleCloseDeleteDialog();
      toast({
        title: "Success",
        description: "Property deleted successfully.",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-serif font-semibold">Properties</h1>
          <Button onClick={handleOpenCreateDialog}>
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Property List</CardTitle>
            <CardDescription>Manage your properties</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Images</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {properties.map((property) => (
                  <TableRow key={property.id}>
                    <TableCell>{property.name}</TableCell>
                    <TableCell>{property.location}</TableCell>
                    <TableCell>${property.price}</TableCell>
                    <TableCell>{property.status}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        {property.images.slice(0, 3).map((image, index) => (
                          <div key={index} className="h-8 w-8 rounded overflow-hidden bg-slate-100">
                            <img src={image} alt={`${property.name} image ${index + 1}`} className="h-full w-full object-cover" />
                          </div>
                        ))}
                        {property.images.length > 3 && (
                          <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-xs">
                            +{property.images.length - 3}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleOpenEditDialog(property.id)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        className="text-red-500 hover:bg-red-50"
                        onClick={() => handleOpenDeleteDialog(property.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Create Property Dialog */}
        <Dialog open={openCreateDialog} onOpenChange={setOpenCreateDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
              <DialogDescription>Create a new property listing.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={newPropertyName} onChange={(e) => setNewPropertyName(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input id="location" value={newPropertyLocation} onChange={(e) => setNewPropertyLocation(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  type="number"
                  id="price"
                  value={newPropertyPrice}
                  onChange={(e) => setNewPropertyPrice(Number(e.target.value))}
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right pt-2">
                  Images
                </Label>
                <div className="col-span-3 space-y-2">
                  {newPropertyImages.map((image, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                        className="flex-1"
                      />
                      {index > 0 && (
                        <Button 
                          variant="outline" 
                          onClick={() => removeImageField(index)}
                          size="sm"
                          className="text-red-500 hover:bg-red-50"
                        >
                          <Trash size={16} />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={addImageField}
                    size="sm"
                    className="text-blue-500"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Image
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleCreateProperty}>
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Property Dialog */}
        <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Property</DialogTitle>
              <DialogDescription>Make changes to your property listing.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input id="edit-name" value={newPropertyName} onChange={(e) => setNewPropertyName(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="text-right">
                  Location
                </Label>
                <Input id="edit-location" value={newPropertyLocation} onChange={(e) => setNewPropertyLocation(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-price" className="text-right">
                  Price
                </Label>
                <Input
                  type="number"
                  id="edit-price"
                  value={newPropertyPrice}
                  onChange={(e) => setNewPropertyPrice(Number(e.target.value))}
                  className="col-span-3"
                />
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right pt-2">
                  Images
                </Label>
                <div className="col-span-3 space-y-2">
                  {newPropertyImages.map((image, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                        className="flex-1"
                      />
                      {index > 0 && (
                        <Button 
                          variant="outline" 
                          onClick={() => removeImageField(index)}
                          size="sm"
                          className="text-red-500 hover:bg-red-50"
                        >
                          <Trash size={16} />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={addImageField}
                    size="sm"
                    className="text-blue-500"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Image
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleEditProperty}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Property Dialog */}
        <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Property</DialogTitle>
              <DialogDescription>Are you sure you want to delete this property? This action cannot be undone.</DialogDescription>
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
                onClick={handleDeleteProperty}
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

export default AdminProperties;
