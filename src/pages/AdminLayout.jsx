import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">Admin</div>
        <ul className="mt-4">
          <li className="mb-2">
            <Link
              to="/version-request-list"
              className="block p-2 hover:bg-gray-700"
            >
              发版记录
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/fe-version-request"
              className="block p-2 hover:bg-gray-700"
            >
              前端发版
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/be-version-request"
              className="block p-2 hover:bg-gray-700"
            >
              后端发版
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
