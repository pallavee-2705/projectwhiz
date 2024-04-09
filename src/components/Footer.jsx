import React from 'react';
import { footerlogo } from '../assets';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-blue-950 text-slate-50 px-4 md:px-12'>
      <div className='py-4 mt-10 flex flex-col md:flex-row justify-between items-center text-slate-50 w-full'>
        {/* Left side */}
        <div className="mb-6 md:mb-0 md:mr-auto">
          <Link to="/">
            <img src={footerlogo} alt="footerlogo" className='h-14' />
          </Link>
        </div>

        {/* Right side */}
        <div className='flex flex-col md:flex-row items-center gap-1 md:gap-8'>
          {/* About */}
          <Link to="/about" className="mb-4 md:mb-0">
            About
          </Link>
          {/* Contact */}
          <Link to="/contact" className="mb-4 md:mb-0">
            Contact
          </Link>
          {/* Login */}
          <a href='/login'>
            Login
          </a>
        </div>
      </div>
      <hr className="border-t border-white py-1 mt-5" />
      <div className='flex flex-col md:flex-row justify-between items-center pb-10'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-8 font-extralight text-sm mb-4 md:mb-0'>
          {/* Copyright */}
          <div>
            Copyright @2024 ProjectWhiz
          </div>
          {/* Privacy Policy */}
          <Link to="/privacypolicy">
            Privacy policy
          </Link>
          {/* Terms */}
          <Link to="/terms">
            Terms
          </Link>
        </div>
        {/* Socials */}
        <div className='flex gap-4'>
          {/* Instagram */}
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram style={{ fontSize: '20px' }} />
          </a>
          {/* Facebook */}
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook style={{ fontSize: '20px' }}  />
          </a>
          {/* Twitter */}
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter style={{ fontSize: '20px' }}  />
          </a>
          {/* LinkedIn */}
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin style={{ fontSize: '20px' }}  />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
