import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ananya Reddy",
    text: "The tour helped us understand classrooms, schedules and safety policies clearly.",
  },
  {
    name: "Rohit Menon",
    text: "The booking flow felt smooth, and the visit coordinator was very parent-friendly.",
  },
  {
    name: "Meera Shah",
    text: "Loved the warm colours, learning zones and activity-led preschool environment.",
  },
];

const Testimonials = () => (
  <section className="section-block">
    <div className="section-heading">
      <span className="eyebrow">Parent voices</span>
      <h2>Families feel confident after visiting.</h2>
    </div>
    <div className="testimonial-grid">
      {testimonials.map((item, index) => (
        <motion.div
          className="testimonial-card"
          key={item.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className="rating-row">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>
          <p>{item.text}</p>
          <h3>{item.name}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
