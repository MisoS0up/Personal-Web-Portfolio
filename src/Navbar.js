import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-contents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="home" smooth={true} duration={500}>
              <span className='text-gray-800 font-bold text-2xl'>joshua.dev</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-auto">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end md:hidden">
          <div className="ml-auto">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>




        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
