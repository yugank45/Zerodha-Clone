require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const YahooFinance = require("yahoo-finance2").default;

const yahooFinance = new YahooFinance();



const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// ================= MIDDLEWARE =================

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// ================= ROUTES =================

app.use("/auth", authRoutes);

// ================= DATABASE =================

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

// ======================================================
// ================= LIVE STOCK API =====================
// ======================================================

app.get("/liveStocks", async (req, res) => {
  try {
    const symbols = [
      "RELIANCE.NS",
      "TCS.NS",
      "INFY.NS",
      "HDFCBANK.NS",
      "SBIN.NS",
    ];

    const stockData = await Promise.all(
      symbols.map(async (symbol) => {
        const result = await yahooFinance.quote(symbol);

        return {
          name: symbol.replace(".NS", ""),
          price: result.regularMarketPrice,
          change: result.regularMarketChangePercent,
        };
      }),
    );

    res.json(stockData);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching live stocks",
    });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// ======================================================
// =================== HOLDINGS =========================
// ======================================================
app.get("/allHoldings", authMiddleware, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});

  res.status(200).json(allHoldings);
});

// ======================================================
// =================== POSITIONS ========================
// ======================================================

app.get("/allPositions", authMiddleware, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});

    res.status(200).json(allPositions);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching positions",
    });
  }
});

// ======================================================
// ================= LIVE STOCK DATA ====================
// ======================================================

// ======================================================
// ==================== ORDERS ==========================
// ======================================================

app.get("/allOrders", authMiddleware, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({
      userId: req.user.id,
    });

    res.status(200).json(allOrders);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching orders",
    });
  }
});

// ======================================================
// ==================== BALANCE =========================
// ======================================================

app.get("/balance", authMiddleware, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      balance: user.balance,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching balance",
    });
  }
});

// ======================================================
// ==================== NEW ORDER =======================
// ======================================================

app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // ================= VALIDATION =================

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const quantity = Number(qty);
    const stockPrice = Number(price);

    if (quantity <= 0 || stockPrice <= 0) {
      return res.status(400).json({
        message: "Invalid quantity or price",
      });
    }

    // ================= FIND USER =================

    const user = await UserModel.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const totalAmount = quantity * stockPrice;

    // ==================================================
    // ===================== BUY ========================
    // ==================================================

    if (mode === "BUY") {
      // Check balance

      if (user.balance < totalAmount) {
        return res.status(400).json({
          message: "Insufficient balance",
        });
      }

      // Deduct balance

      user.balance -= totalAmount;

      await user.save();

      // Find holding

      let holding = await HoldingsModel.findOne({
        userId: req.user.id,
        name,
      });

      // If holding exists

      if (holding) {
        const totalQty = holding.qty + quantity;

        holding.avg =
          (holding.avg * holding.qty + stockPrice * quantity) / totalQty;

        holding.qty = totalQty;

        holding.price = stockPrice;

        await holding.save();
      }

      // Create new holding
      else {
        const newHolding = new HoldingsModel({
          userId: req.user.id,
          name,
          qty: quantity,
          avg: stockPrice,
          price: stockPrice,
          net: "0%",
          day: "0%",
        });

        await newHolding.save();
      }
    }

    // ==================================================
    // ===================== SELL =======================
    // ==================================================
    else if (mode === "SELL") {
      let holding = await HoldingsModel.findOne({
        userId: req.user.id,
        name,
      });

      if (!holding) {
        return res.status(400).json({
          message: "Stock not found in holdings",
        });
      }

      if (holding.qty < quantity) {
        return res.status(400).json({
          message: "Not enough quantity to sell",
        });
      }

      // Add balance back

      user.balance += totalAmount;

      await user.save();

      // Reduce quantity

      holding.qty -= quantity;

      // Delete holding if qty becomes 0

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({
          _id: holding._id,
        });
      } else {
        await holding.save();
      }
    }

    // ==================================================
    // ================= SAVE ORDER =====================
    // ==================================================

    const newOrder = new OrdersModel({
      userId: req.user.id,
      name,
      qty: quantity,
      price: stockPrice,
      mode,
    });

    await newOrder.save();

    res.status(200).json({
      message: `${mode} order executed successfully`,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});
