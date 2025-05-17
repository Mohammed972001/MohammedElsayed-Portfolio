import { useRef } from "react";
import emailjs from "emailjs-com";
import { SOCIAL_LINKS } from "../utils/constants.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_eu57bje', 'template_wql9eth', form.current, '8_qBQOvfBLXiz8nLh')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex flex-col w-2/3 mx-auto my-20 text-white mt-44 lg:flex-row lg:justify-between">
      <div className="flex flex-col mt-12 space-y-4 md:w-1/3">
        <h1 className="text-4xl">Contact me for collaboration</h1>
        <p className="pt-4 text-lg text-gray-400">
          Reach out today to discuss your project needs and start collaborating
          on something amazing!
        </p>
        <div className="flex pt-20 space-x-1">
          <a href="https://github.com/Mohammed972001" target="_blank" rel="noreferrer" className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group">
            <i className="fab fa-github group-hover:text-black"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-elsayed-174990240" target="_blank" rel="noreferrer" className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group">
            <i className="fab fa-linkedin group-hover:text-black"></i>
          </a>
          <a href="https://wa.me/0103736539" target="_blank" rel="noreferrer" className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group">
            <i className="fab fa-whatsapp group-hover:text-black"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group">
            <i className="fab fa-facebook group-hover:text-black"></i>
          </a>
        </div>
      </div>

      {/* Form Section */}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col my-10 space-y-4 m:w-[45%]">
        <div className="flex space-x-4">
          {/* Name Input */}
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 mt-1 text-white rounded-md outline-none bg-[#2f2e31] focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 mt-1 text-white rounded-md outline-none bg-[#2f2e31] focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full h-40 p-2 mt-1 text-white rounded-md outline-none bg-[#2f2e31] focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-sky-400 hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 