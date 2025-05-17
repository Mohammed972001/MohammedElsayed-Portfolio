import { NAV_LINKS, SOCIAL_LINKS } from '../utils/constants.js';

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between w-2/3 mx-auto mt-8 mb-20 md:flex-row'>
      <div className='mt-6 md:w-1/3'>
        <h1 className='text-5xl text-white'>Let's work together today!</h1>
        <button className="px-3 py-2 mx-auto mt-10 bg-sky-400 w-fit rounded-xl">
          Start project
        </button>
      </div>

      <div className='flex mt-14 text-white md:w-1/3 space-x-14 md:space-x-44 md:mr-28 md:mt-0'>
        {/* Sitemap Column */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-xl font-semibold">Sitemap</h2>
          <ul className="space-y-2 text-gray-400">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Socials Column */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-xl font-semibold">Socials</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            </li>
            <li>
              <a href={SOCIAL_LINKS[1].url} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter X</a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 