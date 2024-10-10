import React from 'react';
import logo from "/images/logo.svg";

export default function Navbar() {
  return (
    
    <div className='fixed top-0 left-0 w-full z-50 h-14 flex flex-row justify-between py-3 px-5 md:px-20'>
      <img src={logo} alt="logo" className="" />
      <div className='hidden sm:flex items-center space-x-1 bg-[#2f2e31] border-1 rounded-md h-fit text-gray-100 px-1 py-1'>
      <a href="#home" className='px-4 py-1 rounded-lg hover:bg-white hover:text-black transition duration-900 ease-in-out'>Home</a>
      <a href="#about" className='px-4 py-1 rounded-lg hover:bg-white hover:text-black transition duration-900 ease-in-out'>About</a>
      <a href="#work" className='px-4 py-1 rounded-lg hover:bg-white hover:text-black transition duration-900 ease-in-out'>Work</a>
     
    </div>

      <div className="sm:hidden flex items-center">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <a href="#contact" className='text-black bg-white rounded-xl p-1 px-2 '>Contact Me</a>
    </div>
  );
}
