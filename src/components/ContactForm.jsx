import React from 'react';

const ContactForm = () => {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-grid">
        <div className="form-group">
          <label className="label">Name</label>
          <input type="text" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label className="label">Email Address</label>
          <input type="email" placeholder="email@example.com" />
        </div>

        <div className="form-group">
          <label className="label">Budget</label>
          <input type="text" placeholder="Select a Budget" />
        </div>

        <div className="form-group">
          <label className="label">Subject</label>
          <input type="text" placeholder="How can I help?" />
        </div>

        <div className="form-group full-width">
          <label className="label">Message</label>
          <textarea rows="1" placeholder="Project Description"></textarea>
        </div>
      </div>

      <button type="submit" className="submit-btn">
        <span className="btn-text">Send Inquiry</span>
        <div className="btn-arrow">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L16 6L11 11M1 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;