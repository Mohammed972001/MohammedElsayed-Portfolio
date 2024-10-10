import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <div className="w-2/3 my-20  mx-auto text-white mt-44 flex justify-between">
      <div className="flex flex-col w-1/3 mt-12   space-y-4">
        {" "}
        {/* Added space-y-4 for consistent spacing */}
        <h1 className="text-4xl ">Contact me for collaboration</h1>
        <p className="text-lg text-gray-400 pt-4 ">
          Reach out today to discuss your project needs and start collaborating
          on something amazing!
        </p>
        {/* Social media icons, optional */}
        <div className="flex space-x-1  pt-20 ">
        <div className="flex items-center p-3 cursor-pointer
         rounded-lg border border-zinc-700 hover:bg-white group">

        <i className="fab fa-github group-hover:text-black"></i>
      </div>
          <div class="flex items-center cursor-pointer
            p-3 rounded-lg border border-zinc-700 hover:bg-white group">

            <i className="fab fa-linkedin group-hover:text-black"></i>
          </div>
          <div class="flex items-center cursor-pointer
            p-3 rounded-lg border border-zinc-700 hover:bg-white group">

            <i className="fab fa-twitter group-hover:text-black"></i>
          </div>
          <div class="flex items-center cursor-pointer
             p-3 rounded-lg border border-zinc-700 hover:bg-white group">
            <i className="fab fa-facebook group-hover:text-black "></i>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form className="w-[45%] my-10  flex flex-col space-y-4  ">
        <div className="flex space-x-4">
          {/* Name Input */}
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 mt-1 bg-[#2f2e31] rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 mt-1 bg-[#2f2e31] rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full h-40 p-2 mt-1 bg-[#2f2e31] rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-4 bg-sky-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
