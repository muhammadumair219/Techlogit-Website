import React from 'react'
import "./GetinTouch.scss"
import SectionHeader from '../SectionHeader/SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const GetinTouch = (props) => {
    // console.log("get in touch");
    // console.log(props.variant);
    const backgroundImage = props.variant === 'outline'
    ? '#fff'
    : 'url("../../../public/assets/images/hero1.png"), url("../../../public/assets/images/hero2.png")';
    return (
        <div className='GetinTouch' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <SectionHeader title="Get in Touch" />
            <div className="container">
                <div className="row ">
                    <div className="col-lg-5">
                        <div className="left" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">

                            <h2> Contact Information</h2>
                            <p className="desc">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                            </p>
                            <div className="contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <img src="./assets/images/getintouch/Vector (2).svg" alt="" />
                                        </div>
                                        <span className="info">+1012 3456 789</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="./assets/images/getintouch/Vector (5).svg" alt="" />
                                        </div>
                                        <span className="info">demo@gmail.com</span>
                                    </li>
                                    <li className='lastli'>
                                        <div className="icon ">
                                            <img className='lastimg' src="./assets/images/getintouch/Vector (3).svg" alt="" />
                                        </div>
                                        <span className="info">132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                                    </li>
                                </ul>
                                <div className="social d-flex align-items-center justify-content-flex-start gap-3">
                                    <FontAwesomeIcon className="-mb-2 social-icons" icon={faTwitter} />
                                    <FontAwesomeIcon className="-mb-2 social-icons" icon={faInstagram} />
                                    <FontAwesomeIcon className="-mb-2 social-icons" icon={faDiscord} />

                                </div>  
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <div className="right" data-aos="zoom-in-up" data-aos-duration="1000">
                            <form className='form '>
                                <div className="form-field d-flex justify-content-between">
                                    <div className="form-item">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" className='fname ' id='fname' />
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" className='lname ' id='lname' />
                                    </div>
                                </div>
                                <div className="form-field d-flex justify-content-between">
                                    <div className="form-item">
                                        <label htmlFor="email">email</label>
                                        <input type="email" className='email' id='email' />
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="phone" className='phone' id='phone' />
                                    </div>
                                </div>
                                <div className="form-field d-flex justify-content-start">
                                    <div className="form-item">
                                        <label className="ser" htmlFor="service">what service do you need?</label>
                                        <select className='service' id='service'>
                                            <option value="s1">s1</option>
                                            <option value="s2">s2</option>
                                            <option value="s3">s3</option>
                                            <option value="s4">s4</option>
                                        </select>
                                    </div>
                                    <div className="form-item"></div>
                                </div>
                                <div className="form-field d-flex justify-content-start">
                                    <div className="form-item w-100">
                                        <label htmlFor="msg">Message</label>
                                        <textarea className='msg w-100' id='service'></textarea>
                                            
                                    </div>
                                </div>
                                <div className="form-field d-flex justify-content-start">
                                    <button className='submit submit-animation button-animation'> Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetinTouch