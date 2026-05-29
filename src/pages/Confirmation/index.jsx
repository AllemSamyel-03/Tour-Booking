import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheck, FiClock, FiHome } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { branchesList } from "../../utils/slotUtils";

const Confirmation = () => {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const confirmedBooking = localStorage.getItem("confirmedBooking");
    if (confirmedBooking === null) {
      navigate("/booking", { replace: true });
      return;
    }
    setBooking(JSON.parse(confirmedBooking));
  }, [navigate]);

  if (booking === null) {
    return null;
  }

  const branch = branchesList.find((item) => item.id === booking.branch);

  return (
    <div>
      <Navbar />
      <main className="page-shell confirmation-page">
        <motion.section
          className="confirmation-card"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="success-icon">
            <FiCheck />
          </div>
          <span className="eyebrow">Booking confirmed</span>
          <h1>Your IntelliTots centre tour is ready.</h1>
          <p>
            Booking ID <strong>{booking.bookingId}</strong> has been saved in
            your booking history.
          </p>
          <div className="confirmation-details">
            <span>{branch?.name}</span>
            <span>
              {new Date(booking.visitDate).toLocaleDateString("en-IN")}
            </span>
            <span>{booking.timeSlot}</span>
          </div>
          <div className="hero-actions">
            <Link className="primary-button" to="/">
              <FiHome /> Back Home
            </Link>
            <Link className="secondary-button" to="/history">
              <FiClock /> View History
            </Link>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Confirmation;
