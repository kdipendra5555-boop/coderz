import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://https://https://coderz-1.onrender.com/api/categories")
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const loadCourses = (id) => {
    fetch(`http://https://https://coderz-1.onrender.com/api/courses/category/${id}`)
      .then(res => res.json())
      .then(setCourses);
  };

  return (
    <div className="p-6">
      {/* categories */}
      <div className="flex gap-4 mb-6">
        {categories.map(cat => (
          <button
            key={cat._id}
            onClick={() => loadCourses(cat._id)}
            className="px-4 py-2 bg-black text-white rounded"
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* course cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <Link
            to={`/course/${course._id}`}
            key={course._id}
            className="border p-4 rounded-lg"
          >
            <img src={course.thumbnail} className="rounded mb-3" />
            <h3 className="font-bold">{course.title}</h3>
            <p className="text-sm">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
