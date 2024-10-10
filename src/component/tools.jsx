import React from 'react'

export default function Tools() {
  return (
    <div className='w-2/3 my-10 mx-auto   rounded-2xl text-white mt-10'>
    <h1 className='text-4xl  py-5 text-white'>Essential Tools i use </h1>

    <p class="text-sm text-gray-400">
    Discover the powerful tools and technologies I use to create
    <br/>
     exceptional, high-performing websites & applications.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 my-10">
    
    <div class="flex items-center   p-4 rounded-2xl border border-zinc-700">
      <img  src="/public/assets/figma.svg" alt="Figma" class="w-10 h-10 mr-4"/>
      <div>
        <p class="text-lg font-semibold">Figma</p>
        <p class="text-sm text-gray-400">Design tool</p>
      </div>
    </div>


    <div class="flex items-center   p-4 rounded-2xl border border-zinc-700">
      <img src="/public/assets/css3.svg" alt="CSS" class="w-10 h-10 mr-4"/>
      <div>
        <p class="text-lg font-semibold">CSS</p>
        <p class="text-sm text-gray-400">User Interface</p>
      </div>
    </div>

    <div class="flex items-center  p-4 rounded-2xl border border-zinc-700">
      <img src="/public/assets/javascript.svg" alt="JavaScript" class="w-10 h-10 mr-4"/>
      <div>
        <p class="text-lg font-semibold">JavaScript</p>
        <p class="text-sm text-gray-400">Interaction</p>
      </div>
    </div>


    <div class="flex items-center  p-4 rounded-2xl border border-zinc-700">
      <img src="/public/assets/nodejs.svg" alt="NodeJS" class="w-10 h-10 mr-4"/>
      <div>
        <p class="text-lg font-semibold">NodeJS</p>
        <p class="text-sm text-gray-400">Web Server</p>
      </div>
    </div>

    <div class="flex items-center  p-4 rounded-2xl border border-zinc-700">
    <img src="/public/assets/expressjs.svg" alt="NodeJS" class="w-10 h-10 mr-4"/>
    <div>
      <p class="text-lg font-semibold">expreesjs</p>
      <p class="text-sm text-gray-400">Node Framework</p>
    </div>
  </div>


    <div class="flex items-center   p-4 rounded-2xl border border-zinc-700">
      <img src="/public/assets/mongodb.svg" alt="MongoDB" class="w-10 h-10 mr-4"/>
      <div>
        <p class="text-lg font-semibold">MongoDB</p>
        <p class="text-sm text-gray-400">Database</p>
      </div>
    </div>
    
    <div class="flex items-center  p-4   rounded-2xl border border-zinc-700">
    <img src="/public/assets/tailwindcss.svg" alt="NodeJS" class="w-10 h-10 mr-4"/>
    <div>
      <p class="text-lg font-semibold">T ailwindcss</p>
      <p class="text-sm text-gray-400">User Interface</p>
    </div>
  </div>


    <div class="flex items-center  p-4 rounded-2xl border border-zinc-700">
      <img src="/public/assets/react.svg" alt="React" class="w-10 h-10 mr-4"/>
      <div>
        <p class="text-lg font-semibold">React</p>
        <p class="text-sm text-gray-400">Framework</p>
      </div>
    </div>
  </div>

    </div>
      
   
  )
}
