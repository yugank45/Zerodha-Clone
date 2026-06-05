import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      "https://zerodha-clone-nwn2.onrender.com/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );

    alert("Login Successful");

    window.location.href = "https://dashboard-delta-six-81.vercel.app";
  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="signup-page-wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;