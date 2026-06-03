import React, { useContext, useState } from "react";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const labels = watchlist.map((stock) => stock.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",

        data: watchlist.map((stock) => stock.price),

        backgroundColor: [
          "rgba(0, 200, 83, 0.75)", // emerald green
          "rgba(33, 150, 243, 0.75)", // premium blue
          "rgba(255, 193, 7, 0.75)", // gold
          "rgba(156, 39, 176, 0.75)", // royal purple
          "rgba(255, 87, 34, 0.75)", // vibrant orange
          "rgba(0, 188, 212, 0.75)", // cyan
          "rgba(233, 30, 99, 0.75)", // pink
          "rgba(63, 81, 181, 0.75)", // indigo
          "rgba(76, 175, 80, 0.75)", // soft green
          "rgba(121, 85, 72, 0.75)", // mocha brown
        ],

        borderColor: [
          "rgba(0, 200, 83, 1)",
          "rgba(33, 150, 243, 1)",
          "rgba(255, 193, 7, 1)",
          "rgba(156, 39, 176, 1)",
          "rgba(255, 87, 34, 1)",
          "rgba(0, 188, 212, 1)",
          "rgba(233, 30, 99, 1)",
          "rgba(63, 81, 181, 1)",
          "rgba(76, 175, 80, 1)",
          "rgba(121, 85, 72, 1)",
        ],

        

        hoverBackgroundColor: [
          "rgba(0, 230, 118, 0.95)",
          "rgba(66, 165, 245, 0.95)",
          "rgba(255, 214, 10, 0.95)",
          "rgba(171, 71, 188, 0.95)",
          "rgba(255, 112, 67, 0.95)",
          "rgba(38, 198, 218, 0.95)",
          "rgba(236, 64, 122, 0.95)",
          "rgba(92, 107, 192, 0.95)",
          "rgba(102, 187, 106, 0.95)",
          "rgba(141, 110, 99, 0.95)",
        ],
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem key={index} stock={stock} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListItem, setShowWatchListItem] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchListItem(true);
  };
  const handleMouseLeave = () => {
    setShowWatchListItem(false);
  };
  return (
    <li
      className="list-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListItem && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B) "
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>
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
          title="Analysis (A)"
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
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
