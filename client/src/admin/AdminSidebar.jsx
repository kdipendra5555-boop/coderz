import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  Sparkles,
  Home,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const navItem = ({ isActive }) =>
    `
    group flex items-center gap-3 px-4 py-3 rounded-xl
    text-sm font-semibold tracking-wide transition-all duration-200
    ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }
  `;

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 flex flex-col z-50">

      {/* BRAND */}
      <div className="px-6 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">
              <span className="text-gray-900">Coderz</span>{" "}
              <span className="text-blue-600">Admin</span>
            </h1>
            <p className="text-xs text-gray-500">Control & Management</p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-xl bg-gray-100 hover:bg-blue-600 hover:text-white"
          >
            <Home size={18} />
          </button>
        </div>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <NavLink to="/admin" end className={navItem}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/admin/events" className={navItem}>
          <CalendarDays size={18} />
          Events
        </NavLink>

        <NavLink to="/admin/courses" className={navItem}>
          <BookOpen size={18} />
          Courses
        </NavLink>

        <NavLink to="/admin/ai-tools/add" className={navItem}>
          <Sparkles size={18} />
          AI Tools
        </NavLink>
      </nav>

      {/* LOGOUT */}
      <div className="px-6 py-5 border-t border-gray-200">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-600 bg-red-50 hover:bg-red-600 hover:text-white"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
