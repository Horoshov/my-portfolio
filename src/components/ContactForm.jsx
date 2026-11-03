import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); 
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Пожалуйста, согласитесь с политикой конфиденциальности");
      return;
    }
    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Замените на ваш реальный ключ с https://web3forms.com
          subject: "Новое сообщение с сайта-портфолио (Horoshov)",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Не указан',
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', agree: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '8px',
    border: '1px solid rgba(122, 122, 122, 0.2)',
    backgroundColor: 'transparent',
    color: 'var(--text-color)',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-main)',
  };

  const handleFocus = (e) => { e.target.style.borderColor = 'var(--text-color)'; };
  const handleBlur = (e) => { e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'; };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-grid">
        <input type="text" name="firstName" placeholder="First name" aria-label="First name" value={formData.firstName} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
        <input type="text" name="lastName" placeholder="Last name" aria-label="Last name" value={formData.lastName} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      <div className="form-grid">
        <input type="email" name="email" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
        <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <textarea name="message" placeholder="Type your message here" aria-label="Message" rows="5" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'none' }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '30px' }}>
        <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} required style={{ width: '18px', height: '18px', marginTop: '3px', accentColor: 'var(--text-color)', cursor: 'pointer' }} />
        <label htmlFor="agree" style={{ fontSize: '14px', color: 'var(--gray-text)', cursor: 'pointer', lineHeight: '1.4' }}>
          By reaching out to us, you agree to our <span style={{ textDecoration: 'underline', color: 'var(--text-color)' }}>Privacy Policy</span>
        </label>
      </div>

      <button 
        type="submit" 
        className="submit-btn" 
        disabled={status === 'sending' || status === 'success'}
        style={{ 
          width: '100%', 
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100px',
          cursor: (status === 'sending' || status === 'success') ? 'not-allowed' : 'pointer',
          backgroundColor: status === 'success' ? 'transparent' : 'var(--text-color)',
          color: status === 'success' ? 'var(--text-color)' : 'var(--bg-color)',
          border: `1px solid ${status === 'success' ? 'var(--text-color)' : 'transparent'}`,
        }}
      >
        <span style={{ fontWeight: '700', fontSize: '16px' }}>
          {status === 'idle' && 'Send your message'}
          {status === 'sending' && 'Sending...'}
          {status === 'success' && 'Message sent'}
          {status === 'error' && 'Try again'}
        </span>
        {status === 'idle' && <span style={{ fontSize: '20px', marginLeft: '12px' }}>→</span>}
      </button>
    </form>
  );
};

export default ContactForm;