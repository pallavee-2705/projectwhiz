import React from 'react'
import { bannerimg } from '../assets'
import { FaArrowRight } from "react-icons/fa";


function Banner() {
  return (
    // this is the outer most div
    <div className='px-16  col-span-2 flex bg-slate-50'>
        {/* this is for the left hand side outer div */}
        <div className='flex flex-col gap-5 w-1/2 items-center px-20 py-20'> 
            {/* this is for the bold text */}
            <div className=' font-bold text-5xl'>
            Transform the way you manage projects with ProjectWhiz!
            </div>  
            {/* this is for the semi bold text */}
            <div className=' font-light '>
            Say goodbye to complex project management tools and hello to simplicity, efficiency, and success.
            </div>
            {/* this is for the email get started thingy */}
            <div className="flex gap-4 w-full mt-5">
                <input type="email" placeholder="Enter your email" className=" border border-gray-300 rounded-xl px-3 py-2 flex-grow" />
                <a href="#" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                <span>Get Started</span>
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </a>
            </div>

        </div>
        <div className='w-1/2'>
            <img src= {bannerimg} alt="bannerimg" className='px-16 py-10'/>
        </div>

    
    </div>

  )
}

export default Banner