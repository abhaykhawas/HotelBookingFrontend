import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>

        <div className="navbar-logo-container">
            <h3>TRAVLD</h3>
        </div>

        <div className="navbar-links-container">
            <Link to={'/'}>HOME</Link>
            <Link to={'/listings'}>LISTINGS</Link>
            <Link to={'/bookings'}>BOOKINGS</Link> 
        </div>
        
    </div>
  )
}

export default Navbar