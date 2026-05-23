import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://https://https://coderz-1.onrender.com";

export default function ManageCompetitions({ category }) {
  const [list, setList] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [mode, setMode] = useState("online");
  const [location, setLocation] = useState("");
  const [domain, setDomain] = useState("");
  const [poster, setPoster] = useState(null);

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (category?._id) fetchCompetitions();
  }, [category]);

  const fetchCompetitions = async () => {
    const res = await axios.get(
      `${API}/api/competitions/category/${category._id}`
    );
    setList(Array.isArray(res.data) ? res.data : []);
  };

  /* ================= CREATE & UPDATE ================= */
  const submitCompetition = async () => {
    if (!title.trim()) return alert("Title required");

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("description", description.trim());
    formData.append("date", date);
    formData.append("mode", mode);
    formData.append("domain", domain.trim());
    formData.append("location", location.trim());
    formData.append("category", category._id);

    // 🔥 VERY IMPORTANT
    if (link.trim()) {
      formData.append("link", link.trim());
    }

    if (poster) formData.append("poster", poster);

    try {
      if (editingId) {
        await axios.put(
          `${API}/api/competitions/${editingId}`,
          formData
        );
      } else {
        await axios.post(`${API}/api/competitions`, formData);
      }

      resetForm();
      fetchCompetitions();
    } catch (err) {
      alert("Something went wrong");
    }
  };

  /* ================= DELETE ================= */
  const deleteCompetition = async (id) => {
    if (!window.confirm("Delete this competition?")) return;
    await axios.delete(`${API}/api/competitions/${id}`);
    fetchCompetitions();
  };

  /* ================= EDIT ================= */
  const editCompetition = (c) => {
    setEditingId(c._id);
    setTitle(c.title || "");
    setDescription(c.description || "");
    setDate(c.date?.slice(0, 10) || "");
    setLink(c.link || "");
    setMode(c.mode || "online");
    setLocation(c.location || "");
    setDomain(c.domain || "");
    setPoster(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setDate("");
    setLink("");
    setMode("online");
    setLocation("");
    setDomain("");
    setPoster(null);
  };

  return (
    <div className="mt-8 p-5 border rounded-lg bg-gray-50">
      <h2 className="text-lg font-bold mb-4">
        Competitions in {category.name}
      </h2>

      {/* ================= FORM ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <input
          placeholder="Competition Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          type="url"
          placeholder="Registration Link (Google Form etc.)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border px-3 py-2 rounded col-span-full"
        />

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <input
          placeholder="Domain (AI, Web, Design)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          placeholder="Location (only if offline)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded col-span-full"
        />

        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-3 py-2 rounded col-span-full"
        />

        <input
          type="file"
          onChange={(e) => setPoster(e.target.files[0])}
          className="col-span-full"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={submitCompetition}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {editingId ? "Update Competition" : "Add Competition"}
        </button>

        {editingId && (
          <button
            onClick={resetForm}
            className="bg-gray-400 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {/* ================= LIST ================= */}
      {list.map((c) => (
        <div
          key={c._id}
          className="flex gap-4 bg-white p-4 mb-3 border rounded-lg"
        >
          {c.poster && (
            <img
              src={`${API}${c.poster}`}
              alt=""
              className="w-24 h-24 object-cover rounded"
            />
          )}

          <div className="flex-1">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600">{c.description}</p>

            <p className="text-xs text-gray-500">
              {c.date} | {c.mode} | {c.domain}
            </p>

            {c.location && (
              <p className="text-xs text-gray-500">
                Location: {c.location}
              </p>
            )}

            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-sm text-blue-600 underline"
              >
                Open Registration Link
              </a>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => editCompetition(c)}
              className="text-sm bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteCompetition(c._id)}
              className="text-sm bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
