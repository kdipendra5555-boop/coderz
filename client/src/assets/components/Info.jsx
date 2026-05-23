import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Brain,
  Rocket,
  Users,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Info() {
  const [open, setOpen] = useState(null);
  const [count, setCount] = useState({
    schools: 0,
    careers: 0,
    century: 0,
  });

  // COUNT-UP ANIMATION
  useEffect(() => {
    let s = 0,
      c = 0,
      ce = 0;

    const interval = setInterval(() => {
      if (s < 95) s++;
      if (c < 10) c++;
      if (ce < 21) ce++;
      setCount({ schools: s, careers: c, century: ce });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <>
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-24 px-4">

        {/* ICON HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Brain,
              title: "Logical Thinking",
              text: "Strong problem-solving skills",
            },
            {
              icon: Code,
              title: "Coding Skills",
              text: "Build technology, not just use it",
            },
            {
              icon: Rocket,
              title: "Future Ready",
              text: "AI, Robotics & innovation",
            },
            {
              icon: Users,
              title: "Confidence",
              text: "Creativity, focus & teamwork",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md text-center"
            >
              <item.icon className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-20">
          <div className="bg-indigo-600 text-white rounded-2xl p-8">
            <h2 className="text-4xl font-extrabold">{count.schools}%</h2>
            <p className="mt-2 text-sm">
              Schools adopting coding globally
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-4xl font-extrabold text-indigo-600">
              {count.careers}+
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Future career paths
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-4xl font-extrabold text-indigo-600">
              {count.century}st
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Century skill learning
            </p>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Schools & Parents Choose Us
          </h2>

          {[
            {
              q: "Why should children learn coding early?",
              a: "Early coding builds logical thinking, creativity, confidence and strengthens math & science concepts.",
            },
            {
              q: "Is coding safe and age-appropriate?",
              a: "Yes. Our curriculum is structured, guided and designed for each age group.",
            },
            {
              q: "How does this help schools academically?",
              a: "It improves problem-solving, teamwork, innovation and future readiness.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl mb-4"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-gray-600 overflow-hidden"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Bring Coding to Your School?
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Talk to our academic team and integrate structured,
            age-appropriate coding education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* External WhatsApp */}
            <a
              href="https://wa.me/918323146551?text=Hello%20I%20want%20to%20know%20more%20about%20coding%20education%20for%20schools"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold"
            >
              WhatsApp Us
            </a>

            {/* External Call */}
            <a
              href="tel:+918323146551"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold"
            >
              Call Now
            </a>

            {/* Internal Route */}
            <Link
              to="/school-enquiry"
              className="bg-indigo-500 px-6 py-3 rounded-full font-semibold text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* STICKY WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918323146551"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
