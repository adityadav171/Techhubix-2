import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const Services = () => {
  // Display all services
  const filteredServices = servicesData;

  return (
    <section className="section-h services-section-h">
      <h2 className="section-title-h">
        Our <span>Expertise</span>
      </h2>
      <p className="section-subtitle-h">
        We combine technology, automation, and marketing intelligence to build scalable digital ecosystems.
      </p>

      <div className="services-container-h">
        {filteredServices.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="service-item-h"
          >
            <div className="service-icon-h">
              {service.icon}
            </div>
            <h4>{service.title}</h4>
            <p>{service.shortDescription}</p>
            <span className="service-link">Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
