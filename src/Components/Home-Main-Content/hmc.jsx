import React from 'react'
import './hmc.css'
import window_replace from '../../assets/window.jpg'
import window_repair from '../../assets/rockchip.jpg'
import mobile_jobs from '../../assets/mobile_job.jpg'

const hmc = () => {
  return (
    <div className='services-hero'>
        <div className="service">
            <img src={window_replace} alt="window replacements" />
        </div>
        <div className="service">
            <img src={window_repair} alt="window repairs" />
        </div>
        <div className="service">
            <img src={mobile_jobs} alt="mobile jobs" />
        </div>
    </div>
  )
}

export default hmc