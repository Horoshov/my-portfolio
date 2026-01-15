import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css';
// 1. Импортируем компонент
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* 2. Подключаем аналитику рядом с основным приложением */}
    <Analytics />
  </React.StrictMode>,
)