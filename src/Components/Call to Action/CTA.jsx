import React from 'react'
import './cta.css'
import { Link } from 'react-router-dom'


export function CTA() {

return (
 <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Get Back on the Road?</h2>
        <p>Contact us today for quick, reliable, and expert auto glass services.</p>
        <Link to="/Contact"><button className='btn'>Get a Quote Today</button></Link>
      </div>
    </section>
  )
}