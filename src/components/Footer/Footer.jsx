import React from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
    return (
        <div className='footer pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 px-3">
                        <div className="logo">
                            <img src="./assets/images/brand.png" alt="" />
                        </div>
                        <div className="desc">
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry
                        </div>
                        <button className="btn contact button-animation">Contact Us</button>
                    </div>
                    <div className="col-sm-6 col-lg-3 px-3">
                        <h4 className="h4">Quick Links</h4>
                        <ul className="list-unstyled">
                            <li className="link"><a href="#">Home</a></li>
                            <li className="link"><a href="#">About Us</a></li>
                            <li className="link"><a href="#">Services</a></li>
                            <li className="link"><a href="#">Portfolio</a></li>
                            <li className="link"><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 px-3">
                        <h4 className="h4">Contact Info</h4>
                        <ul className="list-unstyled">
                            <li className="link">
                                <img src="./assets/images/footer/Phone Calling.svg" />
                                <span>+91 123456789</span></li>
                            <li className="link"><img src="./assets/images/footer/email.svg" /><span> Info@techlogit.com </span></li>
                            <li className="link"><img src="./assets/images/footer/MapPinLine.svg" /><span> BOX No. 213466, Dubai, UAE. </span></li>

                        </ul>
                    </div>
                    <div className="col-lg-3 px-3">
                        <h4 className="h4">Subscribe</h4>
                        <div className="desc">
                            Lorem Ipsum is simply dummy
                            text of the printing and typesetting
                            industry.
                        </div>
                        <form >
                            <div className="form-fields">
                                <input type="email"  placeholder='Your email Here...'/>
                                <img src="./assets/images/footer/send.svg" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom text-center py-4 mt-5">
                Copyright @ 2023 Agency Creative. All Right Reserved
            </div>
        </div>
    )
}

export default Footer