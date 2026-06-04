import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-nwn2.onrender.com/allOrders", {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      })

      .then((response) => {
        console.log(
          "Orders:",
          response.data
        );

        setAllOrders(response.data);

        setLoading(false);
      })

      .catch((error) => {
        console.error(
          "Error fetching orders:",
          error
        );

        setLoading(false);
      });
  }, []);

  // LOADING
  if (loading) {
    return (
      <h3 className="title">
        Loading Orders...
      </h3>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">
        Orders ({allOrders.length})
      </h3>

      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>
            You haven't placed any
            orders today
          </p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>
              {allOrders.map(
                (order, index) => (
                  <tr key={index}>
                    <td>
                      {order.name ||
                        "N/A"}
                    </td>

                    <td>
                      {order.qty || 0}
                    </td>

                    <td>
                      ₹
                      {(
                        order.price || 0
                      ).toFixed(2)}
                    </td>

                    <td
                      className={
                        order.mode ===
                        "BUY"
                          ? "profit"
                          : "loss"
                      }
                    >
                      {order.mode}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;