import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash } from "lucide-react";
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
}

const AdminProperties = () => {
  const [properties, setProperties] = useState<Property[]>([
    { id: "1", name: "Luxury Villa", location: "Lekki", price: 500000, status: "active" },
    { id: "2", name: "Apartment Suite", location: "Ikeja", price: 250000, status: "inactive" },
  ]);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const [newPropertyName, setNewPropertyName] = useState("");
  const [newPropertyLocation, setNewPropertyLocation] = useState("");
  const [newPropertyPrice, setNewPropertyPrice] = useState(0);

  const handleOpenCreateDialog = () => {
    setOpenCreateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
    setNewPropertyName("");
    setNewPropertyLocation("");
    setNewPropertyPrice(0);
  };

  const handleCreateProperty = () => {
    const newProperty: Property = {
      id: String(Date.now()),
      name: newPropertyName,
      location: newPropertyLocation,
      price: newPropertyPrice,
      status: "active",
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
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedPropertyId(null);
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
          <DialogContent className="sm:max-w-[425px]">
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
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Property</DialogTitle>
              <DialogDescription>Make changes to your property listing.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Luxury Villa" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input id="location" defaultValue="Lekki" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input type="number" id="price" defaultValue="500000" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
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
