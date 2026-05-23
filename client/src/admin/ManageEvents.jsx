import { useEffect, useState } from "react";
import axios from "axios";
import ManageCompetitions from "./ManageCompetitions";

const API_BASE = "http://localhost:5000";

const ManageEvents = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/api/event-categories`);
      setCategories(Array.isArray(res.data) ? res.data : []);
    } catch {
      setError("Failed to load category");
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async () => {
    if (!name.trim()) return alert("Category name required");
    await axios.post(`${API_BASE}/api/event-categories`, {
      name: name.trim(),
    });
    setName("");
    fetchCategories();
  };

  const startEdit = (cat) => {
    setEditingId(cat._id);
    setEditingName(cat.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingName("");
  };

  const updateCategory = async (id) => {
    if (!editingName.trim()) return alert("Name required");
    await axios.put(`${API_BASE}/api/event-categories/${id}`, {
      name: editingName.trim(),
    });
    cancelEdit();
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    if (!confirm("Delete this category?")) return;
    await axios.delete(`${API_BASE}/api/event-categories/${id}`);
    if (selectedCategory?._id === id) setSelectedCategory(null);
    fetchCategories();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">
        Manage Events
      </h1>

      {/* ADD CATEGORY */}
      <div className="flex gap-2 mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Category name"
          className="border px-3 py-2 rounded w-64"
        />
        <button
          onClick={addCategory}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* CATEGORY LIST */}
      {!loading &&
        !error &&
        categories.map((cat) => (
          <div
            key={cat._id}
            className={`flex items-center justify-between border p-3 rounded mb-2 cursor-pointer
              ${
                selectedCategory?._id === cat._id
                  ? "bg-blue-50 border-blue-400"
                  : "bg-white"
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {editingId === cat._id ? (
              <input
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
                className="border px-2 py-1 rounded w-64"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className="font-medium">{cat.name}</span>
            )}

            <div className="flex gap-2">
              {editingId === cat._id ? (
                <>
                  <button
                    onClick={() => updateCategory(cat._id)}
                    className="px-3 py-1 rounded bg-blue-500 text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-3 py-1 rounded bg-gray-200"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startEdit(cat);
                    }}
                    className="px-3 py-1 rounded bg-yellow-400 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCategory(cat._id);
                    }}
                    className="px-3 py-1 rounded bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

      {/* COMPETITIONS */}
      {selectedCategory && (
        <ManageCompetitions category={selectedCategory} />
      )}
    </div>
  );
};

export default ManageEvents;
