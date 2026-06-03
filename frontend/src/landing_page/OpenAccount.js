import React from "react";

function OpenAccount() {
  return (
    <div>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1 className="mt-5">Open Your Zerodha Account</h1>
          <p className="fs-4 mt-3 mb-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary p-2 fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
