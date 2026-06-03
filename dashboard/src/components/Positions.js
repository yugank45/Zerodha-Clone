import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {

  axios
    .get(
      "http://localhost:5000/allPositions",
      {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    )

    .then((response) => {
      setAllPositions(response.data);
    })

    .catch((error) => {
      console.error(
        "Error fetching positions:",
        error
      );
    });

}, []);

  // Total Calculations
  const totalInvestment = allPositions.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = allPositions.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0
      ? ((totalPnL / totalInvestment) * 100).toFixed(2)
      : 0;

  return (
    <>
      {/* Title */}
      <h3 className="title">
        Positions ({allPositions.length})
      </h3>

      {/* Table */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&L</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const investment =
                stock.avg * stock.qty;

              const currValue =
                stock.price * stock.qty;

              const pnl =
                currValue - investment;

              const isProfit = pnl >= 0;

              const profClass = isProfit
                ? "profit"
                : "loss";

              const dayClass = stock.isLoss
                ? "loss"
                : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>

                  <td>
                    <strong>{stock.name}</strong>
                  </td>

                  <td>{stock.qty}</td>

                  <td>
                    ₹{stock.avg.toFixed(2)}
                  </td>

                  <td>
                    ₹{stock.price.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    ₹{currValue.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="row">

        <div className="col">
          <h5>
            ₹{totalInvestment.toFixed(2)}
          </h5>

          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>
            ₹{currentValue.toFixed(2)}
          </h5>

          <p>Current Value</p>
        </div>

        <div className="col">
          <h5
            className={
              totalPnL >= 0
                ? "profit"
                : "loss"
            }
          >
            ₹{totalPnL.toFixed(2)} (
            {totalPnL >= 0 ? "+" : ""}
            {pnlPercent}%)
          </h5>

          <p>Total P&L</p>
        </div>

      </div>
    </>
  );
};

export default Positions;