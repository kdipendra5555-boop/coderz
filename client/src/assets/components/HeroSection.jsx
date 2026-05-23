import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const phrases = [
  {
    verb: "Rendering",
    verbColor: "from-amber-600 to-amber-800",
    word: "Opportunities",
    wordColor: "from-amber-700 to-stone-800",
  },
  {
    verb: "Creating",
    verbColor: "from-rose-600 to-red-600",
    word: "Exposure",
    wordColor: "from-red-600 to-red-500",
  },
  {
    verb: "Building",
    verbColor: "from-pink-600 to-rose-600",
    word: "Mentorship",
    wordColor: "from-pink-500 to-rose-500",
  },
  {
    verb: "Accelerating",
    verbColor: "from-emerald-600 to-green-600",
    word: "Learning",
    wordColor: "from-green-500 to-emerald-500",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((p) => (p + 1) % phrases.length),
      2600
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]">

      {/* GRID */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(59,130,246,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100,116,139,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* TOP FADE */}
      <div
        className="
          absolute inset-0 z-[1] pointer-events-none
          bg-gradient-to-b
          from-[#F8FAFC]/90
          via-[#F8FAFC]/40
          to-transparent
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          w-full min-h-screen
          flex items-start md:items-center
          justify-center
          pt-20 md:pt-28
          px-4 sm:px-6
        "
      >
        <div className="w-full max-w-3xl mx-auto text-center">

          {/* Floating Illustration */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <img
              src="/hero-illustration.png"
              alt="Hero Illustration"
              className="w-24 sm:w-32 md:w-44"
            />
          </motion.div>

          {/* Heading */}
          <h1 className="text-[24px] sm:text-3xl md:text-5xl font-bold leading-snug text-gray-900">
            Boost up your skills with <br className="hidden sm:block" />

            <span className="relative inline-block">
              <span className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"></span>
              <span className="relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Coderz Cafe
              </span>
            </span>

            <br className="hidden sm:block" />

            {/* Dynamic Phrase */}
            <div className="relative h-[1.4em] mt-2 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45 }}
                  className="absolute flex gap-2"
                >
                  <span
                    className={`bg-gradient-to-r ${phrases[index].verbColor} bg-clip-text text-transparent`}
                  >
                    {phrases[index].verb}
                  </span>
                  <span
                    className={`bg-gradient-to-r ${phrases[index].wordColor} bg-clip-text text-transparent`}
                  >
                    {phrases[index].word}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-gray-500">
            What are you searching for
          </p>

          {/* CTA (ROUTED) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex justify-center"
          >
            <Link to="/events">
              <button
                className="
                  bg-indigo-600 hover:bg-indigo-700
                  text-white
                  px-6 sm:px-8
                  py-3
                  rounded-full
                  text-sm sm:text-base
                  font-medium
                  transition-all
                "
              >
                Explore Happening Hackathons →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
