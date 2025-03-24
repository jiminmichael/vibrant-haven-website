
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui-components/Button";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple demo authentication
    // In a real application, this would call an API endpoint
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        // Set admin session in localStorage (use a more secure method in production)
        localStorage.setItem("isAdminLoggedIn", "true");
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg border border-border">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-primary-foreground">
            <Lock className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-serif font-bold">Admin Login</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Please sign in to access the admin area
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </div>

          <Button 
            fullWidth 
            type="submit" 
            isLoading={isLoading}
            loadingText="Signing in..."
          >
            Sign in
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Demo credentials: admin / password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
