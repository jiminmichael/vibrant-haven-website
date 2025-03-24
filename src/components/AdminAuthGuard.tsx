
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AdminAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return <>{children}</>;
};
