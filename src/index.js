import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Info from "./pages/Info/Info";
import Apartmentpage from "./pages/Info/Apartmentpage";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/apropos" element={<Info></Info>} />
      <Route path="/logement/:id" element={<Apartmentpage></Apartmentpage>} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);