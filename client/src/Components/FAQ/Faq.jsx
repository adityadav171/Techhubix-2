import React, { useState } from "react";
import "./Faq.css"; // your existing CSS

const faqsData = [
  {
    question: "What services does TechHubbix offer?",
    answer:
      "TechHubbix specializes in HubSpot development, full-stack web applications, Shopify store development, CRM automation, and data-driven digital marketing solutions.",
  },
  {
    question: "Do you provide custom software development?",
    answer:
      "Yes. We build scalable and secure custom web applications tailored to your business needs using modern full-stack technologies.",
  },
  {
    question: "Can TechHubbix help with HubSpot CRM setup and automation?",
    answer:
      "Absolutely. We provide complete HubSpot setup, custom integrations, workflow automation, sales pipeline optimization, and marketing automation services.",
  },
  {
    question: "Do you develop and optimize Shopify stores?",
    answer:
      "Yes. We design, develop, and optimize high-converting Shopify stores, including custom themes, app integrations, and performance enhancements.",
  },
  {
    question: "Do you offer digital marketing services?",
    answer:
      "Yes. Our digital marketing services include SEO, paid advertising, social media marketing, lead generation, and conversion optimization strategies.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope and complexity. Small websites may take 2–4 weeks, while larger full-stack or eCommerce projects can take 6–10 weeks. We provide a detailed timeline after consultation.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. TechHubbix offers ongoing maintenance, performance optimization, and 24/7 support to ensure your digital products run smoothly after launch.",
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
