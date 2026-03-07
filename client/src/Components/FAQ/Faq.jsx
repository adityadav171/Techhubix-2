import React, { useState } from "react";
import "./Faq.css"; // your existing CSS

const faqsData = [
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, SaaS companies, eCommerce brands, agencies, and growing businesses across the US, UK, and international markets. Our expertise spans fintech, healthcare, retail, and B2B sectors.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We serve clients globally and operate across multiple time zones. We have experience working with US, UK, and international businesses with proven track records of successful delivery.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow agile development methodologies, conduct thorough QA testing, and maintain transparent communication throughout the project lifecycle. Every project undergoes rigorous quality assurance before launch.",
  },
  {
    question: "Do you offer ongoing marketing and technical support?",
    answer:
      "Yes. We provide long-term maintenance, optimization, and performance marketing services. Our team offers 24/7 support, monitoring, and growth optimization after project launch.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope. Website packages typically take 2-4 weeks, custom development projects 6-12 weeks, and eCommerce solutions 4-8 weeks. We provide a detailed timeline during the consultation phase.",
  },
  {
    question: "Can TechHubbix provide HubSpot CRM setup and automation?",
    answer:
      "Absolutely. We provide complete HubSpot setup, workflow automation, pipeline optimization, reporting dashboards, and API integrations to streamline your sales process.",
  },
  {
    question: "Do you develop high-converting Shopify stores?",
    answer:
      "Yes. We design, develop, and optimize high-converting Shopify stores with custom themes, app integrations, payment solutions, and performance optimization for maximum revenue.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="section-h faqhome-section-h">
      <h2 className="faqhome-title-h">
        Frequently Asked <span>Questions</span>
      </h2>
      <p className="faqhome-subtitle-h">
        Find answers to common questions about our services and processes
      </p>

      <div className="faqhome-container-h">
        {faqsData.map((faq, index) => (
          <div className="faqhome-item-h" key={index}>
            <div
              className="faqhome-question-h"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <span>{faq.question}</span>
              <span className="faqhome-icon-h">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faqhome-answer-h">
                <div className="faqhome-answer-content-h">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
