import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Navbar = (className) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    console.log("location", location);
    let nav = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log(isActive);
        nav.classList.add("active");
      } else {
        console.log("navbar false");
        nav.classList.remove("active");
      }
    };

    if (isActive === false) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <nav
      className={` ${
        isActive
          ? "active navbar navbar-expand-lg navbar-light"
          : "navbar navbar-expand-lg navbar-light"
      } `}
      id="navbar"
    >
      <div className="container">
        <div className="d-flex mobile-nav">
          <a className="navbar-brand" href="#">
            <img src="./assets/images/brand.png" />
          </a>
          <div className="left d-flex align-items-center justify-content-space-between">
            <a className="nav-link  d-lg-none request px-2" href="#">
              <span className="me-3">Get A Quote</span>
              <FontAwesomeIcon className="-mb-2" icon={faArrowRight} />
            </a>
            <button
              className="navbar-toggler"
              onClick={handleClick}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="line line1 d-sm-inline-block d-lg-none"></span>
              <span className="line line2 d-sm-inline-block d-lg-none"></span>
              <span className="line line3 d-sm-inline-block d-lg-none"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4 ${
                  location.pathname === "/" && "active"} `}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4  ${
                  location.pathname === "/services" && "active"}`}
                href="/services"
              >
                Services
              </a>
            </li>

            <li className="nav-item ">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4 ${
                  location.pathname === "/SingleProduct" && "active"} `}
                href="/SingleProduct"
              >
                Our Projects
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4`}
                href="#"
              >
                How it Work
              </a>
            </li>
            <li className="nav-item ">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4`}
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item mob">
              <a
                className={`${
                  location.pathname === "/" ? "text-white " : "text-black"
                } nav-link left px-4`}
                href="#"
              >
                Login
              </a>
            </li>
            {/* <li className="nav-item mob">
                            <a className="nav-link left px-4" href="#" >Signup</a>
                        </li> */}
            <li className="nav-item mob signupBorder">
              <a 
              className={` nav-link left`}
         href="#">
                <span> Sign up</span>
                {/* <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /> */}
              </a>
            </li>
          </ul>
          <ul className="d-flex navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item desk">
              <a className={`${
                location.pathname === "/" ? "text-white " : "text-black"
              } nav-link login`} href="#">
                Log in
              </a>
            </li>
            <li className="nav-item desk ms-lg-3">
              <a className={`${
                location.pathname === "/" ? "text-white " : "text-main"
              } nav-link signup`} href="#">
                Sign Up
              </a>
            </li>
            <li className="nav-item desk ms-lg-3 ">
              <a className="nav-link request px-2" href="#">
                <span className="me-3">Request a Service</span>
                <FontAwesomeIcon className="-mb-2" icon={faArrowRight} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
