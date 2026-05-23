import { useState } from "react";
import Dashboard from "../admin/Dashboard";
import Enquiries from "../admin/Enquiries";

export default function AdminPage() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-indigo-700 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-4">
          <button
            onClick={() => setActive("dashboard")}
            className={`block w-full text-left px-3 py-2 rounded ${
              active === "dashboard"
                ? "bg-indigo-600"
                : "hover:bg-indigo-600"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActive("enquiries")}
            className={`block w-full text-left px-3 py-2 rounded ${
              active === "enquiries"
                ? "bg-indigo-600"
                : "hover:bg-indigo-600"
            }`}
          >
            School Enquiries
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-800">
            School Coding Admin
          </h1>

          <span className="text-sm text-gray-500">
            Logged in as Admin
          </span>
        </header>

        {/* CONTENT AREA */}
        <main className="p-6">
          {active === "dashboard" && <Dashboard />}
          {active === "enquiries" && <Enquiries />}
        </main>
      </div>
    </div>
  );
}
