import React from 'react'
import "./PortfolioItem.scss"

const PortfolioItem = ({i,ind, cat}) => {
    return (
        <div className={`col-md-6 col-lg-4 mb-4 all mx-auto ${(i.cat == cat) ? 'active ' : 'allItems'}`}  key={ind}>
            <div className="item text-center scrollAnimation">
                <img src="/assets/images/portfolio/mobile.png" alt="" />
                <div className="info text-center mb-3" >
                    <h5 className="title">{i.cat}</h5>
                    <h6 className="item-desc mx-auto my-3">Batreek Platform</h6>
                    <button className='item-btn button-animation'>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem