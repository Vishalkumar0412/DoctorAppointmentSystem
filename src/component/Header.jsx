import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
  <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-5 md:px-10 lg:px-20' >
    {/* ..........left side header.......... */}
    <div>
        <p>Book Appointment<br />With Trusted Doctors</p>
     <img src={assets.group_profiles} alt="" />
     <p>Simply browse through our extensive list of trusted doctors, <br />
     schedule your appointment hassle-free.</p>

    </div>
    <a href="">
        Book Appointment <img src={assets.arrow_icon} alt="" />
    </a>
    {/* -----------right side header----------------- */}
    <div>
            <img src={assets.header_img} alt="" />
    </div>
  </div>
  )
}

export default Header