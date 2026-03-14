  import React from 'react';
import '../App.css'
  const Contact = () => (
    <section className="contact-section" id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-grid">

        {/* Email */}
        <div className="contact-item">
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>support@naveenfashion.com</p>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>+91 98765 43210</p>
        </div>

        {/* Address */}
        <div className="contact-item">
          <i className="fa-solid fa-location-dot"></i>
          <h4>Studio Address</h4>
          <p>Bangalore, Karnataka, India</p>
        </div>

        {/* Working Hours */}
        <div className="contact-item">
          <i className="fa-solid fa-clock"></i>
          <h4>Working Hours</h4>
          <p>Mon - Sat: 10AM - 8PM</p>
        </div>

      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Social Media */}
      <div className="social-links">
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
      </div>

    </section>
  );

  export default Contact;