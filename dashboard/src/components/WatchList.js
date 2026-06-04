// WatchList.js

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { DoughnutChart } from "./DoughnoutChart";

import { Tooltip, Grow } from "@mui/material";

import GeneralContext from "./GeneralContext";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  const [liveStocks, setLiveStocks] = useState([]);

  // FETCH LIVE STOCKS
  useEffect(() => {
    axios
      .get("http://localhost:5000/liveStocks")
      .then((response) => {
        console.log(response.data);

        setLiveStocks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const labels = liveStocks.map((stock) => stock.name);

  const data = {
    labels,

    datasets: [
      {
        label: "Price",

        data: liveStocks.map((stock) => stock.price),

        backgroundColor: [
          "rgba(0, 200, 83, 0.75)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(255, 193, 7, 0.75)",
          "rgba(156, 39, 176, 0.75)",
          "rgba(255, 87, 34, 0.75)",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search stocks..."
          className="search"
        />

        <span className="counts">{liveStocks.length} / 50</span>
      </div>

      <ul className="list">
        {liveStocks.map((stock, index) => (
          <WatchListItem key={index} stock={stock} />
        ))}
      </ul>

      {liveStocks.length > 0 && <DoughnutChart data={data} />}
    </div>
  );
};

export default WatchList;

// ======================================================

const WatchListItem = ({ stock }) => {
  const [showWatchListItem, setShowWatchListItem] = useState(false);

  const isDown = stock.change < 0;

  return (
    <li
      className="list-item"
      onMouseEnter={() => setShowWatchListItem(true)}
      onMouseLeave={() => setShowWatchListItem(false)}
    >
      <div className="item">
        <p className={isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">
            {stock.change.toFixed(2)}%
          </span>

          {isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            ₹{stock.price}
          </span>
        </div>
      </div>

      {showWatchListItem && (
        <WatchListActions uid={stock.name} />
      )}
    </li>
  );
};

// ======================================================

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={() => generalContext.openBuyWindow(uid)}
          >
            Buy
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="sell"
            onClick={() => generalContext.openSellWindow(uid)}
          >
            Sell
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="Analysis"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};