import React, { useEffect, useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./Portfolio.scss"
import PortfolioItem from './PortfolioItem/PortfolioItem'
const Portfolio = () => {
    const [cat, setCat] = useState('mobile');
    const [isMobile, setIsMobile] = useState(false);
    const data = [
        {cat: 'network'},
        {cat: 'mobile'},
        {cat: 'security'},
        {cat: 'mobile'},
        {cat: 'network'},
        {cat: 'software'},
        {cat: 'network'},
        {cat: 'mobile'},
        {cat: 'mobile'},
        {cat: 'mobile'},
        {cat: 'mobile'},
    ]
    useEffect(() => {
        let item = document.querySelectorAll('.shuffle-items li' )
            item.forEach(li => {
                li.addEventListener('click', () => {
                    
                    // console.log(li.getAttribute('data-cat'))
                })
            })
        
      }, [])

      useEffect(()=>{
        window.addEventListener('resize', handleResize)
        function handleResize() {
            if (window.innerWidth <= 767) {
              return  setIsMobile (true)
            } else {
            return  setIsMobile (false)
            }
        }

      })

      useState(() => {
        console.log(cat)
      }, [cat])
      const handleShuffle = (e) => {
        setCat(e.target.getAttribute('data-cat'))
      }
    return (
        <div className='portfolio'>
            <SectionHeader title="Our Portfolio" />
            <div className="container">
                <div className="desc text-center mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, sit blanditiis architecto dolorem earum quos recusandae provident excepturi ab quae?
                </div>
                <div className="shuffle-container " id="shuffle-items">
                    <div className="shuffle-items my-4">
                        <ul className="list-unstyled d-flex mx-auto ">
                            {/* <li className='active' data-cat="allItems" onClick={handleShuffle}>All</li> */}
                            <li  data-cat="mobile" onClick={handleShuffle}>Mobile</li>
                            <li data-cat="software" onClick={handleShuffle}>Software</li>
                            <li data-cat="network" onClick={handleShuffle}>Network</li>
                            <li data-cat="security" onClick={handleShuffle}>Securiy</li>
                        </ul>
                    </div>
                    <div className="shuffle-details">
                        <div className={`${isMobile ? "d-flex mx-auto overflow-auto descHide" : "row" }`}>
                            {data.map((i, ind) => (
                                <PortfolioItem i={i} ind={ind} cat={cat} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio