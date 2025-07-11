import React from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminNavbar } from "../components/AdminNavbar";
import { Outlet } from "react-router";

export const AdminDashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <AdminNavbar />

        {/* Main Content */}
        <div className="overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
