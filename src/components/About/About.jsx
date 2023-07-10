import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div className='about py-5 mt-5'>
      <div className="container my-4 projectWidth">
        <div className="row">
          <div className="col-md-6" data-aos="flip-left" data-aos-duration="1000">
            <div className='d-flex align-items-center w-100 h-100'>
                <img src="assets/images/about/Rectangle 832.png" alt="" />
            </div>
          
          </div>
          <div className="col-md-6" data-aos="fade-down-left" data-aos-duration="1000">
            <div className="info">

              <h2 className="title ">About Us</h2>
              <p>
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
              </p>
              <p>
              We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. 
              </p>
              <button className='about-btn button-animation'>About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About