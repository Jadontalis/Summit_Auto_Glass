import React from 'react';
import './AltTextSection.css'

export function AltText_Services() {

    return (
    <section className='zigzag-section'>
            <div className='services-header'>
                <h1></h1>
            </div>
        <div className="zigzag-content">
            <div className="zigzag-image">
                <img src="./src/assets/adas-calibration.jpg" alt="" />
            </div>
            <div className="zigzag-text">
                <h2>ADAS Recalibrations</h2>
                <p>Advanced Driver Assistance Systems (ADAS) rely on precise sensor alignment to function correctly, especially after a windshield replacement. <b>ADAS recalibration ensures features like lane-keeping, adaptive cruise control, and emergency braking work as intended.</b> At Summit Auto Glass, our trained technicians use industry-standard tools to recalibrate your vehicle and keep you safe on the road.</p>
            </div>
        </div>
        <div className="zigzag-content">
            <div className="zigzag-text">
                <h2>Windshield Replacements</h2>
                <p>Your windshield is a critical safety component, providing structural integrity and clear visibility. When it’s cracked or shattered, a full replacement with high-quality glass ensures your vehicle is safe and road-ready. <b>Our glass techs install OEM or OEM equivalent glass with precision and care </b> to restore your car’s protection and appearance.</p>
            </div>
            <div className="zigzag-image">
                <img src="./src/assets/tractor-glass.jpg" alt="" />
            </div>
        </div>
                <div className="zigzag-content">
            <div className="zigzag-image">
                <img src="./src/assets/rockchip.jpg" alt="" />
            </div>
            <div className="zigzag-text">
                <h2>Rockchips</h2>
                <p>Small rock chips can quickly spread into large cracks if left untreated. <b>Our fast and affordable rock chip repair service restores the integrity of your windshield and helps prevent the need for a full replacement.</b> It’s a smart, safe solution to keep you on the road with confidence.</p>
            </div>
        </div>
    </section>
  );
}