import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Info from "./pages/Info/Info";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/apropos" element={<Info></Info>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);