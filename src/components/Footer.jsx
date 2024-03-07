import React from 'react';
import { footerlogo } from '../assets';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='bg-blue-950 text-slate-50 px-12'>
      <div className='py-4 mt-20 flex justify-between items-center text-slate-50 w-full'>
            {/* Left side */}
            <div>
              <a href="/" className="cursor-pointer">
                    <img src={footerlogo} alt="footerlogo" className='h-14' />
              </a>
                </div>

                {/* Right side */}
                <div className='flex font-light gap-8'>
                    {/* About */}
                    <div>
                      <Link to="/about">
                      About
                      </Link>
                    </div>
                    {/* Contact */}
                    <div>
                    <Link to="/contact">
                      Contact
                      </Link>
                    </div>
                    {/* Login */}
                    <div>
                      <a href='/login'>
                      Login
                      </a>
                    </div>
                </div>
      </div>
      <hr className="border-t border-white py-1 mt-5" />
      <div className='flex justify-between items-center pb-10'>
      <div className='flex  gap-8 font-extralight text-sm'>
            <div>
              {/* copyright */}
              Copyright @2024 ProjectWhiz
            </div>
            {/* privacy policy */}
            <div>
            <Link to="/privacypolicy">
                          Privacy policy
            </Link>
            </div>
            {/* terms */}
            <div>
            <Link to="/privacypolicy">
            Terms
            </Link>
            </div>

      </div>
      {/* socials */}
      <div className='flex gap-4'>
        {/* instagram */}
         <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram style={{ fontSize: '20px' }} />
          </a>
        {/* facebook */}
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook style={{ fontSize: '20px' }}  />
          </a>
          {/* twitter */}
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter style={{ fontSize: '20px' }}  />
          </a>
          {/* linkedin */}
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin style={{ fontSize: '20px' }}  />
          </a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
