import React from 'react';
import './index.css';

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Pdf from './components/pdf';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pdf" element={<Pdf />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

