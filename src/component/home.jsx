import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

export default function Home() {
  return (
    <div className=" w-4/5 min-h-scree flex flex-wrap md:flex-nowrap lg:mx-auto my-24">
      <div className="w-full md:w-1/2 flex flex-col md:ml-20 ">
        <p className="text-4xl lg:text-6xl text-white mt-6  text-center ">
          Building Scalable
          <br />
          modern websites
          <br />
          for the futre
        </p>
        <button className="bg-sky-400 w-fit px-3 py-2 rounded-xl flex mx-auto mt-14 ">
          Download cv
          <HiOutlineDownload className="ml-3 mt-1" />
        </button>
      </div>
  
      <div className="w-2/3 md:w-1/4  rounded-2xl  mt-8 md:mt-0 mx-auto ">
        <img src="../assets/pic-removebg.png" alt="not found" 
        className="w-full h-96  rounded-xl object-cover  " />
      </div>
    </div>

    
  );
}
