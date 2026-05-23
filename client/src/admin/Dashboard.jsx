import {
  CalendarDays,
  BookOpen,
  Sparkles,
  TrendingUp,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminSettings from "./AdminSettings";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* PAGE TITLE + SETTINGS */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Overview of your platform activity
          </p>
        </div>

        {/* SETTINGS BUTTON */}
        <button
          onClick={() => navigate("/admin/settings")}
          className="flex items-center gap-2
          px-5 py-2.5 rounded-xl
          bg-gray-900 text-white font-medium
          hover:bg-gray-800 transition"
        >
          <Settings size={18} />
          Settings
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* EVENTS */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <CalendarDays className="text-blue-600" size={22} />
            <span className="text-sm text-gray-400">Total</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            12
          </h2>
          <p className="text-sm text-gray-500">
            Events
          </p>
        </div>

        {/* COURSES */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <BookOpen className="text-indigo-600" size={22} />
            <span className="text-sm text-gray-400">Total</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            8
          </h2>
          <p className="text-sm text-gray-500">
            Courses
          </p>
        </div>

        {/* AI TOOLS */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <Sparkles className="text-purple-600" size={22} />
            <span className="text-sm text-gray-400">Total</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            20
          </h2>
          <p className="text-sm text-gray-500">
            AI Tools
          </p>
        </div>

        {/* GROWTH */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <TrendingUp className="text-green-600" size={22} />
            <span className="text-sm text-green-500 font-medium">
              +18%
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Growth
          </h2>
          <p className="text-sm text-gray-500">
            This month
          </p>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Add Event
          </button>
          <button className="px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Add Course
          </button>
          <button className="px-4 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Add AI Tool
          </button>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>• New event <strong>AI Hackathon</strong> added</li>
          <li>• Course <strong>Java Fundamentals</strong> published</li>
          <li>• AI Tool <strong>Prompt Builder</strong> updated</li>
        </ul>
      </div>


      <AdminSettings/>

    </div>
  );
}
