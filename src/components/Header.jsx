import React from 'react';
import { headerlogo } from '../assets';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  const scrollToWhyProjectWhiz = () => {
    const whyProjectWhizSection = document.getElementById('whyprojectwhiz');
    if (whyProjectWhizSection) {
      window.scrollTo({
        top: whyProjectWhizSection.offsetTop,
        behavior: 'smooth' // Add smooth scroll behavior
      });
    }
  };
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      window.scrollTo({
        top: featuresSection.offsetTop,
        behavior: 'smooth' // Add smooth scroll behavior
      });
    }
  };
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
                <a href="#" onClick={scrollToWhyProjectWhiz} className="text-gray-600 hover:text-gray-900 hover:scale-105">
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
              <a href="#" onClick={scrollToFeatures} className="text-gray-600 hover:text-gray-900 hover:scale-105">
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
              <a href="/login" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                <span className="inline-block transition-transform duration-300 hover:scale-105">
                  Login
                </span>
              </a>
          </li>
  
            <li>
              <a href="/login" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                <span>Get Started</span>
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
