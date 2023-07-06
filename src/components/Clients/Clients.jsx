import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import  "./Clients.scss"
const Clients = () => {
    return (
        <div className='clients '>
            <SectionHeader title="Our Clients" />
            <div className="container">

                <div className="clients-items d-flex justify-content-between ">
                    <div className="client scrollAnimation">
                        <img src="/assets/images/clients/google.png" alt="" />
                    </div>
                    <div className="client scrollAnimation">
                        <img src="/assets/images/clients/amazon.png" alt="" />
                    </div>
                    <div className="client scrollAnimation">
                        <img src="/assets/images/clients/Zara.png" alt="" />
                    </div>
                    <div className="client scrollAnimation">
                        <img src="/assets/images/clients/Red.png" alt="" />
                    </div>
                    <div className="client scrollAnimation">
                        <img src="/assets/images/clients/Infosys.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients