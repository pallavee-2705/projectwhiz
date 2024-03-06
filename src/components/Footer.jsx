import React from 'react';
import { footerlogo } from '../assets';

function Footer() {
  return (
    <div className='bg-blue-950 text-slate-50'>
      <div className='py-12 px-10 mt-20 flex justify-between items-center text-slate-50 w-full'>
            {/* Left side */}
            <div>
                    <img src={footerlogo} alt="footerlogo" className='h-14' />
                </div>

                {/* Right side */}
                <div className='flex font-light gap-12'>
                    {/* About */}
                    <div>About</div>
                    {/* Contact */}
                    <div>Contact</div>
                    {/* Login */}
                    <div>Login</div>
                </div>
      </div>
      <div className="bg-white h-0.5 w-full"></div>
      <div className='px-10 py-4'>
        here there will be socials
      </div>
    </div>
  );
}

export default Footer;
