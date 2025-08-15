import React from 'react'
import './AltTextSection.css'
import team from '../TextSection/rockchip.jpg'

export function AltTextSection() {

    return (
    <section className='zigzag-section'>
        <div className="zigzag-content">
            <div className="zigzag-image">
                <img src={team} alt="Team Photo"/>
            </div>
            <div className="zigzag-text">
                <h2>Our Team</h2>
                <p>Since gaining root in the gallatin valley in 2020. The Summit AG family is a close-knit group of people with one single mission in mind. To provide you the customer with the upmost quality repairs and replacements. </p>
            </div>
        </div>
    </section>
  );
}