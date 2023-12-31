import React from 'react';
import './Testimonial.css' 
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react';
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

const tLength = testimonialsData.length;

function Testimonial() {
  const [selected, setSelected] = useState(0);
  return (
    
    <div className="Testimonials">
     
        <div className="left-t">
          <span>Testimonial</span>
          <span className="stroke-text">What they</span>
          <span>Say about us</span>
          <span>
            {testimonialsData[selected].review}
          </span>
          <span>
            <span>
              {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status}
          </span>
        </div>
        <div className="right-t">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img src={leftArrow} alt="" onClick={() => {selected === 0 ? setSelected(tLength - 1)
            : setSelected((prev) => prev -1);}}/>
            <img src={rightArrow} alt="" onClick={() => {selected === tLength -1 ? setSelected(0)
            : setSelected((prev) => prev +1);}} />
          </div>
        </div>
    </div>
  )
}

export default Testimonial