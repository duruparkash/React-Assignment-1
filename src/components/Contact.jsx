import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p>Have questions or want to work together? Drop us a message below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;