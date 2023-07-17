import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../utils/Contact/Contact";
import "./SingleProduct.scss";
import React, { useState } from "react";
import Select from "react-select";
import ProductDesc from "./ProductDesc";

function SingleProduct() {
  const [value, setValue] = useState(null);
  // const options = [
  //   // { label: "Pages", value: "pages" },
  //   // { label: "Pages", value: "pages" },
  //   // { label: "Pages", value: "pages" },
  //   { value: "Page 1", label: "Page 1" },
  //   { value: "Page 2", label: "Page 2" },
  //   { value: "Page 3", label: "Page 3" },
  //   { value: "Page 4", label: "Page 4" },
  // ];

  // const [selected, setSelected] = useState([]);

  return (
    <div>
      <div className="heroparticles d-none" id="heroparticles"></div>
      <Navbar></Navbar>
      <div>
        <div className="productBackground">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-12 productImage"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <img
                  src="../assets/images/singleProduct/product.png"
                  alt="product image"
                />
              </div>

              <div
                className="col-lg-6 col-md-12 productContent"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="productDesc">
                  <h1>Website Development</h1>
                  <h3>$50.00 USD</h3>
                  <p>
                    Website development refers to the process of creating,
                    designing, and building websites that are accessible via the
                    internet. It involves several aspects, including web design,
                    web content development, client-side and server-side
                    scripting, network security configuration, and database
                    management.
                  </p>

                  <div className="dropDown" style={{ marginTop: 40, width: 225 }} data-aos="fade-up"
              data-aos-duration="1000">
                    <select name="" id="" className="cs-select">
                      <option value="Select Page..">Select Page..</option>
                      <option value="Select Page...">Page 1</option>
                      <option value="Select Page...">Page 2</option>
                      <option value="Select Page...">Page 3</option>
                    </select>
                  </div>

                  
                    <div className="nowLater">
                      <button className="payNow" data-aos="fade-up"
              data-aos-duration="1500">Pay Now</button>
                      <button className="payLater" data-aos="fade-up"
              data-aos-duration="2000">Pay Later</button>
                    </div>

                    <button className="discountButton" data-aos="zoom-in"
              data-aos-duration="2500">
                      <div className="discount">
                        <img
                          src="../assets/images/singleProduct/discount.png"
                          alt="discountImage"
                        />
                        <p>Get 10% Discount on Pay Now</p>
                      </div>
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDesc></ProductDesc>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
}

export default SingleProduct;
