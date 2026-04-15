import React from 'react';
import './Contact.css';
import SectionHeader from './SectionHeader';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Using Formspree for simple email delivery
      const response = await fetch('https://formspree.io/f/xjgjkeqp', { // I will use a placeholder/explainer for the ID
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you! Your message has been sent directly to my email.',
          icon: 'success',
          confirmButtonColor: '#ff007f',
          background: '#121212',
          color: '#fff'
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later or email me directly at salonipawar294@gmail.com',
        icon: 'error',
        confirmButtonColor: '#ff007f',
        background: '#121212',
        color: '#fff'
      });
    }
  };
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <SectionHeader title="contacts" />

        <div className="contact-content">
          {/* Left Side: Text and Socials */}
          <div className="contact-info">
            <p className="contact-desc">
              If you have any inquiries, please feel free to reach out.
              You can contact me via email at <a href="mailto:salonipawar294@gmail.com" className="text-rani">salonipawar294@gmail.com</a>
            </p>

            <div className="contact-socials">
              <h4 className="font-mono">Follow me</h4>
              <div className="social-icons-wrapper">
                <a href="https://github.com/DevSaloni" target="_blank" rel="noreferrer" className="contact-social-btn"><FaGithub /></a>
                <a href="https://linkedin.com/in/saloni-pawar-630b23270" target="_blank" rel="noreferrer" className="contact-social-btn"><FaLinkedin /></a>
                <a href="https://x.com/SaloniPawa56635" target="_blank" rel="noreferrer" className="contact-social-btn"><FaTwitter /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
                <input type="text" name="Title" placeholder="Title" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
