import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="Left-h">
            <Header />
            <div className="the-best-ad">
                <div></div>
                <span>The best fitness club in town</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>
                        Ideal body
                    </span>
                </div>
                <div >
                    <span>
                        In here we will help you to Shape and build your ideal body and live up to your life to fullest
                    </span> 
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+420</span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>+40</span>
                    <span>fittness Programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn more</button>
            </div>
        </div>
        <div className="Right-h">
            <button className="btn">Join now</button>

            <div className="heart-rate">
                <img src={Heart} alt=""  />
                <span>Heart rate</span>
                <span>116 bmp</span>
            </div>
            <img src={hero_image} alt="hero image" className='hero-image'/>
            <img src={hero_image_back} alt="hero image" className='hero-image-back' />
            <div className="calories">
                <img src={calories} alt="" />
                <div>
                <span>Calories burned</span>
                <span>220 Kcal</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero