import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primarty', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']
export const Button = ({children, type, onclick, buttonStyle, buttonSize})  => {
  const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] 
  const checkButtonsize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

  return (
    <Link to="/signUp" className='btnMobile'>
      <button className={`btn ${checkButtonstyle} ${checkButtonsize}`} onClick={onclick} type={type}>
        {children}
      </button>
    </Link>
  ) 

}