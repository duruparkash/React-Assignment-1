import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Our Company</h2>
      <p className="about-lead">
        We are a passionate collective of creators, designers, and software engineers dedicated 
        to crafting world-class digital products.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h4>Our Vision</h4>
          <p>To pioneer digital transformations that make advanced technology accessible and impactful for businesses worldwide.</p>
        </div>
        <div className="about-card">
          <h4>Our Mission</h4>
          <p>To deliver robust, scalable, and user-centric applications through clean code and innovative design thinking.</p>
        </div>
      </div>
    </section>
  );
}

export default About;