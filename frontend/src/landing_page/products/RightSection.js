import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>
            {productDescription}
          </p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More
            <i
              className="fa-solid fa-arrow-right-long"
              style={{ marginLeft: "5px" }}
            ></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
