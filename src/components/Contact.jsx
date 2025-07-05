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
    <section className="flex flex-col w-2/3 mx-auto my-20 text-white mt-44 lg:flex-row lg:justify-between" 
             aria-labelledby="contact-heading"
             itemScope 
             itemType="https://schema.org/ContactPage">
      
      {/* Contact Information */}
      <div className="flex flex-col mt-12 space-y-4 md:w-1/3">
        <header>
          <h2 id="contact-heading" className="text-4xl font-bold">
            Contact Me for <span className="text-sky-400">Collaboration</span>
          </h2>
          <p className="pt-4 text-lg text-gray-400" itemProp="description">
            Reach out today to discuss your project needs and start collaborating
            on something amazing!
          </p>
        </header>
        
        {/* Social Links */}
        <div className="flex pt-20 space-x-1" role="list" aria-label="Social media links">
          <a href="https://github.com/Mohammed972001" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
             aria-label="Visit Mohammed's GitHub profile"
             itemProp="url"
             role="listitem">
            <i className="fab fa-github group-hover:text-black" aria-hidden="true"></i>
          </a>
          
          <a href="https://www.linkedin.com/in/mohammed-elsayed-174990240" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
             aria-label="Visit Mohammed's LinkedIn profile"
             itemProp="url"
             role="listitem">
            <i className="fab fa-linkedin group-hover:text-black" aria-hidden="true"></i>
          </a>
          
          <a href="https://wa.me/0103736539" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
             aria-label="Contact Mohammed via WhatsApp"
             itemProp="url"
             role="listitem">
            <i className="fab fa-whatsapp group-hover:text-black" aria-hidden="true"></i>
          </a>
          
          <a href="https://facebook.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center p-3 border rounded-lg cursor-pointer border-zinc-700 hover:bg-white group focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
             aria-label="Visit Mohammed's Facebook profile"
             itemProp="url"
             role="listitem">
            <i className="fab fa-facebook group-hover:text-black" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 lg:ml-12">
        <form ref={form} 
              onSubmit={sendEmail} 
              className="flex flex-col my-10 space-y-4 max-w-md mx-auto lg:mx-0"
              aria-label="Contact form">
          <header>
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Get In Touch
            </h3>
          </header>
          
          <div className="flex space-x-4">
            {/* Name Input */}
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full p-2 mt-1 text-white rounded-md outline-none bg-[#2f2e31] focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                required
                aria-required="true"
              />
            </div>
            
            {/* Email Input */}
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                className="w-full p-2 mt-1 text-white rounded-md outline-none bg-[#2f2e31] focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                required
                aria-required="true"
              />
            </div>
          </div>
          
          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-red-400" aria-label="required">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full p-2 mt-1 text-white rounded-md outline-none bg-[#2f2e31] focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors resize-vertical"
              required
              aria-required="true"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-sky-400 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-medium"
            aria-label="Send message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 