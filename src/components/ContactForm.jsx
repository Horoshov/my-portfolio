import React, { useState } from 'react';

const ContactForm = () => {
  // Добавляем статус для управления кнопкой
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
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
        // Через 5 секунд возвращаем кнопку в обычный вид
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
    borderRadius: '8px', // Добавил радиус (был пустой)
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

      {/* ОБНОВЛЕННАЯ КНОПКА */}
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
          gap: '12px',
          borderRadius: '100px',
          transition: 'all 0.4s ease',
          cursor: (status === 'sending' || status === 'success') ? 'not-allowed' : 'pointer',
          // Инверсия стиля при успехе
          backgroundColor: status === 'success' ? 'transparent' : 'var(--text-color)',
          color: status === 'success' ? 'var(--text-color)' : 'var(--bg-color)',
          border: status === 'success' ? '2px solid var(--text-color)' : 'none',
          opacity: status === 'sending' ? 0.7 : 1
        }}
      >
        <span className="btn-text" style={{ fontWeight: '700' }}>
          {status === 'idle' && 'Send your message'}
          {status === 'sending' && 'Sending...'}
          {status === 'success' && 'Message sent!'}
          {status === 'error' && 'Error, try again'}
        </span>
        
        <span style={{ fontSize: '20px' }}>
          {status === 'idle' && <span className="btn-arrow">→</span>}
          {status === 'success' && <span>✓</span>}
        </span>
      </button>
    </form>
  );
};

export default ContactForm;