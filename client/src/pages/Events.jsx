import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../assets/components/Navbar";
import axios from "axios";

const API_BASE = "http://https://https://coderz-1.onrender.com";

const EVENT_QUOTES = [
  { title: "HACKATHON", text: "Hack the problem. Build the change." },
  { title: "MENTORSHIP", text: "Guidance today, leadership tomorrow." },
  { title: "MEETUP", text: "Meet minds. Share ideas. Build connections." },
  { title: "QUIZ", text: "Knowledge is power — prove yours." },
  { title: "WORKSHOP", text: "Turn knowledge into real skills." },
];

export default function Events() {
  const [index, setIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  /* QUOTES */
  useEffect(() => {
    const i = setInterval(
      () => setIndex((p) => (p + 1) % EVENT_QUOTES.length),
      2800
    );
    return () => clearInterval(i);
  }, []);

  /* CATEGORIES */
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/event-categories`)
      .then((res) =>
        setCategories(Array.isArray(res.data) ? res.data : [])
      )
      .catch(() => setCategories([]));
  }, []);

  /* COMPETITIONS */
  const fetchCompetitions = async (categoryId) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_BASE}/api/competitions/category/${categoryId}`
      );
      setCompetitions(Array.isArray(res.data) ? res.data : []);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    fetchCompetitions(cat._id);
  };

  // 🔥 SAFE LINK BUILDER
  const buildLink = (raw) => {
    if (!raw) return null;
    const link = raw.trim();
    if (!link) return null;
    return /^https?:\/\//i.test(link) ? link : `https://${link}`;
  };

  return (
    <div className="h-screen flex flex-col bg-white">

      {/* ================= HERO ================= */}
      <div className="shrink-0 px-6 md:px-12 pt-32 pb-16">
        <Navbar />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <motion.img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            className="w-[300px] md:w-[400px] lg:w-[460px] rounded-b-3xl mx-auto"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="text-center md:text-left space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Explore Events
            </h1>

            <div className="relative h-[2.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="absolute text-gray-700"
                >
                  <span className="text-blue-600 font-semibold">
                    {EVENT_QUOTES[index].title}
                  </span>{" "}
                  — {EVENT_QUOTES[index].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-purple-600">
              • Participate • Learn • Build
            </h2>

            <div className="pt-4 flex flex-wrap gap-6 justify-center md:justify-start">
              {categories.map((cat) => (
                <span
                  key={cat._id}
                  onClick={() => handleCategoryClick(cat)}
                  className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= EVENTS ================= */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12">
        {selectedCategory && (
          <div className="max-w-7xl mx-auto pb-32">
            <h2 className="text-2xl font-bold mb-10">
              {selectedCategory.name} Events
            </h2>

            {loading && <p className="text-gray-400">Loading events...</p>}
            {!loading && competitions.length === 0 && (
              <p className="text-gray-400">No events found</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {competitions.map((c) => {
                const link = buildLink(c.link);

                return (
                  <div
                    key={c._id}
                    className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition flex flex-col"
                  >
                    {c.poster && (
                      <img
                        src={`${API_BASE}${c.poster}`}
                        className="w-full h-44 object-contain bg-gray-50 rounded-lg mb-4"
                        alt={c.title}
                      />
                    )}

                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{c.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {c.description}
                      </p>

                      <div className="text-xs text-gray-500 space-y-1 pt-1">
                        <p>📅 {c.date}</p>
                        <p>🔖 {c.domain} | {c.mode}</p>
                        {c.location && <p>📍 {c.location}</p>}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 text-sm rounded text-center bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                          Register
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex-1 py-2 text-sm rounded bg-gray-300 text-gray-600 cursor-not-allowed"
                        >
                          Register
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedEvent(c)}
                        className="flex-1 py-2 text-sm border rounded"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            {selectedEvent.poster && (
              <img
                src={`${API_BASE}${selectedEvent.poster}`}
                className="w-full h-52 object-contain bg-gray-50 rounded mb-4"
                alt=""
              />
            )}

            <h3 className="text-xl font-bold mb-2">
              {selectedEvent.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              {selectedEvent.description}
            </p>

            <p className="text-sm"><b>Date:</b> {selectedEvent.date}</p>
            <p className="text-sm"><b>Mode:</b> {selectedEvent.mode}</p>
            <p className="text-sm"><b>Domain:</b> {selectedEvent.domain}</p>

            {selectedEvent.location && (
              <p className="text-sm">
                <b>Location:</b> {selectedEvent.location}
              </p>
            )}

            {buildLink(selectedEvent.link) ? (
              <a
                href={buildLink(selectedEvent.link)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full py-2 rounded text-center bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Register Now
              </a>
            ) : (
              <button
                disabled
                className="mt-6 w-full py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed"
              >
                Registration Closed
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
