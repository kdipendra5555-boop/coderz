import React from "react";
import { Link } from "react-router-dom";

export default function SchoolHero() {
  return (
    <section className="relative bg-[#F6FBF7] overflow-hidden">
      
      {/* soft background accents */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#6EE7B7]/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#0F1F3D]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-[#6EE7B7]/20 text-[#0F1F3D] text-sm font-medium">
            Classes 1–12 • School Coding Program
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0F1F3D] leading-snug">
            Where Young Minds  
            <span className="block text-[#6EE7B7]">
              Learn to Code & Create
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-base max-w-lg">
            Coderz Café helps school students build strong foundations in
            coding, logic, and problem-solving through fun and structured
            learning.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/admission"
              className="bg-[#0F1F3D] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Admissions Open
            </Link>

            <Link
              to="/programs"
              className="border border-[#0F1F3D] text-[#0F1F3D] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0F1F3D] hover:text-white transition"
            >
              View Programs
            </Link>
          </div>

          <div className="mt-6 flex gap-4 text-sm text-gray-500">
            <span>✔ School Aligned</span>
            <span>✔ Expert Mentors</span>
            <span>✔ Fun Learning</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative bg-white p-3 rounded-2xl shadow-lg w-full max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop"
              alt="School students learning coding"
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="absolute -bottom-4 left-4 bg-[#6EE7B7] text-[#0F1F3D] px-4 py-2 rounded-xl text-sm font-medium shadow">
              Trusted by Schools
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
