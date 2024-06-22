import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './agendar.png';
import Favicon from 'react-favicon';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={logo} />
    <App />
  </React.StrictMode>
);
reportWebVitals();
