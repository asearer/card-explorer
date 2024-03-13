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
          <p>Email: amsearer84@gmail.com</p>
          
        </div>
        
      </div>
    </div>
  );
};

export default ContactComponent;
