import React from "react";
import BucorLogo from "../assets/icons/bucor-logo.png";
import {
  MdOutlineDashboard,
  MdPeopleOutline,
  MdOutlineQrCode2,
  MdOutlineFolder,
  MdFilePresent,
} from "react-icons/md";
import { NavLink } from "react-router";

export const AdminSidebar = () => {
  return (
    <div className="flex h-screen w-72 flex-col items-center bg-[#D49753] py-6 text-white">
      {/* Logo Section */}
      <div className="mb-6">
        <img src={BucorLogo} alt="BuCor Logo" className="h-auto w-24" />
      </div>

      {/* Navigation Links */}
      <nav className="w-full">
        <ul>
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex cursor-pointer items-center space-x-3 px-6 py-3 font-semibold ${
                  isActive
                    ? "bg-[#7F6124]/30"
                    : "hover:bg-opacity-30 hover:bg-[#7F6124]/30"
                }`
              }
            >
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/visit-requests"
              className={({ isActive }) =>
                `flex cursor-pointer items-center space-x-3 px-6 py-3 ${
                  isActive
                    ? "bg-[#7F6124]/30"
                    : "hover:bg-opacity-30 hover:bg-[#7F6124]/30"
                }`
              }
            >
              <MdPeopleOutline />
              <span>Visit Requests</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/qr-scan"
              className={({ isActive }) =>
                `flex cursor-pointer items-center space-x-3 px-6 py-3 ${
                  isActive
                    ? "bg-[#7F6124]/30"
                    : "hover:bg-opacity-30 hover:bg-[#7F6124]/30"
                }`
              }
            >
              <MdOutlineQrCode2 />
              <span>Scan</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/records"
              className={({ isActive }) =>
                `flex cursor-pointer items-center space-x-3 px-6 py-3 ${
                  isActive
                    ? "bg-[#7F6124]/30"
                    : "hover:bg-opacity-30 hover:bg-[#7F6124]/30"
                }`
              }
            >
              <MdOutlineFolder />
              <span>Records</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/logs"
              className={({ isActive }) =>
                `flex cursor-pointer items-center space-x-3 px-6 py-3 ${
                  isActive
                    ? "bg-[#7F6124]/30"
                    : "hover:bg-opacity-30 hover:bg-[#7F6124]/30"
                }`
              }
            >
              <MdFilePresent />
              <span>Log Trails</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
