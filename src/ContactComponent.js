import React from 'react';
import './App.css'; // Import the main CSS file for styling

const ContactComponent = () => {
  return (
    <div className="page-container">
      <div className="content">
        <h1>Contact Page</h1>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="social-links">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
