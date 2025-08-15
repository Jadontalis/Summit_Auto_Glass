import React from 'react';
import './HomeContentSection.css';
import { Link } from 'react-router-dom';
import adas from '../HomeMainContentSection/adas_calibration_glass.svg';
import rockchip from '../HomeMainContentSection/rock_chips_glass.svg';
import windows from '../HomeMainContentSection/window_glass.svg';

export function HomeContentSection() {
  return (
    <section className="services-section">
      <div className="gradient-bg">
        <div className="services-wrapper">
          <div className="services-header">
            <h1>Our Services</h1>
            <p>
              Whether your vehicle is a small sedan or a big rig, we have the tools and expertise to get the job done right.
            </p>
          </div>

          <div className="services-grid">
            <Link to="/Services" className="service-card">
              <div className="service-content">
                <img src={windows} alt="Windshield Replacements" className='service-svg'/>
                <h2>Window Replacements</h2>
                <p>OEM-quality glass replacement for cracked or shattered windows.</p>
              </div>
            </Link>

            <Link to="/Services" className="service-card">
              <div className="service-content">
                <img src={rockchip} alt="Rockchips" className='service-svg'/>
                <h2>Rockchip Repairs</h2>
                <p>Repairs for small chips to prevent cracks from spreading.</p>
              </div>
            </Link>

            <Link to="/Services" className="service-card">

              <div className="service-content">
                <img src={adas} alt="ADAS Recalibrations" className='service-svg'/>
                <h2>ADAS Recalibrations</h2>
                <p>Ensure your vehicle's safety tech is recalibrated and accurate.</p>
              </div>
            </Link>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </section>
  );
}
