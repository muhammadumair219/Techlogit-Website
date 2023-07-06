import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ImgSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
const ImgSlider = ({ slideItems, items }) => {
    const state= {
        responsive:{
            0: {
                stagePadding: 50,
            },
            767: {
                stagePadding: 0,
            }
        },
    }
  return (
    <div className="imgSlider">
      <div className="container">
        <OwlCarousel
          items={items}
          className="owl-carousel owl-theme scrollAnimation"
          loop
          nav
          rtl
          margin={20} 
          responsive={state.responsive}
        >
          {slideItems.map((i) => (
            <div className="slide-item" key={i.rating}>
              <div className="row g-0">
                <div className="col-md-4 col-4">
                  <img className="h-100" src={i.img} alt="" />
                </div>
                <div className="col-md-8  col-8 contentside">
                  <div className="rating">
                    <Rating name="read-only" value={i.rating} readOnly />
                  </div>
                  <div className="desc">{i.desc}</div>
                  <div className="name">{i.name}</div>
                  <div className="jobtitle">{i.jobtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ImgSlider;
