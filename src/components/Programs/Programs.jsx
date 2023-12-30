import React from 'react'
import "./programs.css"
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
        </div>
        
        <div className="programs-catagories">
            {programsData.map((program)=>(<div className="catagory">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Join now</span>
                <img src={rightArrow} alt="" /></div>
            </div>))}

        </div>
    </div>
  )
}

export default Programs