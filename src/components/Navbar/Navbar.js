import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-heading'>
        <h1>Food <span>App</span> </h1>
      </div>
      <div className='navbar-links'>
        <ul>
          <Link to='/'>
            {" "}
            <li>Welcome!</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar