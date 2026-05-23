import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hackathons",
    desc: "Team-based coding events where students collaborate to solve real-world problems and build innovative solutions.",
  },
  {
    id: 2,
    title: "Competitions",
    desc: "Skill-based coding and logical competitions designed to improve problem-solving speed and accuracy.",
  },
  {
    id: 3,
    title: "Workshops",
    desc: "Hands-on learning sessions focused on programming fundamentals, tools, and practical concepts.",
  },
  {
    id: 4,
    title: "Mentorship",
    desc: "Guided mentorship to help students learn effectively, build projects, and grow with confidence.",
  },
  {
    id: 5,
    title: "Meetups",
    desc: "Community-driven meetups that encourage collaboration, networking, and shared learning experiences.",
  },
];

export default function ArisingEventsAccordion() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="w-full bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
              Learning & <br /> Community Activities
            </h2>

            <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base">
              We create meaningful learning opportunities for school and
              college students through events, mentorship, and community
              engagement.
            </p>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="bg-[#0F3D3E] rounded-3xl px-6 py-4 divide-y divide-white/20">

            {items.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className="py-4">

                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between
                    text-left text-white"
                  >
                    <span className="flex gap-4 items-center">
                      <span className="opacity-70 text-sm">
                        {index + 1}.
                      </span>
                      <span className="font-semibold text-lg">
                        {item.title}
                      </span>
                    </span>

                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-white/80 pl-8 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
