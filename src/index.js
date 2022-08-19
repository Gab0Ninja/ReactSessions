import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Eventos/App';
import VariEstado from './VariEstado/app.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VariEstado />
  </React.StrictMode>
);
