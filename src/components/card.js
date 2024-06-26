import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'


function card(props) {
  return (
    <>
      <li className="cardWrapper">
        <Link className='cardLinkWrapper' to={props.path}>
          <div className="imgWrapper"  data-category={props.label}>
            <img className='cardImg' src={props.src} alt="" />
          </div>

          <div className="cardInfo">
            <h5 className='cardInfoText'> {props.text} </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default card