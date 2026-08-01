import React from 'react';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Our Core Services</h2>
      <p className="services-subtitle">
        We offer a comprehensive suite of digital services designed to accelerate your growth.
      </p>
      <div className="services-grid">
        <div className="service-box">
          <h4>Web Application Development</h4>
          <p>Building fast, responsive, and modern web platforms using cutting-edge frameworks.</p>
        </div>
        <div className="service-box">
          <h4>UI/UX Interface Design</h4>
          <p>Crafting intuitive and engaging user journeys that captivate audiences and drive conversions.</p>
        </div>
        <div className="service-box">
          <h4>Cloud Integration & Scaling</h4>
          <p>Ensuring your applications remain secure, highly available, and ready to scale effortlessly.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;