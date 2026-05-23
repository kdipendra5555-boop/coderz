import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlayCircle, FileText } from "lucide-react";
import Navbar from "../assets/components/Navbar";

const API = "http://https://coderz-1.onrender.com";

export default function CoursePage() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [notes, setNotes] = useState([]);
  const [activeLecture, setActiveLecture] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    const loadData = async () => {
      try {
        const courseRes = await fetch(`${API}/api/courses/${id}`);
        const courseData = await courseRes.json();
        setCourse(courseData);

        const lecRes = await fetch(`${API}/api/lectures/course/${id}`);
        const lecData = await lecRes.json();
        setLectures(lecData);
        if (lecData.length > 0) setActiveLecture(lecData[0]);

        const notesRes = await fetch(`${API}/api/notes/course/${id}`);
        const notesData = await notesRes.json();
        setNotes(notesData);
      } catch (err) {
        console.error("❌ Course load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading course...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Course not found
      </div>
    );
  }

  /* ================= VIDEO RENDER ================= */
  const renderVideo = () => {
    if (!activeLecture) return null;

    if (activeLecture.videoUrl?.includes("youtube")) {
      const embedUrl = activeLecture.videoUrl.replace(
        "watch?v=",
        "embed/"
      );

      return (
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allowFullScreen
        />
      );
    }

    return (
      <video
        src={activeLecture.videoUrl}
        controls
        className="w-full h-full"
      />
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar />

      <div className="pt-24 max-w-7xl mx-auto px-4 space-y-8">

        {/* ================= VIDEO + LECTURES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* VIDEO */}
          <div className="md:col-span-2">
            <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
              {activeLecture ? (
                renderVideo()
              ) : (
                <div className="flex items-center justify-center h-full text-zinc-300">
                  Select a lecture
                </div>
              )}
            </div>
          </div>

          {/* LECTURES */}
          <div className="bg-zinc-900 rounded-2xl p-4 text-zinc-100 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-3">
              Lectures
            </h2>

            <div className="space-y-3">
              {lectures.map((l) => (
                <div
                  key={l._id}
                  onClick={() => setActiveLecture(l)}
                  className={`p-3 rounded-lg cursor-pointer flex items-center justify-between transition
                    ${
                      activeLecture?._id === l._id
                        ? "bg-indigo-600"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <PlayCircle size={16} />
                    <span className="text-sm font-medium">
                      {l.title}
                    </span>
                  </div>
                  <span className="text-xs opacity-70">
                    PLAY
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COURSE INFO + NOTES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* COURSE INFO */}
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">
              {course.title}
            </h3>

            {/* 🔥 FINAL DESCRIPTION FIX */}
            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
              {course.description && course.description.length > 0
                ? course.description
                : "No description available"}
            </p>
          </div>

          {/* NOTES */}
          <div className="bg-zinc-900 rounded-2xl p-4 text-zinc-100 max-h-[260px] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-3">
              Notes
            </h3>

            {notes.length === 0 && (
              <p className="text-sm text-zinc-400">
                No notes available
              </p>
            )}

            <div className="space-y-2">
              {notes.map((n) => (
                <a
                  key={n._id}
                  href={n.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 transition"
                >
                  <FileText size={14} />
                  <span className="text-sm">
                    {n.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-zinc-500 py-10">
          Keep Learning 🚀
        </div>
      </div>
    </div>
  );
}
