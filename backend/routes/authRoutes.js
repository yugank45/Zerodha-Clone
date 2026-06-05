const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const UserModel = require("../model/UserModel");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

// Add to backend/routes/authRoutes.js
router.get("/verify", (req, res) => {
  console.log("Cookies received:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded user:", decoded);

    res.status(200).json({
      message: "Authorized",
      user: decoded,
    });
  } catch (err) {
    console.log("JWT Error:", err);

    res.status(403).json({
      message: "Invalid token",
    });
  }
});

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// LOGIN
// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set the cookie instead of sending the token in the JSON body
    res.cookie("token", token, {
      httpOnly: true, // Cannot be accessed by client-side JS
      secure: true, // Set to true if deploying with HTTPS
      sameSite: "none", // Allows sharing across localhost ports
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send back user info without the token
    res.status(200).json({
      message: "Login Successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true, // Must match your cookie settings above
  });
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
