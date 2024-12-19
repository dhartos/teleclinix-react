import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
