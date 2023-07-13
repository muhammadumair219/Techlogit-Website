
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./SingleProduct.scss";
import React, { useState } from "react";
import Select from "react-select";
import ProductDesc from "./ProductDesc";

function SingleProduct() {

  const [value, setValue] = useState (null)
  const options = [
    // { label: "Pages", value: "pages" },
    // { label: "Pages", value: "pages" },
    // { label: "Pages", value: "pages" },
    {value: "Page 1", label: "Page 1"},
    {value: "Page 2", label: "Page 2"},
    {value: "Page 3", label: "Page 3"},
    {value: "Page 4", label: "Page 4"},
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <div className="heroparticles d-none" id="heroparticles"></div>
      <Navbar></Navbar>
      <div>
        <div className="productBackground">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 productImage"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <img
                  src="../assets/images/singleProduct/product.png"
                  alt="product image"
                />
              </div>
              
              <div className="col-lg-6 col-md-6 productContent" data-aos="zoom-in-up" data-aos-duration="1000">
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

                <div style={{marginTop:40, width:225}}>
                  <Select
                    options={options}
                    defaultValue={value}
                    placeholder="Select Page.."
                    onChange={setValue}
                    // isMulti
                    isSearchable
                    noOptionsMessage={()=> "No page found.."}
                    styles={{
                      placeholder: (baseStyles, state) => ({
                        ...baseStyles,
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "25px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        paddingLeft: "26px",
                        paddingRight: "26px"
                      }),

                      clearIndicator: (baseStyles) => ({
                        ...baseStyles,
                        color: "red"
                      }),

                      dropdownIndicator: (baseStyles) => ({
                        ...baseStyles,
                        color: "#1B75BC"
                      }),

                      input: (baseStyles) => ({
                        ...baseStyles,
                        // paddingTop: "12px",
                        // paddingBottom: "12px",
                        // marginLeft: "26px",
                        // marginRight: "26px",
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "25px",
                        // className:"spaceAround"
                      }),

                      control: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: "#1B75BC",
                        borderRadius: "50px"
                      })

                    }}
                  />
                </div>

                <div className="nowLater">
                <button className="payNow">Pay Now</button>
                <button className="payLater">Pay Later</button>
                </div>

                <button className="discountButton">
                  <div className="discount">
                  <img src="../assets/images/singleProduct/discount.png" alt="discountImage" />Get 10% Discount on Pay Now
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
    </div>
  );
}

export default SingleProduct;
