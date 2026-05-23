import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Web Code 1.0",
    date: "Date will be notified soon",
    theme: "Frontend web development offline competition.",
    location: "Kanpur",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Web Code 1.0",
    date: "Date will be notified soon",
    theme: "Frontend web development offline competition.",
    location: "Kanpur",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 3,
    title: "Web Code 1.0",
    date: "Date will be notified soon",
    theme: "Frontend web development offline competition.",
    location: "Kanpur",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
];

export default function ArisingEvents() {
  return (
    <section className="bg-[#F7F9F8] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-3">
          Arising Events
        </h1>

        <h2 className="text-base sm:text-lg font-semibold text-gray-700 text-center sm:text-left mb-8 sm:mb-12">
          Hackathon
        </h2>

        {/* 📱 MOBILE SLIDER */}
        <div className="sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileTap={{ scale: 0.96 }}
                className="min-w-[88%] snap-center bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Soft accent bar */}
                <div className="h-1.5 bg-[#5F8D6B]" />

                <div className="h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {event.title}
                  </h2>

                  <p className="text-xs text-gray-500 mt-1">
                    {event.date}
                  </p>

                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-medium text-[#5F8D6B]">
                      Theme:
                    </span>{" "}
                    {event.theme}
                  </p>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Offline in{" "}
                    <span className="font-medium text-gray-800">
                      {event.location}
                    </span>
                  </p>

                  <button
                    className="mt-4 w-full py-2 rounded-md
                    bg-[#1F2933] text-white text-sm font-medium
                    hover:bg-black transition"
                  >
                    Participate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🖥️ DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Accent strip */}
              <div className="h-1.5 bg-[#5F8D6B]" />

              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {event.date}
                </p>

                <p className="text-sm text-gray-600 mt-3">
                  <span className="font-medium text-[#5F8D6B]">
                    Theme:
                  </span>{" "}
                  {event.theme}
                </p>

                <p className="text-sm text-gray-500 text-center mt-3">
                  Offline in{" "}
                  <span className="font-medium text-gray-800">
                    {event.location}
                  </span>
                </p>

                <button
                  className="mt-5 w-full py-2.5 rounded-lg
                  bg-[#1F2933] text-white font-medium
                  hover:bg-black transition"
                >
                  Participate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
