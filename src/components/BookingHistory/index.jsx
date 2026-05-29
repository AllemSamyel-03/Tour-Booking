import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiTrash2,
  FiUser,
} from "react-icons/fi";
import { branchesList } from "../../utils/slotUtils";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const BookingHistory = ({ bookings, deleteBooking }) => {
  if (bookings.length === 0) {
    return (
      <div className="empty-state">
        <img
          src="https://images.unsplash.com/photo-1544776193-32d404ae608a?auto=format&fit=crop&w=700&q=80"
          alt="preschool classroom"
        />
        <h2>No bookings found</h2>
        <p>Your booked centre visits will appear here.</p>
      </div>
    );
  }

  return (
    <div className="history-grid">
      {bookings.map((booking) => {
        const branch = branchesList.find((item) => item.id === booking.branch);
        return (
          <article className="history-card" key={booking.bookingId}>
            <div className="history-card-header">
              <span>{booking.bookingId}</span>
              <button
                type="button"
                onClick={() => deleteBooking(booking.bookingId)}
              >
                <FiTrash2 />
              </button>
            </div>
            <h2>{branch?.name}</h2>
            <p>
              <FiMapPin /> {branch?.location}
            </p>
            <div className="history-details">
              <span>
                <FiUser /> {booking.parentName}
              </span>
              <span>
                <FiUser /> {booking.childName}
              </span>
              <span>
                <FiCalendar /> {formatDate(booking.visitDate)}
              </span>
              <span>
                <FiClock /> {booking.timeSlot}
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BookingHistory;
