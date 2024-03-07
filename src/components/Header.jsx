import React from 'react';
import { headerlogo } from '../assets';
import { FaArrowRight, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoogleLogin} from '@react-oauth/google';
import { GoogleLogout } from 'react-google-login';
import { useState } from 'react';


function Header() {
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-12">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center"> 
            <a href="/" className="flex items-center">
              <img src={headerlogo} alt="Logo" className="h-16" />
             
            </a>
            <ul className="flex space-x-6 ml-4"> 
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                <span className="inline-block transition-transform duration-300 hover:scale-105">
                  Why ProjectWhiz?
                </span>
                </a>
              </li>
              <li>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                <span className="inline-block transition-transform duration-300 hover:scale-105">
                  Blog
                </span>
              </Link>
              </li>
              <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                <span className="inline-block transition-transform duration-300 hover:scale-105">
                  Features
                </span>
              </a>
              </li>
            </ul>
          </div>
          <ul className="flex items-center space-x-6"> 
          <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                <span className="inline-block transition-transform duration-300 hover:scale-105">
                  About
                </span>
              </Link>
          </li>
          <li>
              {!isAuthenticated ? (
                <GoogleLogin
                clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
              ) : (
                <GoogleLogout
                  clientId="907017828098-i1iouhd7u88ad7j4d9ic3selsc5f86us.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={handleLogout}
                />
              )}
            </li>
            <li>
              {!isAuthenticated ? (
                <a href="#" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                  <span>Get Started</span>
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              ) : (
                <span></span>
              )}
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
