import { useEffect, useState } from "react";
import { FileText, ShieldCheck, Cookie, Save, Trash2 } from "lucide-react";
import axios from "axios";

export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage legal pages of your platform
        </p>
      </div>

      {/* LEGAL SECTIONS (INLINE CRUD) */}
      <LegalBlock
        title="Privacy Policy"
        type="privacy"
        icon={<FileText size={18} />}
        accent="blue"
      />

      <LegalBlock
        title="Terms & Conditions"
        type="terms"
        icon={<ShieldCheck size={18} />}
        accent="emerald"
      />

      <LegalBlock
        title="Cookie Policy"
        type="cookies"
        icon={<Cookie size={18} />}
        accent="orange"
      />
    </div>
  );
}

/* ================= LEGAL BLOCK (CRUD) ================= */

function LegalBlock({ title, type, icon, accent }) {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const colors = {
    blue: "text-blue-600 bg-blue-100 focus:ring-blue-500",
    emerald: "text-emerald-600 bg-emerald-100 focus:ring-emerald-500",
    orange: "text-orange-600 bg-orange-100 focus:ring-orange-500",
  };

  const API = `/api/legal/${type}`;

  useEffect(() => {
    axios.get(API).then((res) => {
      if (res.data?.content) setContent(res.data.content);
    });
  }, [API]);

  const save = async () => {
    setLoading(true);
    await axios.post(
      API,
      { content },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setLoading(false);
    alert(`${title} saved`);
  };

  const clear = async () => {
    if (!window.confirm("Clear this content?")) return;
    setContent("");
    await save();
  };

  return (
    <div className="bg-white border rounded-2xl overflow-hidden">

      {/* HEADER ROW */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors[accent]}`}
          >
            {icon}
          </div>
          <span className="font-semibold text-gray-900">{title}</span>
        </div>

        <span className="text-sm text-gray-400">
          {open ? "Hide" : "Edit"}
        </span>
      </button>

      {/* EDITOR */}
      {open && (
        <div className="border-t px-5 py-4 space-y-4">
          <textarea
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`Enter ${title} content...`}
            className={`w-full border rounded-xl p-4 text-sm
            focus:outline-none focus:ring-2 ${colors[accent]}`}
          />

          <div className="flex justify-between items-center">
            <button
              onClick={clear}
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
            >
              <Trash2 size={16} />
              Clear
            </button>

            <button
              onClick={save}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2 rounded-lg
              bg-gradient-to-r from-blue-600 to-emerald-500
              text-white font-semibold hover:opacity-90"
            >
              <Save size={16} />
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
