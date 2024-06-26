import React from 'react'
import './heroSection.css'
import { Button } from './button'

function heroSection() {
  return (
    <div className='heroContainer'>
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for ?</p>

      <div className="heroBtns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Trailer <i className='far fa-play-circle' /></Button>
      </div>

    </div>
  )
}

export default heroSection