import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GetinTouch from "../components/GetinTouch/GetinTouch";
import Footer from "../components/Footer/Footer";
import Contact from "../utils/Contact/Contact";
import "./ServicesPage.scss";

function ServicePage() {
  return (
    <div>
      <div className="heroparticles d-none" id="heroparticles"></div>
      <Navbar className="white black"></Navbar>
      <div>
        <div className="background">
          <div className="container">
            <h1 className="mainTitle">
              Our <span>Service</span>
            </h1>
            <div className="row paddingBottom">
            
                <div className="col-lg-3 leftSide">
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <a href="#">
                      <div className="servicesItemActive">
                        <div className="servicesAlign">
                        <div className="bgactive">
                          <img
                            src="../assets/images/services/webDesign.png"
                            alt="webDesign.png"
                          />
                          </div>
                          <h3>Web Design & eCommerce</h3>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="1500">
                    <a href="#">
                      <div className="servicesItemNotActive">
                        <div className="servicesAlign">
                          <div className="bgnotactive">
                          <img
                            src="../assets/images/services/mobileAppDevelopment.png"
                            alt="webDesign.png"
                          />
                          </div>
                          <h3>Web Design & eCommerce</h3>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div data-aos="fade-right" data-aos-duration="2000">
                    <a href="#">
                      <div className="servicesItemNotActive">
                        <div className="servicesAlign">
                          <div className="bgnotactive">
                          <img
                            src="../assets/images/services/graphicDesign.png"
                            alt="webDesign.png"
                          />
                          </div>
                          <h3>Web Design & eCommerce</h3>
                        </div>
                      </div>
                    </a>
                  </div>
              </div>

              <div className="col-lg-9 rightSide">
                <div className="row paddingGap">
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="webServices">
                      <img
                        className="img"
                        src="../assets/images/services/WordPress.png"
                        alt=""
                      />
                      <div className="bottomSection">
                        <h2 className="serviceTitle">Wordpress Website</h2>
                        <h5 className="subTitle">
                          Starting from <span>$5</span>
                        </h5>
                        <p className="description">
                          We follow the first and foremost priority of gathering
                          requirements, resources, and information.
                        </p>
                        <button className="button"> Purchase Now </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="webServices">
                      <img
                        className="img"
                        src="../assets/images/services/WordPress.png"
                        alt=""
                      />
                      <div className="bottomSection">
                        <h2 className="serviceTitle">Wordpress Website</h2>
                        <h5 className="subTitle">
                          Starting from <span>$5</span>
                        </h5>
                        <p className="description">
                          We follow the first and foremost priority of gathering
                          requirements, resources, and information.
                        </p>
                        <button className="button"> Purchase Now </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="webServices">
                      <img
                        className="img"
                        src="../assets/images/services/WordPress.png"
                        alt=""
                      />
                      <div className="bottomSection">
                        <h2 className="serviceTitle">Wordpress Website</h2>
                        <h5 className="subTitle">
                          Starting from <span>$5</span>
                        </h5>
                        <p className="description">
                          We follow the first and foremost priority of gathering
                          requirements, resources, and information.
                        </p>
                        <button className="button"> Purchase Now </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="webServices">
                      <img
                        className="img"
                        src="../assets/images/services/WordPress.png"
                        alt=""
                      />
                      <div className="bottomSection">
                        <h2 className="serviceTitle">Wordpress Website</h2>
                        <h5 className="subTitle">
                          Starting from <span>$5</span>
                        </h5>
                        <p className="description">
                          We follow the first and foremost priority of gathering
                          requirements, resources, and information.
                        </p>
                        <button className="button"> Purchase Now </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="webServices">
                      <img
                        className="img"
                        src="../assets/images/services/WordPress.png"
                        alt=""
                      />
                      <div className="bottomSection">
                        <h2 className="serviceTitle">Wordpress Website</h2>
                        <h5 className="subTitle">
                          Starting from <span>$5</span>
                        </h5>
                        <p className="description">
                          We follow the first and foremost priority of gathering
                          requirements, resources, and information.
                        </p>
                        <button className="button"> Purchase Now </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="webServices">
                      <img
                        className="img"
                        src="../assets/images/services/WordPress.png"
                        alt=""
                      />
                      <div className="bottomSection">
                        <h2 className="serviceTitle">Wordpress Website</h2>
                        <h5 className="subTitle">
                          Starting from <span>$5</span>
                        </h5>
                        <p className="description">
                          We follow the first and foremost priority of gathering
                          requirements, resources, and information.
                        </p>
                        <button className="button"> Purchase Now </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GetinTouch variant='outline'></GetinTouch>
        <Footer></Footer>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default ServicePage;
