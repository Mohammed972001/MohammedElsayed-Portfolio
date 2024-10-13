import React from "react";

export default function MyWork() {
  return (
    <div className="w-2/3 my-10 mx-auto  text-white mt-10">
      <h1 className="text-4xl ml-3  py-5 text-white">
        My portfolio highlights{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-fit  ">
        <div className="flex flex-col  rounded-xl bg-[#2f2e31]  p-3 my-6 mx-3">
          <img className="w-full p- rounded-lg" src="../assets/project-1.jpg" />
          <p className="py-3 text-xl text-start">Online book store</p>
          <div className="flex w-full">
            <div className="w-1/2 flex space-x-5">
               <p className="  px-2 py-1 rounded-lg shadow-xl border border-neutral-700"> Api </p>
               <p className="  px-2 py-1 rounded-lg border border-neutral-500"> Api </p>
               </div>
            <div  className="w-1/2 flex justify-end  space-x-2 ">
            <a
            target="_blank"
            href="https://github.com/Mohammed972001/book-store/"
            className="bg-sky-400 w-fit px-3 py-1 rounded-lg    ">
             code
          </a>
          <a
          target="_blank"
          href="https://book-store-frontend-navy.vercel.app/"
          className="bg-sky-400 w-fit px-3 py-1 rounded-lg  ">
           live
        </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31]  p-3 my-6">
          <img className="w-full p- rounded-lg" src="../assets/project-1.jpg" />
          <p className="py-3 text-xl text-start">Online book store</p>
        </div>
        <div className="flex flex-col rounded-2xl bg-[#2f2e31]  p-3 my-6 mx-3">
          <img className="w-full p- rounded-lg" src="../assets/project-1.jpg" />
          <p className="py-3 text-xl text-start">Online book store</p>
        </div>
      </div>
    </div>
  );
}
