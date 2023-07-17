// import React from "react";
import React, { useState } from "react";
import "./ProductDesc.scss";
// import OldWork from "./OldWork";
// import "./pages/ProductDesc.scss";

function ProductDesc() {


  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div>
      <div className="bgProDesc">
        <div className="el-left">
          {/* <img src="../assets/images/el-left.png" alt="el-left" /> */}
        </div>
        <div className="ellips">
          {/* <img src="../assets/images/ellips.png" alt="el-left" /> */}
        </div>

        <div className="container buttonsPosition">
          <div className="descWork">
            <button
        className={`${toggle === 1 ? "payDesc" : "oldWork"}`}
          
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={() => updateToggle(1)}
            >
              Description
            </button>
            <button
              className={`${toggle === 2 ? "payDesc" : "oldWork"}`}
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => updateToggle(2)}
            >
              Old Work
            </button>
          </div>

          <div className={toggle === 1 ? "show-content" : "content"}>
            <p className="fullDesc" data-aos="fade-up" data-aos-duration="2000">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <div className="row">
              <div
                className="col-lg-6 faq "
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h4>Why choose product?</h4>
                <p>
                  • Creat by cotton fibric with soft and smooth <br />
                  • Simple, Configurable (e.g. size, color, etc.), bundled{" "}
                  <br />• Downloadable/Digital Products, Virtual Products
                </p>
              </div>
              <div
                className="col-lg-6 faq choosePro"
                data-aos="zoom-in-up"
                data-aos-duration="1500"
              >
                <h4>Why choose product?</h4>
                <p>
                  • Creat by cotton fibric with soft and smooth <br />
                  • Simple, Configurable (e.g. size, color, etc.), bundled{" "}
                  <br />• Downloadable/Digital Products, Virtual Products
                </p>
              </div>
            </div>
          </div>

          <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="row">
              <div className="col-lg-3 leftButtons d-flex overflow-auto" data-aos="zoom-in-right" data-aos-duration="2000">
                <div className="firstactiveButton">
                <button className="activeButton">Healthy Masala</button>
                </div>
                <div className="secondButton">
                <button>Healthy Masala</button>
                </div>
                <div className="thirdButton">
                <button>Healthy Masala</button>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 midImage"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <img className="img-fluid" src="../assets/images/mobileImage.png" alt="mobileImage" />
              </div>
              <div className="col-lg-3 rightButtons"  data-aos="zoom-in-left" data-aos-duration="2000">
                <div className="secondButton">
                <button>Healthy Masala</button>
                </div>
                <div className="thirdButton">
                <button>Healthy Masala</button>
                </div>
                <div className="secondButton">
                <button>Healthy Masala</button>
                </div>
              </div>

              <div className="bottomContent" data-aos="fade-up"
              data-aos-duration="1000">
                <p>Website development refers to the process of creating, designing, and building websites that are accessible via the internet. It involves several aspects, including web design, web content development, client-side and server-side scripting, network security configuration, and database management.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
