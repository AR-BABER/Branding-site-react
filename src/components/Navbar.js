import React, {useState, useEffect} from 'react'
import {  Link } from "react-router-dom";
import { Button } from './Button';
import './Navbar.css';
function Navbar() {

  const [click, setclick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setclick(!click);
   const closeMobileMenue = () => setclick(false);
    const showButton=() => { 
      if(window.innerWidth<=960) {
        setButton(false);
      }
      else{
        setButton(true);
      }
    }
   useEffect(()=>{
     showButton()
   },[])     
    window.addEventListener('resize', showButton);
    return (
        <>
          <nav className="navbar"> 
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenue}>
            <i class="fab fa-typo3"> CDN</i>
            </Link>
            <div className="menu-icon" onClick= { handleClick} >
              <i className={click ? 'fas fa-bars':'fas fa-times'}/>
            </div>
             <ul className={click ? 'nav-menu active': 'nav-menu'}>
               <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenue} > 
                 Home</Link>
               </li>
               <li className='nav-item'>
                 <Link to='services' className='nav-links' onClick={closeMobileMenue} > 
                 Services</Link>
               </li>
               <li className='nav-item'>
                 <Link to='products' className='nav-links' onClick={closeMobileMenue} > 
                 Products</Link>
               </li>
               <li className='nav-item'>
                 <Link to='sign-up' className='nav-links-mobile' onClick={closeMobileMenue} > 
                   Sign Up </Link> 
                   </li>
             </ul>
             {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
          </nav>    
        </>
    )
}

export default Navbar
