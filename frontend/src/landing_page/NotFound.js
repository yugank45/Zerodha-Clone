import React from "react";

function NotFound() {
  return (
    <div>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1 className="mt-5" style={{ color: "red" }}>
            Page Not Found
          </h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
