import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
    botcheck: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const MAX_MESSAGE_LENGTH = 1000;

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = 
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    isEmailValid(formData.email) &&
    formData.message.trim() !== '' &&
    formData.agree;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botcheck) {
      setStatus('success');
      return;
    }
    if (!formData.agree) {
      alert("Пожалуйста, согласитесь с политикой конфиденциальности");
      return;
    }
    if (!isFormValid || status === 'sending') return;
    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8f991255-a937-483b-a1b2-91729ad9a02d",
          subject: "Новое сообщение с сайта-портфолио (Horoshov)",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Не указан',
          message: formData.message,
          botcheck: formData.botcheck
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', agree: false, botcheck: false });
        setTimeout(() => setStatus('idle'), 4000);
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
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-main)',
  };

  const handleFocus = (e) => { e.target.style.borderColor = 'var(--text-color)'; };
  const handleBlur = (e) => { e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)'; };

  const remainingChars = MAX_MESSAGE_LENGTH - formData.message.length;
  const isNearLimit = remainingChars <= 100;
  const isAtLimit = remainingChars === 0;

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <input 
        type="checkbox" 
        name="botcheck" 
        checked={formData.botcheck} 
        onChange={handleChange} 
        style={{ display: 'none' }} 
        tabIndex={-1} 
        autoComplete="off" 
        aria-hidden="true" 
      />

      <div className="form-grid">
        <input 
          type="text" 
          name="firstName" 
          placeholder="First name" 
          aria-label="First name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
          maxLength={60}
          style={inputStyle} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last name" 
          aria-label="Last name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
          maxLength={60}
          style={inputStyle} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
        />
      </div>

      <div className="form-grid">
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          aria-label="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          maxLength={80}
          style={inputStyle} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          aria-label="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          maxLength={20}
          style={inputStyle} 
          onFocus={handleFocus} 
          onBlur={handleBlur} 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <textarea 
          name="message" 
          placeholder="Type your message here" 
          aria-label="Message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          maxLength={MAX_MESSAGE_LENGTH}
          aria-describedby="char-counter"
          style={{ ...inputStyle, resize: 'none' }} 
          onFocus={handleFocus} 
          onBlur={handleBlur}
        ></textarea>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
          <span 
            id="char-counter" 
            aria-live="polite"
            style={{ 
              fontSize: '12px', 
              color: isAtLimit ? '#ef4444' : isNearLimit ? '#f59e0b' : 'var(--gray-text)',
              transition: 'color 0.3s ease'
            }}
          >
            Осталось: {remainingChars} / {MAX_MESSAGE_LENGTH}
          </span>
        </div>
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
        disabled={!isFormValid || status === 'sending' || status === 'success'}
        style={{ 
          width: '100%', 
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100px',
          cursor: (!isFormValid || status === 'sending' || status === 'success') ? 'not-allowed' : 'pointer',
          backgroundColor: status === 'success' ? 'transparent' : 'var(--text-color)',
          color: status === 'success' ? 'var(--text-color)' : 'var(--bg-color)',
          border: `1px solid ${status === 'success' ? 'var(--text-color)' : 'transparent'}`,
          opacity: (!isFormValid && status === 'idle') ? 0.6 : 1,
          transition: 'opacity 0.3s ease, background-color 0.3s ease'
        }}
      >
        <span style={{ fontWeight: '700', fontSize: '16px' }}>
          {status === 'idle' && 'Отправить'}
          {status === 'sending' && 'Sending...'}
          {status === 'success' && 'Message sent'}
          {status === 'error' && 'Try again'}
        </span>
      </button>

      {status === 'error' && (
        <p role="alert" style={{ color: '#ef4444', fontSize: '14px', textAlign: 'center', marginTop: '12px' }}>
          Не удалось отправить сообщение. Пожалуйста, попробуйте ещё раз или свяжитесь с нами напрямую.
        </p>
      )}
      {status === 'success' && (
        <p role="status" style={{ color: 'var(--text-color)', fontSize: '14px', textAlign: 'center', marginTop: '12px' }}>
          Сообщение успешно отправлено! Спасибо за обращение.
        </p>
      )}
    </form>
  );
};

export default ContactForm;