import React from 'react'
import { Link } from 'react-router-dom'
import './SubpageLayout.css'


export function SubpageLayout() {
  return (
    <section className="spl-section">
      <div className="spl-container">
        <h2>Services</h2>
        <p>Contact us today for quick, reliable, and expert auto glass services.</p>
        <Link to="/Contact"><button className='btn'>Get a Quote Today</button></Link>
      </div>
    </section>
  )
}
