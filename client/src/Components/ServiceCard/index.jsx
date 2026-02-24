import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="ab-service-box">
      <Link to={`/services/${service.slug}`} className="ab-service-link">
        <div className="ab-service-img">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      <div className="ab-icon">
        <i className={service.icon}></i>
      </div>

      <h3>{service.title}</h3>

      <p className="ab-line">{service.excerpt}</p>
    </div>
  );
};

export default ServiceCard;
