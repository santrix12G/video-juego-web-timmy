import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Registro from "./Components/Registro/Registro";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registro" element={<Registro/>} />
      {/* <Route path="/registro" element={<Registro />} /> */}
    </Routes>
  </BrowserRouter>
);
