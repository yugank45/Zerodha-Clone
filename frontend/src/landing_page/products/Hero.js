import React from 'react';

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row mt-5 text-center p-3">
      <h1>Zerodha Products</h1>
      <h3 className="mt-2 text-muted fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3 mb-5">Check out our <a href='' className='mt-3' style={{ textDecoration: "none" }}>investment offerings <i className="fa-solid fa-arrow-right-long"></i></a></p>
      </div>
    </div>
    );
}

export default Hero;