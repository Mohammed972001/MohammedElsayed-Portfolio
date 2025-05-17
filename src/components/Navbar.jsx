import { useState } from 'react';
import logo from "/images/logo.svg";
import { NAV_LINKS } from '../utils/constants.js';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 z-50 flex flex-row justify-between w-full px-5 py-3 h-14 md:px-20'>
      <img src={logo} alt="logo" />
      
      {/* Desktop Navigation */}
      <div className='hidden sm:flex items-center space-x-1 bg-[#2f2e31] border-1 rounded-md h-fit text-gray-100 px-1 py-1'>
        {NAV_LINKS.slice(0, 3).map(link => (
          <a 
            key={link.id} 
            href={`#${link.id}`} 
            className='px-4 py-1 transition duration-300 ease-in-out rounded-lg hover:bg-white hover:text-black'
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="flex items-center sm:hidden">
        <button className="text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[#2f2e31] sm:hidden">
          {NAV_LINKS.slice(0, 3).map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className='block px-4 py-2 text-gray-100 transition duration-300 ease-in-out hover:bg-white hover:text-black'
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <a href="#contact" className='p-1 px-2 text-black bg-white rounded-xl'>Contact Me</a>
    </nav>
  );
} 