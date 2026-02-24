import React from "react";
import "./Style.css";

const AboutSection = () => {
  const openPopup = () => {
    // Add your popup logic here
    console.log("Popup opened!");
  };

  const features = [
    {
      icon: "fas fa-bolt",
      title: "Fast Delivery",
      description: "Quick turnaround, quality assured",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality Assurance",
      description: "Thoroughly tested and secure solutions",
    },
    {
      icon: "fas fa-users",
      title: "Expert Team",
      description: "Experienced blockchain developers",
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Always here to help you succeed",
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
              alt="Array Blocks Team"
            />
          </div>

          <div className="about-right-h">
            <h2>
              Let's <span className="gradient-text-h">Build !</span>
            </h2>
            <p>
              We are a premier blockchain development company specializing in
              smart contracts, DeFi platforms, and token launches.
            </p>
            <p>
              Our mission is to deliver innovative, secure, and scalable
              blockchain solutions that empower businesses to grow and stay
              ahead in the digital era.
            </p>
            <p>
              From concept to deployment, we build high-performance blockchain
              products engineered for reliability and long-term success.
            </p>
            <button onClick={openPopup} className="dm-btn-primary-h">
              View Demo
            </button>
          </div>
        </div>

        <div className="about-features-h">
          {features.map((feature, index) => (
            <div key={index} className="feature-item-h">
              <h4>
                <i className={`${feature.icon} gradient-text-h`}></i>{" "}
                {feature.title}
              </h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
