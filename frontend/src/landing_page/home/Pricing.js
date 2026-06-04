import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="https://zerodha.com/pricing" className="mt-3" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col-6 border p-2">
              <h1 className = "my-4" >₹0</h1>
              <p>Free equity delivery and <br /> direct mutual funds</p>
            </div>

            <div className="col-6 border p-2">
              <h1 className = "my-4" >₹20</h1>
              <p>Intraday and F&O trades</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
