import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>The Finest in Auto Glass</h1>
                <p>Providing the highest quality glass replacements and repairs since 2020.</p>
                <Link to="/Contact"><button className='btn'>Get a Quote Today</button></Link>
            </div>
        </div>
    </div>
  )
}
