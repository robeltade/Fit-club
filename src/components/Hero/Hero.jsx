import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className="Left-h">
            <Header />
        </div>
        <div className="Right-h">Right side</div>
    </div>
  )
}

export default Hero