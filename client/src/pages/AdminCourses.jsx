import { useEffect, useState } from "react";
import { Trash2, Pencil, X } from "lucide-react";
import { Link } from "react-router-dom";

const API = "http://https://https://coderz-1.onrender.com";

export default function AdminCourses() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  const [catName, setCatName] = useState("");

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    thumbnail: "",
  });

  const [editModal, setEditModal] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  /* ================= LOAD CATEGORIES ================= */
  const loadCategories = async () => {
    const res = await fetch(`${API}/api/categories`);
    const data = await res.json();
    const cats = data.categories || data || [];

    setCategories(cats);

    if (cats.length > 0) {
      setActiveCat(cats[0]._id);
      loadCourses(cats[0]._id);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  /* ================= LOAD COURSES ================= */
  const loadCourses = async (catId) => {
    setActiveCat(catId);
    const res = await fetch(`${API}/api/courses/category/${catId}`);
    const data = await res.json();
    setCourses(data.courses || data || []);
  };

  /* ================= CATEGORY ================= */
  const createCategory = async () => {
    if (!catName.trim()) return;

    await fetch(`${API}/api/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: catName }),
    });

    setCatName("");
    loadCategories();
  };

  const deleteCategory = async (id) => {
    if (!confirm("Delete this category?")) return;
    await fetch(`${API}/api/categories/${id}`, { method: "DELETE" });
    loadCategories();
  };

  /* ================= COURSE ================= */
  const addCourse = async () => {
    if (!courseData.title.trim()) return;

    await fetch(`${API}/api/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...courseData,
        category: activeCat,
      }),
    });

    setCourseData({ title: "", description: "", thumbnail: "" });
    loadCourses(activeCat);
  };

  const deleteCourse = async (id) => {
    if (!confirm("Delete this course?")) return;
    await fetch(`${API}/api/courses/${id}`, { method: "DELETE" });
    loadCourses(activeCat);
  };

  const saveEdit = async () => {
    await fetch(`${API}/api/courses/${editCourse._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editCourse),
    });

    setEditModal(false);
    setEditCourse(null);
    loadCourses(activeCat);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">

      {/* ================= CATEGORY CREATE ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Create Category</h2>

        <div className="flex gap-4">
          <input
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            placeholder="Category name"
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button
            onClick={createCategory}
            className="bg-indigo-600 text-white px-6 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>

      {/* ================= CATEGORY TABS ================= */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat._id}
            onClick={() => loadCourses(cat._id)}
            className={`flex items-center gap-3 px-5 py-2 rounded-full cursor-pointer border
              ${
                activeCat === cat._id
                  ? "bg-indigo-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            <span>{cat.name}</span>
            <Trash2
              size={14}
              onClick={(e) => {
                e.stopPropagation();
                deleteCategory(cat._id);
              }}
            />
          </div>
        ))}
      </div>

      {/* ================= ADD COURSE ================= */}
      {activeCat && (
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold">Add Course</h2>

          <input
            placeholder="Course title"
            className="border rounded-lg p-3 w-full"
            value={courseData.title}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
          />

          <input
            placeholder="Thumbnail URL"
            className="border rounded-lg p-3 w-full"
            value={courseData.thumbnail}
            onChange={(e) =>
              setCourseData({ ...courseData, thumbnail: e.target.value })
            }
          />

          <textarea
            placeholder="Course description"
            className="border rounded-lg p-3 w-full min-h-[120px]"
            value={courseData.description}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                description: e.target.value,
              })
            }
          />

          <button
            onClick={addCourse}
            className="bg-indigo-600 text-white px-8 py-2 rounded-lg"
          >
            Add Course
          </button>
        </div>
      )}

      {/* ================= HORIZONTAL COURSE LIST ================= */}
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex gap-6 items-center"
          >
            {/* THUMBNAIL */}
            <div className="w-40 h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">
              {course.thumbnail && (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* INFO */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800">
                {course.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2 mt-1">
                {course.description}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditCourse(course);
                  setEditModal(true);
                }}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteCourse(course._id)}
                className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>

              <Link
                to={`/admin/courses/${course._id}`}
                className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
              >
                Lectures
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl p-8 relative">
            <button
              onClick={() => setEditModal(false)}
              className="absolute top-5 right-5"
            >
              <X />
            </button>

            <h2 className="text-2xl font-semibold mb-6">
              Edit Course
            </h2>

            <input
              className="border rounded-lg p-3 w-full mb-4"
              value={editCourse.title}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  title: e.target.value,
                })
              }
            />

            <input
              className="border rounded-lg p-3 w-full mb-4"
              value={editCourse.thumbnail}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  thumbnail: e.target.value,
                })
              }
            />

            <textarea
              className="border rounded-lg p-3 w-full min-h-[160px]"
              value={editCourse.description}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  description: e.target.value,
                })
              }
            />

            <button
              onClick={saveEdit}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg mt-6"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
