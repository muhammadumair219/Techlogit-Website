
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./SingleProduct.scss";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

function SingleProduct() {

  const options = [
    { label: "Pages", value: "pages" },
    { label: "Pages", value: "pages" },
    { label: "Pages", value: "pages" },
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
              <div className="col-lg-6 productImage">
                <img
                  src="../assets/images/singleProduct/product.png"
                  alt="product image"
                />
              </div>
              <div className="col-lg-6 productContent">
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

                <div>
                  <h1>Select Page</h1>
                  {/* <pre>{JSON.stringify(selected)}</pre> */}
                  <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SingleProduct;
