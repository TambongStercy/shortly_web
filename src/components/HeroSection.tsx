import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">More than just shorter links</h1>
        <p className="hero-subheading">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/images/illustration-working.svg" alt="Person working at a desk" />
      </div>
    </section>
  );
};

export default HeroSection;
