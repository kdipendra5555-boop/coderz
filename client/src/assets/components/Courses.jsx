import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechMarquee from "./TechMarquee";
import HappyLearners from "./HappyLearners";
import RotatingTaglines from "./RotatingTaglines";

/* ===== TYPING WORDS ===== */
const words = [
  "CS Courses",
  "Data Science",
  "Web Development",
  "Programming Languages",
  "Artificial Intelligence",
];

/* ===== COLORS ===== */
const colors = [
  "text-indigo-600",
  "text-emerald-600",
  "text-rose-600",
  "text-orange-600",
  "text-blue-600",
];

const API = "http://https://https://coderz-1.onrender.com";

export default function Courses() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeCat, setActiveCat] = useState(null);

  /* ===== TYPING STATES ===== */
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  /* ===== LOAD CATEGORIES ===== */
  useEffect(() => {
    fetch(`${API}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        const cats = Array.isArray(data)
          ? data
          : Array.isArray(data.categories)
          ? data.categories
          : [];

        setCategories(cats);

        if (cats.length > 0) {
          setActiveCat(cats[0]._id);
          loadCourses(cats[0]._id);
        }
      })
      .catch((err) => console.error("❌ Load categories error:", err));
  }, []);

  /* ===== LOAD COURSES ===== */
  const loadCourses = (catId) => {
    setActiveCat(catId);

    fetch(`${API}/api/courses/category/${catId}`)
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data)
          ? data
          : Array.isArray(data.courses)
          ? data.courses
          : [];

        setCourses(list);
      })
      .catch((err) => {
        console.error("❌ Load courses error:", err);
        setCourses([]);
      });
  };

  /* ===== TYPING EFFECT ===== */
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 80);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 50);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setColorIndex((prev) => (prev + 1) % colors.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="min-h-screen bg-white pt-12">

      {/* ================= HERO ================= */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full border flex items-center justify-center">
                <Play className="w-5 h-5 ml-0.5" />
              </button>
              <span className="uppercase tracking-widest text-xs text-gray-500">
                Coderz Cafe Courses
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold">
              Learn
            </h1>

            <div className={`text-4xl lg:text-5xl font-extrabold ${colors[colorIndex]}`}>
              {text}
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-gray-600 text-lg max-w-lg">
              Industry-ready courses designed to help you build real-world projects.
            </p>
          </div>

          <div className="hidden lg:flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
              className="w-[360px] rounded-2xl shadow-lg"
              alt="Learning"
            />
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* ================= CATEGORY + COURSES ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* CATEGORY TABS */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => loadCourses(cat._id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold
                  ${
                    activeCat === cat._id
                      ? "bg-black text-white"
                      : "bg-white border text-gray-700"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* COURSES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course._id} className="bg-white border rounded-2xl overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {course.description}
                  </p>

                  <Link
                    to={`/course/${course._id}`}
                    className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Start Learning →
                  </Link>
                </div>
              </div>
            ))}

            {courses.length === 0 && (
              <p className="text-gray-500">No courses found.</p>
            )}
          </div>
        </div>
      </section>

      <HappyLearners />
      <RotatingTaglines />
    </div>
  );
}
