import React from 'react';
import Button from './Button';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-badge">Welcome to the Future of Tech</div>
      <h2>Empowering Your Digital Journey</h2>
      <p>
        We provide cutting-edge solutions, expert guidance, and scalable tools designed to 
        transform your ideas into high-performance web and mobile experiences.
      </p>
      <div className="hero-stats">
        <div className="stat-item">
          <strong>100+</strong>
          <span>Projects Completed</span>
        </div>
        <div className="stat-item">
          <strong>98%</strong>
          <span>Client Satisfaction</span>
        </div>
        <div className="stat-item">
          <strong>24/7</strong>
          <span>Dedicated Support</span>
        </div>
      </div>
      <Button />
    </section>
  );
}

export default Hero;