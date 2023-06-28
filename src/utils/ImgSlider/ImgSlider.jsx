import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./ImgSlider.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
const ImgSlider = ({ slideItems, items }) => {
    return (
        <div className="imgSlider">
            <div className='container' >
                <OwlCarousel items={items}
                    className="owl-carousel owl-theme"
                    loop
                    nav
                    margin={8} >
                    {
                        slideItems.map(i => (


                            <div className='slide-item' key={i.rating}>
                                <div className="row g-0">
                                    <div className="col-md-4 col-sm-5">
                                        <img className="h-100" src={i.img} alt="" />
                                    </div>
                                    <div className="col-md-8  col-sm-7 p-4">
                                        <div className='rating'>
                                            <Rating name="read-only" value={i.rating} readOnly />
                                        </div>
                                        <div className="desc">
                                            {i.desc}
                                        </div>
                                        <div className="name">
                                            {i.name}
                                        </div>
                                        <div className="jobtitle">{i.jobtitle}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </div>


    )
}

export default ImgSlider