import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the Privacy Policy");
      return;
    }
    console.log('Данные к отправке:', formData);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(122, 122, 122, 0.2)',
    backgroundColor: 'transparent',
    color: 'var(--text-color)',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'var(--font-main)'
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Сетка имен */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div className="form-group" style={{ border: 'none', padding: 0 }}>
          <label className="label">First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'}
          />
        </div>
        <div className="form-group" style={{ border: 'none', padding: 0 }}>
          <label className="label">Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'}
          />
        </div>
      </div>

      {/* Сетка контактов */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div className="form-group" style={{ border: 'none', padding: 0 }}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'}
          />
        </div>
        <div className="form-group" style={{ border: 'none', padding: 0 }}>
          <label className="label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'}
          />
        </div>
      </div>

      {/* Сообщение */}
      <div className="form-group full-width" style={{ border: 'none', padding: 0, marginBottom: '20px' }}>
        <label className="label">Message</label>
        <textarea
          name="message"
          placeholder="Type your message here"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'}
        ></textarea>
      </div>

      {/* Согласие */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
          style={{ width: '18px', height: '18px', accentColor: 'var(--text-color)', cursor: 'pointer' }}
        />
        <label htmlFor="agree" style={{ fontSize: '14px', color: 'var(--gray-text)', cursor: 'pointer' }}>
          By reaching out to us, you agree to our <span style={{ textDecoration: 'underline', color: 'var(--text-color)' }}>Privacy Policy</span>
        </label>
      </div>

      {/* Кнопка: ширина 100% и уменьшенный на 25% вертикальный padding (с 24px до 18px) */}
      <button 
        type="submit" 
        className="submit-btn" 
        style={{ 
          width: '100%', 
          paddingTop: '18px', 
          paddingBottom: '18px',
          justifyContent: 'center' 
        }}
      >
        <span className="btn-text">Send your message</span>
        <span className="btn-arrow">→</span>
      </button>
    </form>
  );
};

export default ContactForm;