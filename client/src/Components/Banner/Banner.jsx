import React, { useEffect, useState } from "react";
import "./Banner.css";

const words = [
  "Website Development",
  "HubSpot Development",
  
  "Digital Marketing",
  "SEO Services",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="dm-hero-section-h">
      <div className="dm-container-h">
        <div className="dm-left-h">
          <h1>
            TechHubBix Offers
            <br />
            Solutions For
            <br />
            <span className="typewriter-h">
              {text}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="dm-desc-h">
            We provide custom software and blockchain development services,
            helping businesses build powerful products and scale with digital
            marketing solutions.
          </p>

          {/* <div className="dm-rating-h">
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="⭐"
              src="https://s.w.org/images/core/emoji/17.0.2/svg/2b50.svg"
            />
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="⭐"
              src="https://s.w.org/images/core/emoji/17.0.2/svg/2b50.svg"
            />
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="⭐"
              src="https://s.w.org/images/core/emoji/17.0.2/svg/2b50.svg"
            />
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="⭐"
              src="https://s.w.org/images/core/emoji/17.0.2/svg/2b50.svg"
            />
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="⭐"
              src="https://s.w.org/images/core/emoji/17.0.2/svg/2b50.svg"
            />
            <span>4.9/5 Rating • 120+ Reviews</span>
          </div> */}

          <div className="dm-buttons-h">
            <button
              type="button"
              className="dm-btn-primary-h"
              onClick={() => window.openPopup?.()}
            >
              Get Free Site Audit
            </button>
          </div>
        </div>

        <div className="dm-right-h">
          <div className="dm-img-card-h">
            <img
              src="https://arrayblocks.net/wp-content/uploads/2025/12/1.avif"
              alt="Digital Marketing"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
