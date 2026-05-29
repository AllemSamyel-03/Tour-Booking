import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiHeart,
  FiMusic,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Testimonials from "../../components/Testimonials";
import FAQ from "../../components/FAQ";

const benefits = [
  {
    icon: <FiShield />,
    title: "Safe Classrooms",
    text: "Warm spaces designed for supervised exploration.",
  },
  {
    icon: <FiBookOpen />,
    title: "Early Learning",
    text: "Stories, language, numeracy and playful discovery.",
  },
  {
    icon: <FiUsers />,
    title: "Caring Educators",
    text: "Parent-friendly teams who explain each step clearly.",
  },
];

const activities = [
  { icon: <FiMusic />, title: "Music and Rhythm" },
  { icon: <FiHeart />, title: "Social Skills" },
  { icon: <FiAward />, title: "Creative Play" },
  { icon: <FiBookOpen />, title: "Story Circles" },
];

const Home = () => (
  <div>
    <Navbar />
    <main className="page-shell">
      <Hero />
      <section className="section-block about-section">
        <div className="section-heading">
          <span className="eyebrow">About IntelliTots</span>
          <h2>A preschool ecosystem built around joyful readiness.</h2>
          <p>
            This booking calendar helps parents explore branch details, choose
            visit slots and keep every tour confirmation organized in one place.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
          alt="preschool learning activity"
        />
      </section>
      <section className="section-block" id="benefits">
        <div className="section-heading">
          <span className="eyebrow">Why parents choose us</span>
          <h2>Simple, reassuring and visit-ready.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <motion.article
              className="feature-card"
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="feature-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="section-block activities-section">
        <div className="section-heading">
          <span className="eyebrow">Learning activities</span>
          <h2>See the moments that make preschool feel welcoming.</h2>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => (
            <div className="activity-card" key={activity.title}>
              {activity.icon}
              <h3>{activity.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Home;
