import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// LANDING PAGES
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

// AUTH PAGES
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";

// DASHBOARD


// COMPONENTS
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

const token = localStorage.getItem("token");

const AppLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* DASHBOARD ROUTE */}

        {/* <Route
          path="/dashboard/*"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        /> */}

        {/* LANDING PAGE ROUTES */}
        <Route
          path="*"
          element={
            <>
              <Navbar />

              <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/product" element={<ProductPage />} />

                <Route path="/pricing" element={<PricingPage />} />

                <Route path="/support" element={<SupportPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
);
