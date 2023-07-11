import React, { useEffect } from 'react'
import "./Hero.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
  useEffect(() => {
    let down = document.getElementById('scrolldown')
    down.addEventListener('click', () => {
      console.log(window.screenY)
      console.log(window)
      window.scroll({
        top: 700,
        left: 0,
        behavior: "smooth",
      })
      
    })
  }, [])
  return (
    <div className='hero '>

      <div className="heroparticles" id="heroparticles">
      </div>


      <div className="container">
        <div className="row">
          <div className="col-lg-7  col-md-12 position-relative">
            <div className="intro" data-aos="zoom-in-right" data-aos-duration="1000">
              <h2>
                Transform your ideas into
                reality with our full-service Design to Development team.
              </h2>
              <h4>
                Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum eu tellus tempor sed amet mauris pellentesque ut vitae
                lorep ipsum.
              </h4>
              <button className='started button-animation'> Get started <FontAwesomeIcon className="mt-3 ms-2" icon={faArrowRight} /></button>
            </div>

          </div>
          <div className="col-lg-5 col-md-12 loadAnimation">
            <img src="./assets/images/Group 1000001897.png" alt="" />
          </div>
        </div>
      </div>
      <div className="left text-center">
        <ul className="social">
          <a href='#'><FontAwesomeIcon className="icon social-icons" icon={faFacebookF} /></a>
          <a href='#'><FontAwesomeIcon className="icon social-icons" icon={faTwitter} /></a>
          <a href='#'><FontAwesomeIcon className="icon social-icons" icon={faInstagram} /></a>
        </ul>
        <div className="mail">
          INFO@TECHLOGIT
        </div>
      </div>
      <div className=" right" id="scrolldown">
        SCROLL DOWN
      </div>
    </div>

  )
}

export default Hero