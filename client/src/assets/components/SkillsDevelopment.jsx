import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    title: "Python",
    theme: "Programming fundamentals and problem solving.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
  {
    id: 2,
    title: "C",
    theme: "Core programming concepts with logic building.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },
  {
    id: 3,
    title: "C++",
    theme: "Object-oriented programming and DSA basics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

export default function SkillsDevelopment() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">
          Skills Development
        </h1>

        {/* ✅ FIXED: Center on mobile */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800
          text-center sm:text-left mb-6 sm:mb-12">
          Programming Languages
        </h2>

        {/* 📱 MOBILE SWIPE */}
        <div className="sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                whileTap={{ scale: 0.96 }}
                className="min-w-[85%] snap-center
                bg-white rounded-xl shadow-md overflow-hidden"
              >
                {/* Gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400" />

                {/* Image */}
                <div className="h-36 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {skill.theme}
                  </p>

                  {/* ✅ FIXED: Explore button */}
                  <button
                    className="mt-4 inline-flex items-center gap-1
                    text-sm font-medium
                    bg-gradient-to-r from-green-600 to-teal-600
                    bg-clip-text text-transparent"
                  >
                    Explore →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🖥️ DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ y: -4 }}
              className="relative group bg-white rounded-2xl
              overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                blur-xl transition duration-300
                bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400"
              />

              <div className="relative z-10 bg-white rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400" />

                <div className="h-44 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3">
                    {skill.theme}
                  </p>

                  {/* Desktop Explore */}
                  <button
                    className="mt-4 inline-flex items-center gap-1
                    font-medium
                    bg-gradient-to-r from-green-600 to-teal-600
                    bg-clip-text text-transparent"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
