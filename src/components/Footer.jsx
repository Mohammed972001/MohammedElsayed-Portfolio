import { NAV_LINKS, SOCIAL_LINKS } from '../utils/constants.js';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between w-2/3 mx-auto mt-8 mb-20 md:flex-row'
            role="contentinfo"
            aria-label="Site footer">
      
      {/* Call to Action Section */}
      <section className='mt-6 md:w-1/3' aria-labelledby="cta-heading">
        <header>
          <h2 id="cta-heading" className='text-5xl text-white font-bold leading-tight'>
            Let&apos;s Work <span className="text-sky-400">Together</span> Today!
          </h2>
        </header>
        
        <p className="text-lg text-gray-400 mt-4 mb-6">
          Ready to bring your ideas to life? Start your next project with me.
        </p>
        
        <button className="px-6 py-3 mx-auto mt-10 bg-sky-400 w-fit rounded-xl hover:bg-sky-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900 font-medium"
                aria-label="Start a new project">
          Start Project
        </button>
      </section>

      {/* Navigation Links Section */}
      <nav className='flex mt-14 text-white md:w-1/3 space-x-14 md:space-x-44 md:mr-28 md:mt-0'
           aria-label="Footer navigation">
        
        {/* Sitemap Column */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-semibold">Sitemap</h3>
          <ul className="space-y-2 text-gray-400" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.id} role="listitem">
                <a href={`#${link.id}`} 
                   className="hover:text-white transition-colors focus:text-white focus:outline-none"
                   aria-label={`Navigate to ${link.label} section`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Social Links Column */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-semibold">Connect</h3>
          <ul className="space-y-2 text-gray-400" role="list">
            <li role="listitem">
              <a href={SOCIAL_LINKS[0].url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white transition-colors focus:text-white focus:outline-none"
                 aria-label="Visit Mohammed's GitHub profile">
                GitHub
              </a>
            </li>
            <li role="listitem">
              <a href={SOCIAL_LINKS[1].url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white transition-colors focus:text-white focus:outline-none"
                 aria-label="Visit Mohammed's LinkedIn profile">
                LinkedIn
              </a>
            </li>
            <li role="listitem">
              <a href="https://twitter.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white transition-colors focus:text-white focus:outline-none"
                 aria-label="Visit Mohammed's Twitter profile">
                Twitter X
              </a>
            </li>
            <li role="listitem">
              <a href="https://wa.me/0103736539" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white transition-colors focus:text-white focus:outline-none"
                 aria-label="Contact Mohammed via WhatsApp">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Copyright Section */}
      <div className="mt-12 text-center text-gray-400 text-sm md:mt-0 md:text-left">
        <p>&copy; 2024 Mohammed. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-sky-400">React</span> & <span className="text-sky-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
} 