import React from 'react';
import { analytics, timetracking, automation } from '../assets';

function Features() {
  return (
    <div id='features' className='py-16 px-28 '>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Features that will Boost Your Workflow</h2>
      </div>

      <div className='grid grid-cols-3 gap-10 m-5'>
        
     {/* First feature */}

      <div className=' rounded-3xl flex flex-col items-center'>
        <img src={timetracking} alt='Time Tracking' className='p-6' />
        <div className='p-6 text-center'>
          <h3 className='font-bold text-2xl text-slate-700 mb-4 border-b border-slate-300 pb-1'>Integrated Time Tracking</h3>
          <p className='text-justify text-lg px-2 font-light'>Track time efficiently. Monitor project progress, allocate resources, and improve productivity with integrated time tracking.</p>
        </div>
      </div>


     {/* Second feature */}

      <div className=' rounded-3xl flex flex-col items-center'>
        <img src={automation} alt='Automation' className='p-6' />
        <div className='p-6 text-center'>
          <h3 className='font-bold text-2xl text-slate-700 mb-4 border-b border-slate-300 pb-1'>Advanced Task Automation</h3>
          <p className='text-justify text-lg px-2 font-light'>Automate tasks effortlessly. Simplify repetitive work, save time, and ensure consistency across projects with powerful automation tools.</p>
        </div>
      </div>
      
      
      {/* Third feature */}
      <div className=' rounded-3xl flex flex-col items-center'>
        <img src={analytics} alt='Analytics' className='p-6' />
        <div className='p-6 text-center'>
          <h3 className='font-bold text-2xl text-slate-700 mb-4 border-b border-slate-300 pb-1'>Robust Reporting and Analytics</h3>
          <p className='text-justify text-lg px-2 font-light'>Gain insights easily. Generate custom reports, visualize project data, and track key performance indicators for informed decision-making.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Features;
