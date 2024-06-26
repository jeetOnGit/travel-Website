import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'
import './navbar.css'
import '../components/button.css'

function Navbar() {
  
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () =>{
    if (window.innerWidth <= 960) {
      setButton(false)
    }else{
      setButton(true)

    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)



  return (
    <>
      <nav className="navBar">
        <div className="navBar-container">
          <Link to="/" className='logo' onClick={closeMobileMenu}>TRVL <i className='fab fa-typo3'></i></Link>
        </div>
        <div className="menuIcon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'navMenu active' : 'navMenu'}>

          <li className="navItem">
            <Link to="/" className="navLinks" onClick={closeMobileMenu}>Home</Link>
          </li>

          <li className="navItem">
            <Link to="/services" className="navLinks" onClick={closeMobileMenu}>Sevices</Link>
          </li>

          <li className="navItem">
            <Link to="/products" className="navLinks" onClick={closeMobileMenu}>Products</Link>
          </li>

          <li className="navItem">
            <Link to="/signUp" className="navLinksMobile" onClick={closeMobileMenu}>Sign Up</Link>
          </li>

        </ul>

        {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
      </nav>
    </>
  )
}

export default Navbar