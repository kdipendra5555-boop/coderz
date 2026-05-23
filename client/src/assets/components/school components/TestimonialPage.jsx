import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "Parent (Class 4)",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "My child’s logical thinking and confidence have improved significantly.",
  },
  {
    name: "Rohit Verma",
    role: "Parent (Class 7)",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The focus is on understanding concepts, not just coding.",
  },
  {
    name: "Sunita Gupta",
    role: "School Coordinator",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Well-structured program that fits perfectly with school curriculum.",
  },
  {
    name: "Aarav Mehta",
    role: "Student (Class 9)",
    img: "https://randomuser.me/api/portraits/men/71.jpg",
    text: "I built my own projects and now coding feels easy.",
  },
  {
    name: "Green Valley School",
    role: "School Partner",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=300&auto=format&fit=crop",
    text: "Safe, engaging and effective coding program for students.",
  },
];

export default function TestimonialsOneLine() {
  return (
    <section className="bg-[#F6FBF7] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h3 className="text-center text-sm font-medium text-[#2FBF9E] mb-6">
          What Parents & Schools Say About Coderz Café
        </h3>

        {/* SLIDER */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-full px-6 py-3 min-w-[380px]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="text-left">
                <p className="text-sm text-[#6B7280] leading-snug">
                  “{item.text}”
                </p>
                <p className="text-xs font-semibold text-[#0F2A44] mt-1">
                  {item.name}
                  <span className="text-[#2FBF9E] font-medium">
                    {" "}• {item.role}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
