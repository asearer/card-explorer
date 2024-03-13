import React from 'react';
import './App.css'; // Import the main CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
          <h2>Follow On Social:</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
