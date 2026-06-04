import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaWallet } from "react-icons/fa";

import "./TopBar.css";
import Menu from "./Menu";

const TopBar = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get("https://zerodha-clone-nwn2.onrender.com/balance", {
        withCredentials: true,
      })
      .then((res) => {
        setBalance(res.data.balance);
      });
  }, []);
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="balance">
          <FaWallet />
          <p className="balance-label">Balance:</p>
          <p className="balance-amount">₹{balance.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
