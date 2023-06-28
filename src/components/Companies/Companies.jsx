import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./Companies.scss"
const Companies = () => {
    return (
        <div className='companies'>
            <div className='section-title'>
                <div className='container'>
                    <div className="header">

                        <span className='title'>Companies choose us because of our <br className='d-md-none'/> <span className='span'> Quality </span> Services </span>
                    </div>
                </div>
            </div>
            <div className="container mt-2">
                <div className="row gapp">
                    <div className="col-lg-7 order-sm-last order-lg-first">
                        <div className="section">

                            <div className="card mb-3" >
                                <div className="row  g-0">
                                    <div className="col-md-2 d-flex justify-content-center align-items-start">
                                        <div
                                            style={{
                                                backgroundImage: `url("./assets/images/companies/e2.png" )`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'top center',
                                                minHeight: '80px',
                                            }}

                                            className="img-container text-center h-100   d-flex 
                                        justify-content-center align-items-start w-100">

                                            <img src="./assets/images/companies/g2.svg" className="icon " alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">Superior Designs</h5>
                                            <p className="card-text">
                                                We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-2 d-flex justify-content-center align-items-start">
                                        <div
                                            style={{
                                                backgroundImage: `url("./assets/images/companies/e1.png" )`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'top center',
                                                minHeight: '80px',
                                            }}

                                            className="img-container text-center h-100   d-flex 
                                        justify-content-center align-items-start w-100">

                                            <img src="./assets/images/companies/g3.svg" className="icon " alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">Superior Designs</h5>
                                            <p className="card-text">
                                                We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-2 d-flex justify-content-center align-items-start">
                                        <div
                                            style={{
                                                backgroundImage: `url("./assets/images/companies/e3.png" )`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'top center',
                                                minHeight: '80px',
                                            }}

                                            className="img-container text-center h-100   d-flex 
                                        justify-content-center align-items-start w-100">

                                            <img src="./assets/images/companies/g1.svg" className="icon " alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">Superior Designs</h5>
                                            <p className="card-text">
                                                We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-2 d-flex justify-content-center align-items-start">
                                        <div
                                            style={{
                                                backgroundImage: `url("./assets/images/companies/e4.png" )`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'top center',
                                                minHeight: '80px',
                                            }}

                                            className="img-container text-center h-100   d-flex 
                                        justify-content-center align-items-start w-100">

                                            <img src="./assets/images/companies/g4.svg" className="icon " alt="..." />
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">Superior Designs</h5>
                                            <p className="card-text">
                                                We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-5 order-sm-first order-lg-last mb-4">
                        <img className="w-100" src="./assets/images/companies/companies.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies