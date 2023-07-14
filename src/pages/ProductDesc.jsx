import React from "react";
import "./ProductDesc.scss";
// import "./pages/ProductDesc.scss";

function ProductDesc() {
  return (
    <div>
      <div className="bgProDesc">
        <div className="el-left">
          {/* <img src="../assets/images/el-left.png" alt="el-left" /> */}
        </div>
        <div className="ellips">
          {/* <img src="../assets/images/ellips.png" alt="el-left" /> */}
        </div>

        <div className="container">
          <div className="descWork">
            <button className="payDesc" data-aos="fade-up" data-aos-duration="1000">Description</button>
            <button className="oldWork" data-aos="fade-up" data-aos-duration="1500">Old Work</button>
          </div>

          <p className="fullDesc" data-aos="fade-up" data-aos-duration="2000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>

          <div className="row">
            <div className="col-lg-6 faq " data-aos="zoom-in-up" data-aos-duration="1000">
              <h4>Why choose product?</h4>
              <p>
                • Creat by cotton fibric with soft and smooth <br/>
                • Simple, Configurable (e.g. size, color, etc.), bundled <br/>
                • Downloadable/Digital Products, Virtual Products
              </p>
            </div>
            <div className="col-lg-6 faq choosePro" data-aos="zoom-in-up" data-aos-duration="1500">
            <h4>Why choose product?</h4>
              <p>
                • Creat by cotton fibric with soft and smooth <br/>
                • Simple, Configurable (e.g. size, color, etc.), bundled <br/>
                • Downloadable/Digital Products, Virtual Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
