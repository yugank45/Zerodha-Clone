import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3  mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3 "
        style={{ lineHeight: "1.6", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Yugank Image.png"
            alt="Yugank Image"
            className="img-fluid rounded-circle mb-3 "
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />

          <h4 className="fs-5 mb-3">Yugank Singh</h4>
          <p className="text-muted ">Founder, CEO</p>
        </div>
        <div className="col-6 p-3 text-muted">
          <p>
            I am a full-stack web developer passionate about building modern and
            scalable web applications using the MERN stack. I enjoy creating
            real-world projects like trading dashboards, analytics systems, and
            fintech-inspired platforms that replicate production-level
            workflows.
          </p>

          <p>
            I have built projects such as a Zerodha-inspired trading dashboard
            featuring order management, holdings tracking, and real-time market
            data integration. My focus is on clean UI design, secure
            authentication using JWT, and efficient backend API development.
          </p>

          <p>
            I am continuously improving my skills in full-stack development,
            system design, and deployment practices, with a goal of building
            industry-ready software products.
          </p>

          <p>
            Connect on{" "}
            <a href="https://your-portfolio.vercel.app" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="https://tradingqnA.com" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="https://twitter.com" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
