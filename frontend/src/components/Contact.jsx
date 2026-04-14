import React from 'react';
import './Contact.css';
import SectionHeader from './SectionHeader';
import { FaDiscord, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <SectionHeader title="contacts" />

        <div className="contact-content-exact">

          {/* Left Side: Text */}
          <div className="contact-text-exact">
            <p>
              I'm interested in freelance opportunities. However,
              if you have other request or question, don't
              hesitate to contact me
            </p>
          </div>

          {/* Right Side: Box */}
          <div className="contact-box-exact">
            <h3 className="box-title-exact">Message me here</h3>

            <div className="box-items-exact">
              <div className="box-item">
                <FaLinkedin className="icon-exact" />
                <span>saloni-pawar</span>
                {/* Replaced Discord with LinkedIn as it's more common for portfolios, 
                     but style is identical to image item */}
              </div>

              <div className="box-item">
                <FaEnvelope className="icon-exact" />
                <span>saloni@example.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
