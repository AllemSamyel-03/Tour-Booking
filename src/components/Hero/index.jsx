import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiShield, FiSmile } from "react-icons/fi";

const Hero = () => (
  <section className="hero-section">
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="eyebrow">Preschool tours made simple</span>
      <h1>Book a cheerful IntelliTots centre visit for your child.</h1>
      <p>
        Explore safe classrooms, activity zones, caring educators and admission
        support before choosing the right preschool branch for your family.
      </p>
      <div className="hero-actions">
        <Link className="primary-button" to="/booking">
          Book A Centre Tour <FiArrowRight />
        </Link>
        <a className="secondary-button" href="#benefits">
          Explore Benefits
        </a>
      </div>
      <div className="hero-stats">
        <span>
          <FiCalendar /> Flexible slots
        </span>
        <span>
          <FiShield /> Safe visits
        </span>
        <span>
          <FiSmile /> Parent friendly
        </span>
      </div>
    </motion.div>
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <img
        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
        alt="happy preschool children learning together"
      />
      <div className="floating-note note-one">Play-based learning</div>
      <div className="floating-note note-two">Guided centre tours</div>
    </motion.div>
  </section>
);

export default Hero;
