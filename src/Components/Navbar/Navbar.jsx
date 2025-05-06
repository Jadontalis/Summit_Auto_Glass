import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-transparent.png'
const Navbar = () => {

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Company</li>
            <li>Get A Quote</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar