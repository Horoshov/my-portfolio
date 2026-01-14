const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '8px',
    // Устанавливаем четкий цвет рамки по умолчанию
    border: '1px solid rgba(122, 122, 122, 0.2)', 
    backgroundColor: 'transparent',
    color: 'var(--text-color)',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-main)'
  };

  // В каждом input добавьте эти обработчики, чтобы цвет не «гулял»:
  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--text-color)';
    e.target.style.boxShadow = 'none'; // Убирает синее свечение в Chrome/Safari
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(122, 122, 122, 0.2)';
  };