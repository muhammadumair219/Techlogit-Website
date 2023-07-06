import React from 'react'
import "./SectionHeader.scss"
const SectionHeader = ({ title, span }) => {
    return (
        <div className='section-title'>
            <div className='container'>
                <h2 className="header scrollAnimation">

                    <span>{title}</span>
                    <span className='colored'>{span}</span>
                </h2>
            </div>
        </div>
    )
}

export default SectionHeader