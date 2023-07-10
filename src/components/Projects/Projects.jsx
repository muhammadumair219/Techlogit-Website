import React from 'react'
import "./Projects.scss"
import SectionHeader from '../SectionHeader/SectionHeader'

const Projects = () => {
  return (
    <div className='projects'>
        <SectionHeader title="Our Latest" span="Projects"/>
        <div className="projects-items">
            <div className="container projectWidth">

            <div className="row">
                <div className="col-md-6">
                    <div className="project" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <img src="/assets/images/projects/Rectangle 11.png" alt="" />
                        <div className="bottom">
                            <div className="title">
                            Food Delivery App
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>
                    <div className="project pushed-down" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <img src="/assets/images/projects/Rectangle 14.png" alt="" />
                        <div className="bottom">
                            <div className="title">
                            Podcast App
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <img src="/assets/images/projects/Rectangle 12.png" alt="" />
                        <div className="bottom">
                            <div className="title">
                            E-Pay App
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>
                    <div className="project pushed-down" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <img src="/assets/images/projects/Rectangle 13.png" alt="" />
                        <div className="bottom">
                            <div className="title">
                            Service Provider App
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects