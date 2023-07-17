import React, {useState} from "react";
import "./OldWork.scss";
import ProductDesc from "./ProductDesc";

function OldWork() {

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
            <button
              className="payDesc"
              data-aos="fade-up"
              data-aos-duration="1000"
            >Description</button>
            <button
              className="oldWork"
              data-aos="fade-up"
              data-aos-duration="1500"
            >Old Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OldWork;
