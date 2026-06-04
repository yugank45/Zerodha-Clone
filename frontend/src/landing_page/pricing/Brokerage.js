import React from 'react';

function Brokerage() {
  return ( 
    <div class="container my-5">
      <h3 className="fs-5 text-center " style={{ fontWeight: "500px" }}>
        <a href="https://zerodha.com/brokerage-calculator" style={{ textDecoration: "none" }}>
          Calculate your costs{" "}
        </a>
        upfront using our brokerage calculator
      </h3>
      <br />
        <h3 className=" fs-4 mb-4">Charges for account opening</h3>
        <table class="table table-bordered align-middle">
          <thead>
            <tr>
              <th className="text-muted">Type of account</th>
              <th className="text-muted">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Individual account</td>
              <td>
                <span
                  class="badge  px-3 py-2"
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                >
                  FREE
                </span>
              </td>
            </tr>

            <tr>
              <td>Minor account</td>
              <td>
                <span
                  class="badge  px-3 py-2"
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                >
                  FREE
                </span>
              </td>
            </tr>

            <tr>
              <td>NRI account</td>
              <td>₹ 500</td>
            </tr>

            <tr>
              <td>HUF account</td>
              <td>
                <span
                  class="badge  px-3 py-2"
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                >
                  FREE
                </span>
                <span class="ms-1">(online) / ₹ 500 (offline)</span>
              </td>
            </tr>

            <tr>
              <td>Partnership, LLP, and Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
    
    <div class="container my-5">
        <h3 className=" fs-4 mb-4">Demat AMC (Annual Maintenance Charge)</h3>
        <table class="table table-bordered align-middle">
          <thead>
            <tr>
              <th className="text-muted">Value of holdings</th>
              <th className="text-muted"> AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span
                  class="badge  px-3 py-2"
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                >
                  FREE
                </span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    
     <div className="row   ">
        <h4 className=" fs-4  text-muted mb-5">Charges explained</h4>
        <div className="col-6">
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Securities/Commodities transaction tax
          </h3>
          <p className="text-muted " style={{ fontSize: "12px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy <br />
            and sell sides when trading equity delivery. Charged only on selling
            side when trading
            <br /> intraday or on F&O.
          </p>
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Transaction/Turnover Charges
          </h3>
          <p className="text-muted " style={{ fontSize: "12px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            <br /> BSE has revised transaction charges in XC, XD, XT, Z and ZP
            groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have
            been merged into a new group X w.e.f 01.12.2017)
            <br />
            <br /> BSE has revised transaction charges in SS and ST groups to
            ₹1,00,000 per crore of gross turnover. <br />
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br />
            <br /> BSE has revised transaction charges in M, MT, TS and MS
            groups to ₹275 per crore of gross turnover.
          </p>
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Call & trade
          </h3>
          <p className="text-muted " style={{ fontSize: "14px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Stamp charges
          </h3>
          <p className="text-muted " style={{ fontSize: "14px" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
        </div>
        <div className="col-6 ">
           <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Securities/Commodities transaction tax
          </h3>
          <p className="text-muted " style={{ fontSize: "12px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy <br />
            and sell sides when trading equity delivery. Charged only on selling
            side when trading
            <br /> intraday or on F&O.
          </p>
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Transaction/Turnover Charges
          </h3>
          <p className="text-muted " style={{ fontSize: "12px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            <br /> BSE has revised transaction charges in XC, XD, XT, Z and ZP
            groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have
            been merged into a new group X w.e.f 01.12.2017)
            <br />
            <br /> BSE has revised transaction charges in SS and ST groups to
            ₹1,00,000 per crore of gross turnover. <br />
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br />
            <br /> BSE has revised transaction charges in M, MT, TS and MS
            groups to ₹275 per crore of gross turnover.
          </p>
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Call & trade
          </h3>
          <p className="text-muted " style={{ fontSize: "14px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h3 className="fs-5 mb-3" style={{ fontWeight: "380" }}>
            Stamp charges
          </h3>
          <p className="text-muted " style={{ fontSize: "14px" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
        </div>
      </div>
    </div>
    
   );
}

export default Brokerage;