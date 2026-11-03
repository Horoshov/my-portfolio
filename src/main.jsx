import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css';

// GitHub Pages SPA redirect handler
(function() {
  var l = window.location;
  if (l.search && l.search.includes('?p=')) {
    var queryParams = new URLSearchParams(l.search);
    var p = queryParams.get('p');
    if (p) {
      window.history.replaceState(null, null, p + l.hash);
    }
  }
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)