import { useEffect, useState } from "react";
import AiCard from "./AiCard";

const API = "http://https://https://coderz-1.onrender.com";

export default function AiToolsSection() {
  const [categories, setCategories] = useState([]);
  const [tools, setTools] = useState([]);
  const [activeCat, setActiveCat] = useState(null);

  /* ================= LOAD CATEGORIES ================= */
  useEffect(() => {
    fetch(`${API}/api/ai-categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        if (data.length > 0) {
          setActiveCat(data[0]._id);
        }
      });
  }, []);

  /* ================= LOAD TOOLS ================= */
  useEffect(() => {
    if (!activeCat) return;

    fetch(`${API}/api/ai-tools/category/${activeCat}`)
      .then(res => res.json())
      .then(setTools);
  }, [activeCat]);

  return (
    <section className="min-h-screen bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6 space-y-10">

        

        {/* CATEGORY TABS */}
        <div className="flex gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat._id}
              onClick={() => setActiveCat(cat._id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeCat === cat._id
                    ? "bg-black text-white"
                    : "bg-white border hover:bg-gray-100"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* TOOLS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map(tool => (
            <AiCard key={tool._id} tool={tool} />
          ))}

          {tools.length === 0 && (
            <p className="text-gray-500">
              No AI tools found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
