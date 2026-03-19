import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faShieldHalved,
  faUserTie,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  const openPopup = () => {
    // Add your popup logic here
    console.log("Popup opened!");
  };
  const navigate = useNavigate();
  const features = [
    {
      icon: faRocket,
      title: "Fast & Agile Execution",
      description:
        "Lean development process ensuring rapid delivery without compromising quality.",
    },
    {
      icon: faShieldHalved,
      title: "Enterprise-Grade Security",
      description:
        "Every solution is built with modern security standards and rigorous testing.",
    },
    {
      icon: faUserTie,
      title: "Experienced Specialists",
      description:
        "Developers, CRM consultants, and marketing strategists aligned toward performance.",
    },
    {
      icon: faHeadset,
      title: "Dedicated Ongoing Support",
      description:
        "Post-launch monitoring, maintenance, and growth optimization.",
    },
  ];

  return (
    <section className="section-h about-section-h">
      <div className="container-h">
        <div className="about-container-h">
          <div className="about-left-h">
            <img
              decoding="async"
              src="https://img.freepik.com/premium-vector/about-us_773186-1364.jpg"
              alt="TechHubbix Team"
            />
          </div>

          <div className="about-right-h">
            <h2>
              Your Strategic{" "}
              <span className="gradient-text-h">Technology Partner</span>
            </h2>
            <p>
              At TechHubbix, we don't just build websites — we build scalable
              digital infrastructures that power long-term growth.
            </p>
            <p>
              Our team combines engineering expertise, CRM automation, and
              growth marketing to create integrated systems that increase
              efficiency, improve customer acquisition, and maximize ROI.
            </p>
            <p>
              From strategy to deployment and ongoing optimization, we operate
              as an extension of your team.
            </p>
            <button
              onClick={() => navigate("/projects")}
              className="dm-btn-primary-h"
            >
              View Our Work
            </button>
          </div>
        </div>

        <div className="about-features-h">
          <h3 className="features-title">Why Choose Us</h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item-h">
                <h4>
                  <span className="feature-emoji">
                    <FontAwesomeIcon icon={feature.icon} />
                  </span>
                  {feature.title}
                </h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
