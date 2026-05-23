import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Trash2, Save } from "lucide-react";

export default function AdminCourseDetail() {
  const { courseId } = useParams();

  const [lectures, setLectures] = useState([]);
  const [notes, setNotes] = useState([]);

  const [lecture, setLecture] = useState({ title: "", videoUrl: "" });
  const [note, setNote] = useState({ title: "", pdfUrl: "" });

  /* ================= LOAD DATA ================= */
  const loadData = async () => {
    const l = await fetch(
      `http://https://https://coderz-1.onrender.com/api/lectures/course/${courseId}`
    ).then(r => r.json());

    const n = await fetch(
      `http://https://https://coderz-1.onrender.com/api/notes/course/${courseId}`
    ).then(r => r.json());

    setLectures(l);
    setNotes(n);
  };

  useEffect(() => {
    loadData();
  }, []);

  /* ================= ADD LECTURE ================= */
  const addLecture = async () => {
    if (!lecture.title.trim()) return alert("Lecture title required");

    await fetch("http://https://https://coderz-1.onrender.com/api/lectures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lecture, course: courseId }),
    });

    setLecture({ title: "", videoUrl: "" });
    loadData();
  };

  /* ================= UPDATE LECTURE ================= */
  const updateLecture = async (l) => {
    await fetch(`http://https://https://coderz-1.onrender.com/api/lectures/${l._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(l),
    });
    alert("Lecture updated");
  };

  /* ================= DELETE LECTURE ================= */
  const deleteLecture = async (id) => {
    if (!confirm("Delete this lecture?")) return;

    await fetch(`http://https://https://coderz-1.onrender.com/api/lectures/${id}`, {
      method: "DELETE",
    });

    setLectures(lectures.filter(l => l._id !== id));
  };

  /* ================= ADD NOTE ================= */
  const addNote = async () => {
    if (!note.title.trim()) return alert("Note title required");

    await fetch("http://https://https://coderz-1.onrender.com/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...note, course: courseId }),
    });

    setNote({ title: "", pdfUrl: "" });
    loadData();
  };

  /* ================= UPDATE NOTE ================= */
  const updateNote = async (n) => {
    await fetch(`http://https://https://coderz-1.onrender.com/api/notes/${n._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n),
    });
    alert("Note updated");
  };

  /* ================= DELETE NOTE ================= */
  const deleteNote = async (id) => {
    if (!confirm("Delete this note?")) return;

    await fetch(`http://https://https://coderz-1.onrender.com/api/notes/${id}`, {
      method: "DELETE",
    });

    setNotes(notes.filter(n => n._id !== id));
  };

  return (
    <div className="p-6 space-y-12">

      {/* ================= LECTURES ================= */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-bold">Lectures</h2>

        {/* ADD LECTURE */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Lecture title"
            className="border p-2 rounded"
            value={lecture.title}
            onChange={e =>
              setLecture({ ...lecture, title: e.target.value })
            }
          />
          <input
            placeholder="Video URL"
            className="border p-2 rounded"
            value={lecture.videoUrl}
            onChange={e =>
              setLecture({ ...lecture, videoUrl: e.target.value })
            }
          />
        </div>

        <button
          onClick={addLecture}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Add Lecture
        </button>

        {/* LECTURE LIST */}
        <div className="space-y-3">
          {lectures.map(l => (
            <div
              key={l._id}
              className="flex gap-2 items-center bg-gray-50 p-3 rounded"
            >
              <input
                className="border p-2 flex-1 rounded"
                value={l.title}
                onChange={e =>
                  setLectures(prev =>
                    prev.map(x =>
                      x._id === l._id
                        ? { ...x, title: e.target.value }
                        : x
                    )
                  )
                }
              />

              <button
                onClick={() => updateLecture(l)}
                className="bg-green-600 text-white p-2 rounded"
              >
                <Save size={16} />
              </button>

              <button
                onClick={() => deleteLecture(l._id)}
                className="bg-red-600 text-white p-2 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= NOTES ================= */}
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-bold">Notes</h2>

        {/* ADD NOTE */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Note title"
            className="border p-2 rounded"
            value={note.title}
            onChange={e =>
              setNote({ ...note, title: e.target.value })
            }
          />
          <input
            placeholder="PDF URL"
            className="border p-2 rounded"
            value={note.pdfUrl}
            onChange={e =>
              setNote({ ...note, pdfUrl: e.target.value })
            }
          />
        </div>

        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add Note
        </button>

        {/* NOTES LIST */}
        <div className="space-y-3">
          {notes.map(n => (
            <div
              key={n._id}
              className="flex gap-2 items-center bg-gray-50 p-3 rounded"
            >
              <input
                className="border p-2 flex-1 rounded"
                value={n.title}
                onChange={e =>
                  setNotes(prev =>
                    prev.map(x =>
                      x._id === n._id
                        ? { ...x, title: e.target.value }
                        : x
                    )
                  )
                }
              />

              <button
                onClick={() => updateNote(n)}
                className="bg-green-600 text-white p-2 rounded"
              >
                <Save size={16} />
              </button>

              <button
                onClick={() => deleteNote(n._id)}
                className="bg-red-600 text-white p-2 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
