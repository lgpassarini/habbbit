import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserStorage } from './context/UserStorage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
