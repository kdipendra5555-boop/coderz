import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://https://coderz-1.onrender.com";

export default function CompetitionDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${API}/api/competitions/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {data.poster && (
        <img
          src={`${API}${data.poster}`}
          className="w-full rounded mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-4">{data.description}</p>
      <p className="text-sm text-gray-500 mb-6">
        Event Date: {data.date}
      </p>

      <button className="bg-green-600 text-white px-6 py-3 rounded">
        Register Now
      </button>
    </div>
  );
}
