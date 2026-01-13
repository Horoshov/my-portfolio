import React from 'react';

const ContactForm = () => {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-grid">
        <div className="form-group">
          <label className="label">Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        
        <div className="form-group">
          <label className="label">Email Address</label>
          <input type="email" placeholder="john@example.com" />
        </div>

        <div className="form-group full-width">
          <label className="label">Subject</label>
          <input type="text" placeholder="Project Inquiry" />
        </div>

        <div className="form-group full-width">
          <label className="label">Message</label>
          <textarea rows="4" placeholder="How can I help you?"></textarea>
        </div>
      </div>

      <button type="submit" className="submit-btn">
        <span>Send Message</span>
        <div className="btn-arrow">→</div>
      </button>
    </form>
  );
};

export default ContactForm;