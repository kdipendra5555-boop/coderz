import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Shield } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // 🔐 READ USER ONCE (NO REDIRECT)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setProfileOpen(false);
    navigate("/login", { replace: true });
  };

  const isAdmin = user?.role === "admin";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-bold">
          <span className="text-gray-700 ">
            Coderz Cafe
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/events" className="hover:text-blue-600">Events</Link>
          <Link to="/courses" className="hover:text-blue-600">Courses</Link>
          <Link to="/ai-tools" className="hover:text-blue-600">AI Tools</Link>

          {/* 👑 ADMIN PANEL */}
          {isAdmin && (
            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
            >
              <Shield size={16} />
              Admin Panel
            </button>
          )}

          {/* LOGIN / USER */}
          {!user ? (
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full">
                Login
              </button>
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
              >
                <User size={18} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg overflow-hidden">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">
                    {user.name}
                  </div>

                  {isAdmin && (
                    <button
                      onClick={() => navigate("/admin")}
                      className="w-full px-4 py-2 text-sm text-purple-600 hover:bg-gray-100 text-left"
                    >
                      Admin Panel
                    </button>
                  )}

                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
            <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
            <Link to="/ai-tools" onClick={() => setOpen(false)}>AI Tools</Link>

            {isAdmin && (
              <button
                onClick={() => {
                  navigate("/admin");
                  setOpen(false);
                }}
                className="text-purple-600 font-semibold"
              >
                Admin Panel
              </button>
            )}

            {!user ? (
              <Link to="/login" onClick={() => setOpen(false)}>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="flex items-center gap-2 text-red-600"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 
