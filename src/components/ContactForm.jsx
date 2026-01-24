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
      alert("Please agree to the Privacy Policy");
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', agree: false });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
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
    boxShadow: 'none'
  };

  const handleFocus = (e) => { e.target.style.borderColor = 'var(--text-color)'; };
  const handleBlur = (e) => { e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'; };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Сетка имен */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <input type="text" name="firstName" placeholder="First name" aria-label="First name" value={formData.firstName} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
        <input type="text" name="lastName" placeholder="Last name" aria-label="Last name" value={formData.lastName} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      {/* Сетка контактов */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <input type="email" name="email" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
        <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      {/* Сообщение */}
      <div style={{ marginBottom: '20px' }}>
        <textarea name="message" placeholder="Type your message here" aria-label="Message" rows="5" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'none' }} onFocus={handleFocus} onBlur={handleBlur}></textarea>
      </div>

      {/* Чекбокс согласия */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
        <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} required style={{ width: '18px', height: '18px', accentColor: 'var(--text-color)', cursor: 'pointer' }} />
        <label htmlFor="agree" style={{ fontSize: '14px', color: 'var(--gray-text)', cursor: 'pointer' }}>
          By reaching out to us, you agree to our <span style={{ textDecoration: 'underline', color: 'var(--text-color)' }}>Privacy Policy</span>
        </label>
      </div>

      <button 
        type="submit" 
        className="submit-btn" 
        disabled={status === 'sending' || status === 'success'}
        style={{ 
          width: '100%', 
          paddingTop: '18px', 
          paddingBottom: '18px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100px',
          transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          cursor: (status === 'sending' || status === 'success') ? 'not-allowed' : 'pointer',
          backgroundColor: status === 'success' ? 'transparent' : 'var(--text-color)',
          color: status === 'success' ? 'var(--text-color)' : 'var(--bg-color)',
          border: `1px solid ${status === 'success' ? 'var(--text-color)' : 'transparent'}`,
          opacity: status === 'sending' ? 0.7 : 1
        }}
      >
        <span style={{ fontWeight: '700', fontSize: '16px' }}>
          {status === 'idle' && 'Send your message'}
          {status === 'sending' && 'Sending...'}
          {status === 'success' && 'Message sended'}
          {status === 'error' && 'Try again'}
        </span>
        
        {status === 'idle' && (
          <span style={{ fontSize: '20px', marginLeft: '12px' }}>→</span>
        )}
      </button>

      {status === 'error' && (
        <p style={{ color: 'red', fontSize: '12px', marginTop: '10px', textAlign: 'center' }}>
          Oops! Something went wrong.
        </p>
      )}
    </form>
  );
};

export default ContactForm;