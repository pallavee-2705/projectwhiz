import React, { useState } from 'react';
import { headerlogo } from '../assets';
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header({ handleGetStarted, handleLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToWhyProjectWhiz = () => {
    const whyProjectWhizSection = document.getElementById('whyprojectwhiz');
    if (whyProjectWhizSection) {
      window.scrollTo({
        top: whyProjectWhizSection.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close the menu after clicking on a link
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      window.scrollTo({
        top: featuresSection.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close the menu after clicking on a link
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={headerlogo} alt="Logo" className="h-16" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center items-center">
            <ul className="flex space-x-6 ml-auto items-center">
              <li>
                <a href="#" onClick={scrollToWhyProjectWhiz} className="text-gray-600 hover:text-gray-900 hover:scale-105">
                  Why ProjectWhiz?
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 hover:scale-105">
                  About
                </Link>
              </li>
              <li>
                <a href="/login" className="text-gray-600 hover:text-gray-900 hover:scale-105" onClick={handleLogin}>
                  Login
                </a>
              </li>
              <li>
                <a href="/login" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" onClick={handleGetStarted}>
                  Get Started
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        <ul className={`flex ${isOpen ? 'flex-col mt-4' : 'hidden md:flex'} md:hidden space-y-2`}>
          <li>
            <a href="#" onClick={scrollToWhyProjectWhiz} className="text-gray-600 hover:text-gray-900 hover:scale-105">
              Why ProjectWhiz?
            </a>
          </li>
          <li>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 hover:scale-105">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 hover:scale-105">
              About
            </Link>
          </li>
          <li>
            <a href="/login" className="text-gray-600 hover:text-gray-900 hover:scale-105" onClick={handleLogin}>
              Login
            </a>
          </li>
          <li>
            <a href="/login" className="text-white bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-2 font-semibold rounded-xl flex items-center justify-center relative transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg" onClick={handleGetStarted}>
              Get Started
              <span className="ml-2">
                <FaArrowRight />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
