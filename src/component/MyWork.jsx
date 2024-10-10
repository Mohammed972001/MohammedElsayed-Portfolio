import React from 'react'

export default function MyWork() {
  return (
    <div className='w-2/3 my-10 mx-auto  text-white mt-10'>
    <h1 className='text-4xl ml-3  py-5 text-white'>My portfolio highlights </h1>
    <div className='grid grid-cols-1 md:grid-cols-3 w-full h-fit  '>
    <div className='flex flex-col  rounded-xl bg-[#2f2e31] h-96 p-3 my-6 mx-3' >
    <img 
    className='w-full p- rounded-lg'
    src='/public/assets/project-1.jpg' />
    <p
    className='py-3 text-xl text-start'
    >Online book store</p>

    </div>
    <div className='flex flex-col rounded-xl bg-[#2f2e31] h-96 p-3 my-6' >
    <img 
    className='w-full p- rounded-lg'
    src='/public/assets/project-1.jpg' />
    <p
    className='py-3 text-xl text-start'
    >Online book store</p>

    </div>
    <div className='flex flex-col rounded-2xl bg-[#2f2e31] h-96 p-3 my-6 mx-3' >
    <img 
    className='w-full p- rounded-lg'
    src='/public/assets/project-1.jpg' />
    <p
    className='py-3 text-xl text-start'
    >Online book store</p>

    </div>
    
    
    </div>
    </div>
  )
}
