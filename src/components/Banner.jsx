import React from 'react'
import { bannerimg } from '../assets'

function Banner() {
  return (
    // this is the outer most div
    <div className='px-16  col-span-2 flex'>
        {/* this is for the left hand side outer div */}
        <div className='flex flex-col gap-4 w-1/2 items-center px-20 py-20'> 
            {/* this is for the bold text */}
            <div className=' font-bold text-5xl'>
            Transform the way you manage projects with ProjectWhiz.
            </div>  
            {/* this is for the semi bold text */}
            <div className=' font-light '>
            Our intuitive platform streamlines task organization, fosters seamless collaboration among team members, and empowers you to achieve your project milestones with ease. Say goodbye to complex project management tools and hello to simplicity, efficiency, and success.
            </div>

        </div>
        <div className='w-1/2'>
            <img src= {bannerimg} alt="bannerimg" className=' px-12 py-12'/>
        </div>
    </div>
  )
}

export default Banner