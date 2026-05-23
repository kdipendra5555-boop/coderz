import { useEffect, useState } from "react";
import { Trash2, Pencil, X, Save } from "lucide-react";

const API = "http://localhost:5000";

export default function AdminAiTools() {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  const [catName, setCatName] = useState("");

  const [tools, setTools] = useState([]);

  const [toolForm, setToolForm] = useState({
    name: "",
    description: "",
    useLink: "",
    learnLink: "",
    thumbnail: "",
  });

  const [editModal, setEditModal] = useState(false);
  const [editTool, setEditTool] = useState(null);

  /* ================= LOAD ================= */
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const res = await fetch(`${API}/api/ai-categories`);
    const data = await res.json();
    setCategories(data);

    if (data.length > 0) {
      setActiveCat(data[0]._id);
      loadTools(data[0]._id);
    }
  };

  const loadTools = async (catId) => {
    setActiveCat(catId);
    const res = await fetch(`${API}/api/ai-tools/category/${catId}`);
    const data = await res.json();
    setTools(data);
  };

  /* ================= CATEGORY ================= */
  const addCategory = async () => {
    if (!catName.trim()) return;

    await fetch(`${API}/api/ai-categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: catName }),
    });

    setCatName("");
    loadCategories();
  };

  const deleteCategory = async (id) => {
    if (!confirm("Delete this category?")) return;

    await fetch(`${API}/api/ai-categories/${id}`, {
      method: "DELETE",
    });

    loadCategories();
    setTools([]);
    setActiveCat(null);
  };

  /* ================= AI TOOL ================= */
  const addTool = async () => {
    if (!toolForm.name.trim()) return;

    const res = await fetch(`${API}/api/ai-tools`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...toolForm, category: activeCat }),
    });

    const newTool = await res.json();
    setTools([newTool, ...tools]);

    setToolForm({
      name: "",
      description: "",
      useLink: "",
      learnLink: "",
      thumbnail: "",
    });
  };

  const deleteTool = async (id) => {
    if (!confirm("Delete this AI tool?")) return;

    await fetch(`${API}/api/ai-tools/${id}`, { method: "DELETE" });
    setTools(tools.filter(t => t._id !== id));
  };

  const saveEditTool = async () => {
    await fetch(`${API}/api/ai-tools/${editTool._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editTool),
    });

    setTools(prev =>
      prev.map(t => (t._id === editTool._id ? editTool : t))
    );

    setEditModal(false);
    setEditTool(null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">

      {/* ================= CATEGORY ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">AI Categories</h2>

        <div className="flex gap-3 mb-4">
          <input
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            placeholder="Category name"
            className="border px-4 py-2 rounded w-full"
          />
          <button
            onClick={addCategory}
            className="bg-black text-white px-6 rounded"
          >
            Add
          </button>
        </div>

        <div className="flex gap-3 flex-wrap">
          {categories.map(c => (
            <div
              key={c._id}
              onClick={() => loadTools(c._id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer border
                ${activeCat === c._id ? "bg-black text-white" : "bg-white"}`}
            >
              {c.name}
              <Trash2
                size={14}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCategory(c._id);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= ADD AI TOOL ================= */}
      {activeCat && (
        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <h2 className="font-semibold">Add AI Tool</h2>

          <input
            placeholder="Tool name"
            value={toolForm.name}
            onChange={(e) => setToolForm({ ...toolForm, name: e.target.value })}
            className="border p-2 w-full rounded"
          />

          <textarea
            placeholder="Description"
            value={toolForm.description}
            onChange={(e) => setToolForm({ ...toolForm, description: e.target.value })}
            className="border p-2 w-full rounded"
          />

          <input
            placeholder="Use link"
            value={toolForm.useLink}
            onChange={(e) => setToolForm({ ...toolForm, useLink: e.target.value })}
            className="border p-2 w-full rounded"
          />

          <input
            placeholder="Learn link"
            value={toolForm.learnLink}
            onChange={(e) => setToolForm({ ...toolForm, learnLink: e.target.value })}
            className="border p-2 w-full rounded"
          />

          <input
            placeholder="Thumbnail URL"
            value={toolForm.thumbnail}
            onChange={(e) => setToolForm({ ...toolForm, thumbnail: e.target.value })}
            className="border p-2 w-full rounded"
          />

          <button
            onClick={addTool}
            className="bg-indigo-600 text-white px-6 py-2 rounded"
          >
            Add Tool
          </button>
        </div>
      )}

      {/* ================= TOOL LIST ================= */}
      <div className="space-y-4">
        {tools.map(tool => (
          <div
            key={tool._id}
            className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold">{tool.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {tool.description}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditTool(tool);
                  setEditModal(true);
                }}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => deleteTool(tool._id)}
                className="bg-rose-600 text-white px-4 py-2 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editModal && editTool && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl p-8 relative">

            <button
              onClick={() => setEditModal(false)}
              className="absolute top-5 right-5"
            >
              <X />
            </button>

            <h2 className="text-2xl font-semibold mb-6">
              Edit AI Tool
            </h2>

            <input
              className="border p-3 w-full mb-4 rounded"
              value={editTool.name}
              onChange={(e) =>
                setEditTool({ ...editTool, name: e.target.value })
              }
            />

            <textarea
              className="border p-3 w-full mb-4 rounded min-h-[150px]"
              value={editTool.description}
              onChange={(e) =>
                setEditTool({ ...editTool, description: e.target.value })
              }
            />

            <input
              className="border p-3 w-full mb-4 rounded"
              value={editTool.useLink}
              onChange={(e) =>
                setEditTool({ ...editTool, useLink: e.target.value })
              }
            />

            <input
              className="border p-3 w-full mb-4 rounded"
              value={editTool.learnLink}
              onChange={(e) =>
                setEditTool({ ...editTool, learnLink: e.target.value })
              }
            />

            <input
              className="border p-3 w-full mb-6 rounded"
              value={editTool.thumbnail}
              onChange={(e) =>
                setEditTool({ ...editTool, thumbnail: e.target.value })
              }
            />

            <button
              onClick={saveEditTool}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
