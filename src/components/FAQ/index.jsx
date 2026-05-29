import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Can I choose any Hyderabad branch?",
    answer:
      "Yes. Choose the preferred IntelliTots branch from the booking form.",
  },
  {
    question: "Can I edit before confirming?",
    answer:
      "Yes. The summary page includes an edit option before confirmation.",
  },
  {
    question: "Where are bookings stored?",
    answer: "This frontend project stores users and bookings in LocalStorage.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-block faq-section">
      <div className="section-heading">
        <span className="eyebrow">Questions</span>
        <h2>Helpful answers before your visit.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div className="faq-item" key={faq.question}>
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? -1 : index)}
              >
                {faq.question}
                <FiChevronDown className={isActive ? "rotate-icon" : ""} />
              </button>
              {isActive && <p>{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
