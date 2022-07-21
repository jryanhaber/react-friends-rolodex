import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crypto from './routes/money.routes';
import Concepts from './components/concepts.components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="crypto" element={<Crypto />} />
        <Route path="invoices" element={<App />} />
        <Route path="/friend-lists" element={<App />} />
        <Route path="/add-friends" element={<App />} />
        <Route path="/goals" element={<App />} />
        <Route path="/concepts" element={<Concepts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
