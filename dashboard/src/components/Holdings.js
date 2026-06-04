
import React, { useEffect, useState } from "react";
import axios from "axios";

import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // ================= FETCH HOLDINGS =================

  useEffect(() => {
    axios
      .get("http://localhost:5000/allHoldings", {
        withCredentials: true,
      })
      .then((response) => {
        setAllHoldings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching holdings:", error);
      });
  }, []);

  // ================= CHART DATA =================

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,

    datasets: [
      {
        label: "Current Value",

        data: allHoldings.map(
          (stock) => stock.price * stock.qty
        ),

        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      {
        label: "Investment",

        data: allHoldings.map(
          (stock) => stock.avg * stock.qty
        ),

        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // ================= CALCULATIONS =================

  const totalInvestment = allHoldings.reduce(
    (total, stock) =>
      total + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (total, stock) =>
      total + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercentage =
    totalInvestment > 0
      ? ((pnl / totalInvestment) * 100).toFixed(2)
      : 0;

  const pnlClass = pnl >= 0 ? "profit" : "loss";

  return (
    <>
      <h3 className="title">
        Holdings ({allHoldings.length})
      </h3>

      {/* ================= TABLE ================= */}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue =
                stock.price * stock.qty;

              const investment =
                stock.avg * stock.qty;

              const profitLoss =
                currValue - investment;

              const isProfit = profitLoss >= 0;

              const profClass = isProfit
                ? "profit"
                : "loss";

              const dayClass = stock.day
                ?.toString()
                .includes("-")
                ? "loss"
                : "profit";

              return (
                <tr key={stock._id || index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>
                    ₹
                    {Number(stock.avg || 0).toFixed(
                      2
                    )}
                  </td>

                  <td>
                    ₹
                    {Number(stock.price || 0).toFixed(
                      2
                    )}
                  </td>

                  <td className={profClass}>
                    ₹{currValue.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    ₹{profitLoss.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    {stock.net || "0%"}
                  </td>

                  <td className={dayClass}>
                    {stock.day || "0%"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= SUMMARY ================= */}

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
          <h5 className={pnlClass}>
            ₹{pnl.toFixed(2)} (
            {pnlPercentage}%)
          </h5>

          <p>P&L</p>
        </div>
      </div>

      {/* ================= GRAPH ================= */}

      {allHoldings.length > 0 && (
        <VerticalGraph data={data} />
      )}
    </>
  );
};

export default Holdings;

