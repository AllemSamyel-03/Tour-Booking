import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FiCheckCircle, FiEdit3 } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SummaryCard from "../../components/SummaryCard";
import generateBookingId from "../../utils/generateBookingId";

const Summary = () => {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDraft = localStorage.getItem("bookingDraft");
    if (storedDraft === null) {
      navigate("/booking", { replace: true });
      return;
    }
    setBooking(JSON.parse(storedDraft));
  }, [navigate]);

  const onConfirmBooking = () => {
    const confirmedBooking = {
      ...booking,
      bookingId: generateBookingId(),
      createdAt: new Date().toISOString(),
    };

    const bookingHistory =
      JSON.parse(localStorage.getItem("bookingHistory")) || [];
    localStorage.setItem(
      "bookingHistory",
      JSON.stringify([confirmedBooking, ...bookingHistory]),
    );
    localStorage.setItem("confirmedBooking", JSON.stringify(confirmedBooking));
    localStorage.removeItem("bookingDraft");
    toast.success("Tour booking confirmed.");
    navigate("/confirmation");
  };

  if (booking === null) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <main className="page-shell">
        <motion.section
          className="page-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="eyebrow">Review details</span>
          <h1>Booking summary</h1>
          <p>
            Check the details before confirming your preschool centre visit.
          </p>
        </motion.section>
        <SummaryCard booking={booking} />
        <div className="summary-actions">
          <button
            className="secondary-button"
            type="button"
            onClick={() => navigate("/booking")}
          >
            <FiEdit3 /> Edit Booking
          </button>
          <button
            className="primary-button"
            type="button"
            onClick={onConfirmBooking}
          >
            <FiCheckCircle /> Confirm Booking
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Summary;
