import React from "react";

export const AdminNavbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
          <span className="text-sm font-bold">A</span>
        </div>
        <span className="font-medium text-gray-800">Administrator</span>
      </div>
    </div>
  );
};
