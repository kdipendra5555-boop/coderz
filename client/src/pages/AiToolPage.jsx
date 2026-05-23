import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function AiToolPage() {
  const { id } = useParams();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/ai-tools/${id}`)
      .then(res => res.json())
      .then(data => {
        setTool(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="p-10">Loading AI Tool...</div>;
  }

  if (!tool) {
    return <div className="p-10">AI Tool not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow">

        {tool.thumbnail && (
          <img
            src={tool.thumbnail}
            alt={tool.name}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
        )}

        <h1 className="text-3xl font-bold mb-3">
          {tool.name}
        </h1>

        <p className="text-gray-600 mb-6 whitespace-pre-line">
          {tool.description || "No description available"}
        </p>

        <div className="flex gap-4">
          {tool.useLink && (
            <a
              href={tool.useLink}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Use Tool
            </a>
          )}

          {tool.learnLink && (
            <a
              href={tool.learnLink}
              target="_blank"
              rel="noreferrer"
              className="border px-6 py-3 rounded-lg"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
