import React, { useState } from "react";
import "./Faq.css"; // your existing CSS

const faqsData = [
  {
    question: "What services does Array Blocks offer?",
    answer:
      "We specialize in smart contract development, DeFi platforms, MLM systems, token ICO launches, exchange listings (CMC, CG), and comprehensive digital marketing solutions.",
  },
  {
    question: "Does Array Blocks offer Web3 development services?",
    answer:
      "Yes. Array Blocks offers complete Web3 development services, including blockchain-based applications, smart contracts, decentralized platforms, and custom Web3 solutions tailored to business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Smart contracts typically take 2-4 weeks, while complete DeFi platforms may take 6-12 weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We offer 24/7 support and maintenance packages to ensure your project runs smoothly. Our team is always available to address any issues or implement updates.",
  },
  {
    question: "Can you help with exchange listings?",
    answer:
      "Absolutely! We have successfully listed 10+ tokens on major exchanges including CoinMarketCap, CoinGecko, and various DEX/CEX platforms. We handle the entire listing process.",
  },
  {
    question: "What blockchain platforms do you work with?",
    answer:
      "We work with Ethereum, Binance Smart Chain, Polygon, Solana, and other major blockchain networks. We'll recommend the best platform based on your project requirements.",
  },
  {
    question: "How much does a smart contract project cost?",
    answer:
      "Project costs depend on complexity and requirements. Basic smart contracts start from $2000, while full DeFi platforms can range from $10,000 to $50,000+. Contact us for a detailed quote.",
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
