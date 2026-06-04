import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            className="form-control mt-4 mb-4"
            placeholder="Eg. how do i activate F&O segment?"
          />
          <a href="https://zerodha.com/support/track-account-opening" style={{ marginRight: "10px" }}>
            Track account opening
          </a>
          <a href="https://zerodha.com/support/track-segment-activation" style={{ marginRight: "10px" }}>
            Track segment activation
          </a>
          <a href="https://zerodha.com/support/intraday-margins" style={{ marginRight: "10px" }}>
            Intraday margins
          </a>
          <br />
          <a href="https://zerodha.com/support/kite-user-manual" style={{ marginRight: "10px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mb-2">
              <a href="https://zerodha.com/support/current-takeovers-and-delisting-january-2024">Current Takeovers and Delisting - January 2024 </a>
            </li>
            <li>
              <a href="https://zerodha.com/support/latest-intraday-leveraged-mis-co">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
