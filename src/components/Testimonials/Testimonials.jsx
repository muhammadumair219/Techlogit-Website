import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ImgSlider from '../../utils/ImgSlider/ImgSlider'
import "./Testimonials.scss"
const Testimonials = () => {
    const slideItems = [
        {
          img: './assets/images/slide1.png',
          rating: 4,
          desc: 'descriodescriodescriodescriodescriodescriodescriodescriodescriodescrio',
          name: "mohammed",
          jobtitle: "web developer"
        },
        {
          img: './assets/images/slide1.png',
          rating: 2,
          desc: "descriodescriodescriodescriodescriodescriodescriodescriodescriodescrio",
          name: "mohammed",
          jobtitle: "web developer"
        },
        {
          img: './assets/images/slide1.png',
          rating: 3,
          desc: "descriodescriodescriodescriodescriodescriodescriodescriodescriodescriodescriodescrio",
          name: "mohammed",
          jobtitle: "web developer"
        },
    ]
  return (
    <div className='testimonials pb-5'>
        <SectionHeader title="What Our Customer Says" />
        <div className="container desk">
                <ImgSlider  items={2} slideItems={slideItems}/>
        </div>
        <div className="container mob">
                <ImgSlider  items={1} slideItems={slideItems}/>
        </div>
    </div>
  )
}

export default Testimonials