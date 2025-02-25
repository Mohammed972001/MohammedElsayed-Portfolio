import React from 'react'

export default function Footer() {
  return (
    <footer className='w-2/3 mt-8 mb-20 mx-auto  flex flex-col md:flex-row justify-between  '>
       <div className='md:w-1/3 mt-6 '>
       <h1 className='text-5xl text-white ' >Let's work together today!</h1>
       <button className="bg-sky-400 w-fit px-3 py-2 rounded-xl  mx-auto mt-10 ">
       start project
      
     </button>
       </div>

       <div className='md:w-1/3 flex space-x-14 md:space-x-44 text-white md:mr-28 mt-14 md:mt-0 '>
        
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Sitemap</h2>
          <ul className="space-y-2 text-gray-400">
          <li>
            <a href="#" className="hover:text-white">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Work</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Contact me</a>
          </li>
        </ul>
        </div>
        
        {/* Socials Column */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Socials</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
            <a href="https://github.com/Mohammed972001" target="_blank" className="hover:text-white">GitHub</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/mohammed-elsayed-174990240" target="_blank" className="hover:text-white">LinkedIn</a>
            </li>
            <li>
            <a href="https://wa.me/0103736539" target="_blank" className="hover:text-white">Twitter X</a>
            </li>
            <li>
            <a href="https://facebook.com" target="_blank" className="hover:text-white">Facebook</a>
            </li>
          </ul>
        </div>
        
        </div>
     
    </footer>
  )
}
