import React from "react";

export default function MyWork() {
  return (
    <div className="w-2/3 my-10 mx-auto text-white mt-10">
      <h1 className="text-4xl ml-3 py-5 text-white">
        My portfolio highlights{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-fit">
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full p- rounded-lg" src="../assets/project-2.jpg" />
          <p className="py-3 text-xl text-start">Book store</p>
          <div className="flex w-full">
            <div className="w-1/2 flex space-x-5">
              <p className="px-2 py-1 rounded-lg shadow-xl border border-neutral-700">
                Back End
              </p>
              <p className="px-2 py-1 rounded-lg border border-neutral-500">
                Api
              </p>
            </div>
            <div className="w-1/2 flex justify-end space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/book-store/"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://book-store-frontend-navy.vercel.app/"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full p- rounded-lg" src="../assets/project-4.jpg" />
          <p className="py-3 text-xl text-start">Landing page</p>
          <div className="flex w-full">
            <div className="w-1/2 flex space-x-5">
              <p className="px-2 py-1 rounded-lg shadow-xl border border-neutral-700">
                css
              </p>
            </div>
            <div className="w-1/2 flex justify-end space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/bakery-landingPage"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://mohammed972001.github.io/bakery-landingPage/"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full p- rounded-lg" src="../assets/project-1.jpg" />
          <p className="py-3 text-xl text-start">Dictionary web app</p>
          <div className="flex w-full">
            <div className="w-[65%] flex space-x-4">
              <p className="px-2 py-1 rounded-lg shadow-xl border border-neutral-700">
                Api
              </p>
              <p className="px-2 py-1 rounded-lg shadow-xl border border-neutral-700">
                Dark mood
              </p>
            </div>
            <div className="w-1/2 flex justify-end space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/dictionary-app"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://dictionary-app-zr1h.vercel.app/"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full p- rounded-lg" src="../assets/code flow.jpeg" />
          <p className="py-3 text-xl text-start">Code Flow Company Website</p>
          <div className="flex w-full">
            <div className="w-[65%] flex space-x-4">
              <p className="px-2 py-1 rounded-lg shadow-xl border border-neutral-700">
                Next.js
              </p>
              <p className="px-2 py-1 rounded-lg shadow-xl border border-neutral-700">
                Animation
              </p>
            </div>
            <div className="w-1/2 flex justify-end space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/code-flow"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://code-flow-drab.vercel.app/"
                className="bg-sky-400 w-fit px-3 py-1 rounded-lg"
              >
                live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
