
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [adminPassword, setAdminPassword] = useState("password");
  const [isConfiguring, setIsConfiguring] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if credentials were previously set
  useEffect(() => {
    const savedEmail = localStorage.getItem("adminEmail");
    const savedPassword = localStorage.getItem("adminPassword");
    
    if (savedEmail) setAdminEmail(savedEmail);
    if (savedPassword) setAdminPassword(savedPassword);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Authentication logic
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isAdminLoggedIn", "true");
      toast({
        title: "Login Successful",
        description: "You have successfully logged in as admin.",
      });
      navigate("/admin");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const handleCredentialSetup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save new credentials
    localStorage.setItem("adminEmail", adminEmail);
    localStorage.setItem("adminPassword", adminPassword);
    
    toast({
      title: "Credentials Updated",
      description: "Your admin credentials have been updated successfully.",
    });
    
    setIsConfiguring(false);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>
            {isConfiguring 
              ? "Set up your admin credentials" 
              : "Enter your email and password to login"}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {isConfiguring ? (
            <form onSubmit={handleCredentialSetup}>
              <div className="grid gap-2">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2 mt-2">
                <Label htmlFor="adminPassword">Admin Password</Label>
                <Input
                  id="adminPassword"
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-2 mt-4">
                <Button type="submit" className="flex-1">
                  Save Credentials
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setIsConfiguring(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={adminEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full mt-4" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
              <div className="mt-4 text-center">
                <button 
                  type="button"
                  onClick={() => setIsConfiguring(true)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Configure admin credentials
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
