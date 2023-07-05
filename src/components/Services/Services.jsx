import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Services.scss"

const Services = () => {
    return (
        <div className='services'>
            <SectionHeader title="Our" span="Services" />
            <div className="container serviceWidth">

                <div className="services-items ">
                    <div className="row">
               

                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="service ">
                                    <img className="img" src="/assets/images/ser1.gif" alt="" />
                                    <div className="bottom">

                                        <h2 className="title">
                                            Mobile Apps Developement
                                        </h2>
                                        <p className="desc">
                                            We follow the first and foremost priority of gathering requirements, resources, and information.
                                        </p>
                                        <button> Show more <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="service ">
                                    <img className="img" src="/assets/images/ser2.gif" alt="" />
                                    <div className="bottom">

                                        <h2 className="title">
                                            Mobile Apps Developement
                                        </h2>
                                        <p className="desc">
                                            We follow the first and foremost priority of gathering requirements, resources, and information.
                                        </p>
                                        <button> Show more <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="service ">
                                    <img className="img" src="/assets/images/ser3.gif" alt="" />
                                    <div className="bottom">

                                        <h2 className="title">
                                            Mobile Apps Developement
                                        </h2>
                                        <p className="desc">
                                            We follow the first and foremost priority of gathering requirements, resources, and information.
                                        </p>
                                        <button> Show more <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="service ">
                                    <img className="img" src="/assets/images/ser4.gif" alt="" />
                                    <div className="bottom">

                                        <h2 className="title">
                                            Mobile Apps Developement
                                        </h2>
                                        <p className="desc">
                                            We follow the first and foremost priority of gathering requirements, resources, and information.
                                        </p>
                                        <button> Show more <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="service ">
                                    <img className="img" src="/assets/images/ser5.gif" alt="" />
                                    <div className="bottom">

                                        <h2 className="title">
                                            Mobile Apps Developement
                                        </h2>
                                        <p className="desc">
                                            We follow the first and foremost priority of gathering requirements, resources, and information.
                                        </p>
                                        <button> Show more <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="service ">
                                    <img className="img" src="/assets/images/ser6.gif" alt="" />
                                    <div className="bottom">

                                        <h2 className="title">
                                            Mobile Apps Developement
                                        </h2>
                                        <p className="desc">
                                            We follow the first and foremost priority of gathering requirements, resources, and information.
                                        </p>
                                        <button> Show more <FontAwesomeIcon className="-mb-2" icon={faArrowRight} /></button>
                                    </div>
                                </div>
                            </div>
                 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services