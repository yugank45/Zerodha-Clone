import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Home from "./components/Home";

// 1. Enable credentials globally so cookies are sent with every request
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. Wrap the app in a logic that verifies the session
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

// 3. Optional: Add a simple check on startup if needed, 
// or let your Home component handle the /auth/verify request
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);