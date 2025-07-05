import { useState } from 'react';
import logo from "/images/logo.svg";
import { NAV_LINKS } from '../utils/constants.js';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-[#18181b]/95 backdrop-blur-sm border-b border-gray-800'>
      <nav className='flex flex-row justify-between items-center w-full px-5 py-3 h-14 md:px-20' 
           role="navigation" 
           aria-label="Main navigation">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" aria-label="Mohammed Portfolio - Go to homepage">
            <img src={logo} 
                 alt="Mohammed Portfolio Logo" 
                 className="h-8 w-auto"
                 width="32"
                 height="32" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden sm:flex items-center space-x-1 bg-[#2f2e31] border-1 rounded-md h-fit text-gray-100 px-1 py-1'>
          {NAV_LINKS.slice(0, 3).map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className='px-4 py-1 transition duration-300 ease-in-out rounded-lg hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none'
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center sm:hidden">
          <button 
            className="text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu">
            <svg className="w-6 h-6" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24" 
                 xmlns="http://www.w3.org/2000/svg"
                 aria-hidden="true">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}>
              </path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" 
               className="absolute top-14 left-0 right-0 bg-[#2f2e31] sm:hidden shadow-lg border-t border-gray-700"
               role="menu"
               aria-label="Mobile navigation menu">
            {NAV_LINKS.slice(0, 3).map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className='block px-4 py-3 text-gray-100 transition duration-300 ease-in-out hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none border-b border-gray-700 last:border-b-0'
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
} 