import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import BookingHistory from "../../components/BookingHistory";

const History = () => {
  const [bookings, setBookings] = useState(
    () => JSON.parse(localStorage.getItem("bookingHistory")) || [],
  );
  const [searchInput, setSearchInput] = useState("");

  const deleteBooking = (bookingId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.bookingId !== bookingId,
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookingHistory", JSON.stringify(updatedBookings));
    toast.success("Booking deleted.");
  };

  const filteredBookings = bookings.filter((booking) => {
    const searchValue = searchInput.toLowerCase();
    return (
      booking.parentName.toLowerCase().includes(searchValue) ||
      booking.childName.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div>
      <Navbar />
      <main className="page-shell">
        <motion.section
          className="history-header"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <span className="eyebrow">Saved visits</span>
            <h1>Booking history</h1>
            <p>Search, review and manage all confirmed centre tour visits.</p>
          </div>
          <SearchBar
            searchInput={searchInput}
            updateSearchInput={setSearchInput}
          />
        </motion.section>
        <BookingHistory
          bookings={filteredBookings}
          deleteBooking={deleteBooking}
        />
      </main>
      <Footer />
    </div>
  );
};

export default History;
