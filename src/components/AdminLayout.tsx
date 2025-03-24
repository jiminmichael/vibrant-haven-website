import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, Building, FileText, Phone, Settings, LogOut } from "lucide-react";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? "bg-accent-100 text-accent-foreground" : "";
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border shadow-sm">
        <div className="p-4 border-b border-border">
          <h2 className="text-xl font-serif font-semibold">Admin Dashboard</h2>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/admin" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${isActive('/admin') && location.pathname === '/admin' ? 'bg-accent-100 text-accent-foreground' : ''}`}
              >
                <HomeIcon size={18} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/properties" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${isActive('/admin/properties')}`}
              >
                <Building size={18} />
                <span>Properties</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/services" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${isActive('/admin/services')}`}
              >
                <FileText size={18} />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/contact" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${isActive('/admin/contact')}`}
              >
                <Phone size={18} />
                <span>Contact Info</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/settings" 
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${isActive('/admin/settings')}`}
              >
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
          
          <div className="mt-8 pt-4 border-t border-border">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-md text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut size={18} />
              <span>Exit Admin</span>
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
