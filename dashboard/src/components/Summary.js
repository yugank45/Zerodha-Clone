import React, { useEffect, useState } from "react";
import axios from "axios";

import { GroupedBarChart } from "./GroupedBarChart";

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allHoldings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAllHoldings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error);
      });
  }, []);

  // Labels
  const labels = allHoldings.map((stock) => stock.name);

  // Chart Data
  const data = {
    labels,

    datasets: [
      {
        label: "Current Value",

        data: allHoldings.map((stock) => stock.price * stock.qty),

        backgroundColor: "rgb(255, 99, 132)",

        stack: "Stack 0",
      },

      {
        label: "Investment",

        data: allHoldings.map((stock) => stock.avg * stock.qty),

        backgroundColor: "rgb(75, 192, 192)",

        stack: "Stack 0",
      },

      {
        label: "Profit / Loss",

        data: allHoldings.map(
          (stock) => stock.price * stock.qty - stock.avg * stock.qty,
        ),

        backgroundColor: "rgb(53, 162, 235)",

        stack: "Stack 1",
      },
    ],
  };

  // Portfolio Calculations
  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0,
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : 0;

  return (
    <>
      {/* Username */}
      <div className="username">
        <h6>Hi, User!</h6>

        <hr className="divider" />
      </div>

      {/* Equity */}
      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹3.74k</h3>

            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0</span>
            </p>

            <p>
              Opening balance <span>₹3.74k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Holdings */}
      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)}{" "}
              <small>
                {pnl >= 0 ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment <span>₹{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      {/* Chart */}
      <GroupedBarChart data={data} />
    </>
  );
};

export default Summary;
