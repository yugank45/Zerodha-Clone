import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  // FETCH POSITIONS
  useEffect(() => {
    axios
      .get("http://localhost:5000/allPositions", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })

      .then((response) => {
        console.log("Positions:", response.data);

        setAllPositions(response.data);
      })

      .catch((error) => {
        console.error(
          "Error fetching positions:",
          error
        );
      });
  }, []);

  // TOTAL INVESTMENT
  const totalInvestment = allPositions.reduce(
    (acc, stock) =>
      acc + (stock.avg || 0) * (stock.qty || 0),
    0
  );

  // CURRENT VALUE
  const currentValue = allPositions.reduce(
    (acc, stock) =>
      acc + (stock.price || 0) * (stock.qty || 0),
    0
  );

  // TOTAL PNL
  const totalPnL = currentValue - totalInvestment;

  // PNL %
  const pnlPercent =
    totalInvestment > 0
      ? ((totalPnL / totalInvestment) * 100).toFixed(2)
      : 0;

  return (
    <>
      <h3 className="title">
        Positions ({allPositions.length})
      </h3>

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
                (stock.avg || 0) *
                (stock.qty || 0);

              const currValue =
                (stock.price || 0) *
                (stock.qty || 0);

              const pnl =
                currValue - investment;

              const isProfit = pnl >= 0;

              return (
                <tr key={index}>
                  <td>
                    {stock.product || "CNC"}
                  </td>

                  <td>
                    <strong>
                      {stock.name}
                    </strong>
                  </td>

                  <td>{stock.qty || 0}</td>

                  <td>
                    ₹
                    {(stock.avg || 0).toFixed(
                      2
                    )}
                  </td>

                  <td>
                    ₹
                    {(stock.price || 0).toFixed(
                      2
                    )}
                  </td>

                  <td
                    className={
                      isProfit
                        ? "profit"
                        : "loss"
                    }
                  >
                    ₹{currValue.toFixed(2)}
                  </td>

                  <td
                    className={
                      isProfit
                        ? "profit"
                        : "loss"
                    }
                  >
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td
                    className={
                      stock.day &&
                      stock.day.includes("-")
                        ? "loss"
                        : "profit"
                    }
                  >
                    {stock.day || "0%"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SUMMARY */}

      <div className="row">
        <div className="col">
          <h5>
            ₹
            {totalInvestment.toFixed(2)}
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