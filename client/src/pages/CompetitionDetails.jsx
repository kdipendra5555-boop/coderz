import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CompetitionDetails = () => {
  const { id } = useParams();
  const [comp, setComp] = useState({});
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get(`/api/competitions/${id}`).then(res => setComp(res.data));
  }, []);

  const register = async () => {
    await axios.post("/api/registrations", {
      ...form,
      competitionId: id,
    });
    alert("Registered Successfully");
  };

  return (
    <div>
      <h1>{comp.title}</h1>
      <p>{comp.description}</p>

      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})} />

      <button onClick={register}>Register</button>
    </div>
  );
};

export default CompetitionDetails;
