import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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
      await axios.post("https://zerodha-clone-nwn2.onrender.com/auth/signup", formData);
      alert("Signup Successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      {/* Zerodha Products Section */}
      <div className="container mb-5">
        <div className="row mt-5 text-center p-3">
          <h1 className="fs-2">Open a free demat and trading account online</h1>
          <h3
            className="mt-2 text-muted fs-5 mt-3"
            style={{ fontWeight: "350" }}
          >
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h3>
        </div>
        <div className="row ">
          <div className="col-md-6 text-center p-3">
            <img src="media/images/account_open.svg" alt="Account Open" />
          </div>
          <div className="col-md-6 text-center p-3">
            <h1 className="fs-4 " style={{ textAlign: "left" }}>
              Signup now
            </h1>
            <p className="text-muted fs-6 mt-3" style={{ textAlign: "left" }}>
              Or track your existing application
            </p>
            <div className="signup-page-wrapper">
              <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                />
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

                <button type="submit">Signup</button>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="auth-container"></div>
    </>
  );
};

export default Signup;
