import React from 'react';
import './index.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Pdf from './components/pdf';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pdf" element={<Pdf />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

