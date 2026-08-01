import React from 'react';

function Cards() {
  return (
    <section className="cards-container">
      <div className="card">
        <h3>Strategy</h3>
        <p>We analyze your target market and build a roadmap tailored to your specific goals.</p>
      </div>
      <div className="card">
        <h3>Design</h3>
        <p>Our creative team crafts stunning, user-friendly interfaces that capture attention.</p>
      </div>
      <div className="card">
        <h3>Development</h3>
        <p>We write clean, high-performance code to ensure your web platforms run seamlessly.</p>
      </div>
    </section>
  );
}

export default Cards;