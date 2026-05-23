import { Link } from "react-router-dom";

const EventCard = ({ comp }) => (
  <div className="card">
    <img src={comp.banner} />
    <h3>{comp.title}</h3>
    <p>{comp.description}</p>

    <Link to={`/events/${comp._id}`}>View Details</Link>
  </div>
);

export default EventCard;
