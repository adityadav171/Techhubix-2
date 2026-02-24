import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const Services = () => {
  // Filter out Mobile App Development (id: 2) and Blockchain Development (id: 3)
  const filteredServices = servicesData.filter(
    (service) => service.id !== 2 && service.id !== 3
  );

  return (
    <section className="section-h">
      <h2 className="section-title-h">
        Our <span>Services</span>
      </h2>
      <p className="section-subtitle-h">
        Empowering your business with cutting-edge technology and marketing
        solutions
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
