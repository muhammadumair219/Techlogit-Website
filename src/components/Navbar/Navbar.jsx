import React, { useEffect , useState } from 'react'
import "./Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

    useEffect(() => { 
 if (!isActive){
    console.log("navbar")
    window.addEventListener('scroll', () => {
        let nav = document.getElementById('navbar')
        if (window.scrollY > 50) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')

        }
    })

 }
           

        
    })


    return (
        <nav className={` ${isActive ? 'active navbar navbar-expand-lg navbar-light' :  'navbar navbar-expand-lg navbar-light'} ` } id="navbar">
            <div className="container">
                <div className='d-flex mobile-nav'>
                    <a className="navbar-brand" href="#">
                        <img src="./assets/images/brand.png" />
                    </a>
                  <div className='left d-flex align-items-center justify-content-space-between'>
                        <a className="nav-link  d-lg-none request px-2" href="#" >
                            <span className='me-3'>
                                Get A Quote
                            </span>
                            <FontAwesomeIcon className="-mb-2" icon={faArrowRight} />
                        </a>
                        <button className="navbar-toggler" onClick={handleClick} type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className='line line1 d-sm-inline-block d-lg-none'></span>
                            <span className='line line2 d-sm-inline-block d-lg-none'></span>
                            <span className='line line3 d-sm-inline-block d-lg-none'></span>
                        </button>
                    </div> 
                   
                </div>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <a className="nav-link left px-4 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link left px-4" href="#">Services</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link left px-4" href="#" >Our Projects</a>
                        </li>
                        <li className="nav-item " >
                            <a className="nav-link left px-4" href="#" >How it Work</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link left px-4" href="#" >Contact Us</a>
                        </li>
                        <li className="nav-item mob">
                            <a className="nav-link left px-4" href="#" >Login</a>
                        </li>
                        <li className="nav-item mob">
                            <a className="nav-link left px-4" href="#" >Signup</a>
                        </li>
                        <li className="nav-item mob">
                            <a className="nav-link left px-4" href="#" > <span className='me-3'> Request a Service</span>   <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></a>
                        </li>
                    </ul>
                    <ul className="d-flex navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item desk">
                            <a className="nav-link login" href="#" >Log in</a>
                        </li>
                        <li className="nav-item desk ms-lg-3">
                            <a className="nav-link signup" href="#" >Sign Up</a>
                        </li>
                        <li className="nav-item desk ms-lg-3">
                            <a className="nav-link request px-2" href="#" >
                                <span className='me-3'>
                                    Request a Service
                                </span>
                                <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar