import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

export default function Home() {
  return (
   <div className="w-full lg:w-4/5 min-h-screen flex flex-col md:flex-row mt-20 lg:mt-0 lg:mx-auto ">
  <div className="w-full md:w-1/2 flex flex-col justify-center md:ml-14">
    <p className="text-4xl lg:text-6xl text-white mt-6 text-center ">
      Building Scalable
      
      modern websites
      
      for the future
    </p>
    <a
      href="/assets/Mohammed Elsayed CV.pdf" 
      download="Mohammed_Elsayed_CV.pdf"
      className="bg-sky-400 w-fit px-3 py-2 rounded-xl flex mx-auto mt-14"
    >
      Download CV
      <HiOutlineDownload className="ml-3 mt-1" />
    </a>
  </div>

  <div className="w-3/4 md:w-1/4 rounded-2xl mx-auto mt-8 md:mt-0 flex justify-center items-center">
    <img 
      src="/assets/pic-removebg.png" 
      alt="not found" 
      className="w-full h-96 rounded-xl object-cover lg:mr-28"
    />
  </div>
</div>


    
  );
}
