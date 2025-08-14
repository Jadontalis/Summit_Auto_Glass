import React from 'react';
import './HomeContentSection.css';
import { Link } from 'react-router-dom';

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
              <div className="service-image" style={{ backgroundImage: 'url(/src/assets/window-2.jpeg)' }}></div>
              <div className="service-content">
                <h4>Window Replacements</h4>
                <small>OEM-quality glass replacement for cracked or shattered windows.</small>
              </div>
            </Link>

            <Link to="/Services" className="service-card">
              <div className="service-image" style={{ backgroundImage: 'url(/src/assets/rockchip.jpg)' }}></div>
              <div className="service-content">
                <h4>Rockchips</h4>
                <small>Quick and affordable repairs to prevent cracks from spreading.</small>
              </div>
            </Link>

            <Link to="/Services" className="service-card">
              <div className="service-image" style={{ backgroundImage: 'url(/src/assets/adas-calibration.jpg)' }}></div>
              <div className="service-content">
                <h4>ADAS Recalibrations</h4>
                <small>Ensure your vehicle's safety tech is recalibrated and accurate.</small>
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
