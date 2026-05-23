import React from "react";
import { Link } from "react-router-dom";

export default function SchoolNavbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#0F1F3D] flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="text-xl font-bold text-[#0F1F3D]">
            Coderz Café
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link to="/about" className="hover:text-[#0F1F3D]">About</Link>
          <Link to="/programs" className="hover:text-[#0F1F3D]">Programs</Link>
          <Link to="/admission" className="hover:text-[#0F1F3D]">Admission</Link>
          <Link to="/faculty" className="hover:text-[#0F1F3D]">Faculty</Link>
          <Link to="/blog" className="hover:text-[#0F1F3D]">Blog</Link>
        </nav>

        {/* CTA */}
        <Link
          to="/admission"
          className="hidden md:inline-block bg-[#6EE7B7] text-[#0F1F3D] px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
