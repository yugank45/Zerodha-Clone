import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3  mt-5 border-top">
        <h1 className="text-center ">
          People
        </h1>
      </div>
      <div className="row p-3 " style={{ lineHeight: "1.6", fontSize: "1.2em" }}>
        <div className="col-6 p-3 text-center">
          <img src="media/images/Yugank Image.png" alt="Yugank Image" className="img-fluid rounded-circle mb-3 " style={{ width: "250px", height: "250px", objectFit: "cover" }} />
          
          <h4 className="fs-5 mb-3">Yugank Singh</h4>
          <p className="text-muted ">
            Founder, CEO
          </p>
        </div>
        <div className="col-6 p-3 text-muted">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href ='' style={{ textDecoration: "none" }}>Homepage</a> / <a href ='' style={{ textDecoration: "none" }}>TradingQnA</a> / <a href ='' style={{ textDecoration: "none" }}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
