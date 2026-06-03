import React from "react";

function Hero() {
  return (
    <div className="container  mb-5">
      <div className="row mt-5 text-center p-3 border-bottom">
        <h1 className="fs-2">Charges</h1>
        <h3 className="mt-2 text-muted fs-5 mb-5">
          List of all charges and taxes
        </h3>
      </div>

      <div className="row p-5 mt-2 text-center">
        <div className="col-4 ">
          <img
            src="media/images/pricingEquity.svg"
            alt="Pricing Equity"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h1 className="fs-3 mb-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4  text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="Pricing Equity"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h1 className="fs-3 mb-3">Free intraday trades</h1>
          <p className="text-muted">
            All commodity delivery investments (MCX, NCDEX), are absolutely free
            — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Pricing Equity"
            style={{ width: "70%" }}
            className="mb-4"
          />
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      

      {/* <section>
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Charges</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account Opening Fee</td>
              <td>₹ 0</td>
            </tr>
            <tr>
              <td>Account Opening Fee</td>
              <td>₹ 0</td>
            </tr>
            <tr>
              <td>Account Opening Fee</td>
              <td>₹ 0</td>
            </tr>
            <tr>
              <td>Account Opening Fee</td>
              <td>₹ 0</td>
            </tr>
          </tbody>

        </table>
      </section> */}

     
      

     
    </div>
  );
}

export default Hero;
