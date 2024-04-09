import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { bannerimg } from '../assets';

function Banner() {
  return (
    <div className='px-6 lg:px-16 md:px-10 col-span-2 flex flex-col md:flex-row bg-slate-50'>
      {/* Left section */}
      <div className='flex flex-col justify-center items-center lg:w-1/2 px-10 max-lg:px-12 py-10 md:py-20'>
        {/* Big text */}
        <div className='font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>
          Transform the way you manage projects with ProjectWhiz!
        </div>
        {/* Subtitle */}
        <div className='font-light text-center md:text-left mt-3'>
          Say goodbye to complex project management tools and hello to simplicity, efficiency, and success.
        </div>
        {/* Email input and Get Started button */}
        <div className="flex flex-col md:w-full md:flex-row items-center justify-center md:justify-start mt-5">
          <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-xl px-4 py-2 mb-3 md:mb-0 md:mr-3 w-full md:w-auto" />
          <a href="/login" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            <span className="flex-shrink-0 max-lg:text-sm">Get Started</span>
            <span className="ml-2"><FaArrowRight /></span>
          </a>
        </div>

      </div>
      
      {/* Right section (Image) - Hidden on smaller screens */}
      <div className='hidden lg:flex items-center justify-center w-1/2'>
        <img src={bannerimg} alt="bannerimg" className='max-w-full h-auto' />
      </div>
    </div>
  );
}

export default Banner;
