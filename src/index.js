import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// the root part
const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
