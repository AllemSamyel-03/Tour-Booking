import { FiCalendar, FiMapPin, FiMessageCircle, FiUser } from "react-icons/fi";
import { branchesList } from "../../utils/slotUtils";

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const SummaryCard = ({ booking }) => {
  const branch = branchesList.find((item) => item.id === booking.branch);

  return (
    <div className="summary-card">
      <div className="summary-row">
        <FiMapPin />
        <div>
          <span>Centre</span>
          <h3>{branch?.name}</h3>
          <p>{branch?.location}</p>
          <a href={branch?.link} target="_blank" rel="noreferrer">
            View branch reference
          </a>
        </div>
      </div>
      <div className="summary-grid">
        <div className="summary-mini-card">
          <FiUser />
          <span>Parent</span>
          <h3>{booking.parentName}</h3>
          <p>{booking.email}</p>
          <p>{booking.phone}</p>
        </div>
        <div className="summary-mini-card">
          <FiUser />
          <span>Child</span>
          <h3>{booking.childName}</h3>
          <p>{booking.childAge}</p>
        </div>
        <div className="summary-mini-card">
          <FiCalendar />
          <span>Visit</span>
          <h3>{formatDate(booking.visitDate)}</h3>
          <p>{booking.timeSlot}</p>
        </div>
        <div className="summary-mini-card">
          <FiMessageCircle />
          <span>Message</span>
          <p>{booking.message || "No additional message added."}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
