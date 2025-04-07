import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Globális stílusok importálása
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stílusok
import App from './App'; // Ellenőrizd, hogy ez az elérési út helyes-e

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);