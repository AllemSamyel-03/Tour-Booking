import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingForm from "../../components/BookingForm";
import { validateBooking } from "../../utils/validation";

const getInitialBooking = (currentUser) => {
  const storedDraft = localStorage.getItem("bookingDraft");
  if (storedDraft !== null) {
    const parsedDraft = JSON.parse(storedDraft);
    return {
      ...parsedDraft,
      visitDate: parsedDraft.visitDate ? new Date(parsedDraft.visitDate) : null,
    };
  }

  return {
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    branch: "",
    visitDate: null,
    timeSlot: "",
    message: "",
  };
};

const Booking = () => {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState(() =>
    getInitialBooking(currentUser),
  );
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const updateField = (field, value) => {
    setFormData((prevData) => {
      const nextData = { ...prevData, [field]: value };
      if (field === "branch" || field === "visitDate") {
        nextData.timeSlot = "";
      }
      localStorage.setItem("bookingFormData", JSON.stringify(nextData));
      return nextData;
    });
  };

  const onSubmitBooking = (event) => {
    event.preventDefault();
    const bookingToSave = {
      ...formData,
    };
    const formErrors = validateBooking(bookingToSave);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      toast.error("Please complete the highlighted fields.");
      return;
    }

    setFormData(bookingToSave);
    localStorage.setItem("bookingDraft", JSON.stringify(bookingToSave));
    localStorage.setItem(
      "selectedSlots",
      JSON.stringify({
        branch: bookingToSave.branch,
        date: bookingToSave.visitDate,
        slot: bookingToSave.timeSlot,
      }),
    );
    toast.success("Booking details saved for review.");
    navigate("/summary");
  };

  return (
    <div>
      <Navbar />
      <main className="page-shell booking-page">
        <motion.section
          className="page-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="eyebrow">Centre Tour Calendar</span>
          <h1>Choose a branch, date and time slot.</h1>
          <p>
            Share a few details and we will prepare your IntelliTots visit
            summary before confirmation.
          </p>
        </motion.section>
        <section className="booking-layout">
          <BookingForm
            formData={formData}
            errors={errors}
            updateField={updateField}
            onSubmit={onSubmitBooking}
          />
          <aside className="booking-side-card">
            <img
              src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=700&q=80"
              alt="preschool teacher helping children"
            />
            <h2>What happens during the tour?</h2>
            <ul>
              <li>Meet the centre team</li>
              <li>Explore classrooms and play zones</li>
              <li>Discuss program fit and admission next steps</li>
            </ul>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
