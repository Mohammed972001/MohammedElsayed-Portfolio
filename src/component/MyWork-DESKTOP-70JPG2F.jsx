import React from "react";

export default function MyWork() {
  return (
    <div className="w-2/3 mx-auto my-10 mt-10 text-white">
      <h1 className="py-5 ml-3 text-4xl text-white">
        My portfolio highlights{" "}
      </h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 h-fit">
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full rounded-lg p-" src="../assets/project-2.jpg" />
          <p className="py-3 text-xl text-start">Book store</p>
          <div className="flex w-full">
            <div className="flex w-1/2 space-x-5">
              <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
                Back End
              </p>
              <p className="px-2 py-1 border rounded-lg border-neutral-500">
                Api
              </p>
            </div>
            <div className="flex justify-end w-1/2 space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/book-store/"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://book-store-frontend-navy.vercel.app/"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full rounded-lg p-" src="../assets/project-4.jpg" />
          <p className="py-3 text-xl text-start">Landing page</p>
          <div className="flex w-full">
            <div className="flex w-1/2 space-x-5">
              <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
                css
              </p>
            </div>
            <div className="flex justify-end w-1/2 space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/bakery-landingPage"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://mohammed972001.github.io/bakery-landingPage/"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full rounded-lg p-" src="../assets/project-1.jpg" />
          <p className="py-3 text-xl text-start">Dictionary web app</p>
          <div className="flex w-full">
            <div className="w-[65%] flex space-x-4">
              <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
                Api
              </p>
              <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
                Dark mood
              </p>
            </div>
            <div className="flex justify-end w-1/2 space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/dictionary-app"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://dictionary-app-zr1h.vercel.app/"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
          <img className="w-full rounded-lg p-" src="../assets/code flow.jpeg" />
          <p className="py-3 text-xl text-start">Code Flow Company Website</p>
          <div className="flex w-full">
            <div className="w-[65%] flex space-x-4">
              <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
                Next.js
              </p>
              <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
                Animation
              </p>
            </div>
            <div className="flex justify-end w-1/2 space-x-2">
              <a
                target="_blank"
                href="https://github.com/Mohammed972001/code-flow"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                code
              </a>
              <a
                target="_blank"
                href="https://code-flow-drab.vercel.app/"
                className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
              >
                live
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
        <img className="w-full rounded-lg p-" src="../assets/eksab.jpg" />
        <p className="py-3 text-xl text-start">Eksab landingPage</p>
        <div className="flex w-full">
          <div className="w-[65%] flex space-x-4">
            <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
              Next.js
            </p>
            <p className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
              MUI
            </p>
          </div>
          <div className="flex justify-end w-1/2 space-x-2">
            <a
              target="_blank"
              href="https://github.com/Mohammed972001/Eksab-Landingpage"
              className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
            >
              code
            </a>
            <a
              target="_blank"
              href="https://eksab-landingpage.vercel.app/home"
              className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
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
