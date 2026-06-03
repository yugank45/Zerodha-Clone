import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
              <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "5px" }}></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "120px",textDecoration: "none" }}>
              Learn More
              <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "5px" }}></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Badge"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appStoreBadge.svg" alt="App Store Badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
