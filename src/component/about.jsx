import React from 'react'
import Tools from './tools'

export default function Abut() {
  return (
    <>
    <div className='w-2/3 mt-10 mb-20 mx-auto  bg-[#2f2e31] rounded-2xl text-white'>
    <p className="text-lg px-11 py-8">
    Welcome! I'm Mohammed , a professional web developer with a knack for crafting
    <br/>
    visually stunning and highly functional websites. Combining creativity and
    <br/>
     technical expertise,I transform your vision into digital masterpiece that excels
    <br/>
     in both appearance and performance.
  </p>
  <div className="flex space-x-6 md:space-x-12 px-11 pb-8">
    <div>
      <p className="text-4xl font-bold">3+</p>
      <p className="text-sm text-gray-400">Project done</p>
    </div>
    <div>
      <p className="text-4xl font-bold">1+</p>
      <p className="text-sm text-gray-400">Years of experience</p>
    </div>
  </div>

    </div>

    <Tools />
    </>

  )
}
