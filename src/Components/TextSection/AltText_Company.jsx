import React from 'react'
import './AltTextSection.css'
import rockchip from '../TextSection/rockchip.jpg'

export function AltText_Company() {

    return (
    <section className='zigzag-section'>
        <div className="zigzag-content">
            <div className="zigzag-text">
                <h2>Where it all started</h2>
                <p>Qoleton Rammel started Summit Auto Glass in 2019 after working 15 years in the autoglass industry 
                    throughout southwest Montana. Following a managerial role at Speedy Glass in Bozeman, 
                    he ventured out and started a shop of his own. Knowing he would have to compete with other established 
                    local companies and franchises, Qoleton's work ethic, attention to detail, and people-centered attitude inevitiably grew the company 
                    from one employee into a full-scale crew. </p>
                <p>Since gaining root in the gallatin valley in 2019. The Summit AG family is a close-knit group of people with one single mission in mind. To provide you the customer with the upmost quality repairs and replacements.</p>
            </div>
            <div className="zigzag-image">
                <img src={rockchip} alt="Qoleton fixing a rockchip"/>
            </div>
        </div>
    </section>
  );
}