import { HiOutlineDownload, HiOutlineExternalLink } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Google Drive link provided by the user
  const googleDriveViewLink = "https://drive.google.com/file/d/11p2nQj62DtwRNLRyPwjzuxcZjoJW8gU3/view?usp=sharing";
  
  // Convert to direct download link format
  const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=11p2nQj62DtwRNLRyPwjzuxcZjoJW8gU3";
  
  
  // Preload the hero image
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/pic-removebg.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  
  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <main className="flex flex-col w-full min-h-screen mt-20 lg:w-4/5 md:flex-row lg:mt-0 lg:mx-auto">
      {/* Hero Text Section */}
      <section className="flex flex-col justify-center w-full md:w-1/2 md:ml-14">
        <header>
          <h1 className="mt-6 text-4xl text-center text-white lg:text-6xl">
            Building <span className="text-sky-400">Scalable</span> Modern Websites for the <span className="text-sky-400">Future</span>
          </h1>
          <p className="sr-only">Mohammed - Professional Web Developer specializing in React, Next.js, and modern web technologies</p>
        </header>
        
        {/* Call to Action Section */}
        <section className="relative" aria-label="Download Resume">
          <button
            className="flex px-3 py-2 mx-auto transition-colors mt-14 bg-sky-400 rounded-xl w-fit hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            onClick={handleButtonClick}
            aria-expanded={showOptions}
            aria-haspopup="true"
            aria-label="Download or view resume options"
          >
            <span>Resume / CV</span>
            <HiOutlineDownload className="mt-1 ml-3" aria-hidden="true" />
          </button>
          
          {showOptions && (
            <div className="absolute z-50 w-48 p-2 mt-2 bg-white rounded-md shadow-lg -left-5 top-16" role="menu" aria-label="Resume options">
              <a 
                className="flex items-center w-full px-3 py-2 text-black transition-colors rounded-md hover:bg-gray-100 focus:bg-gray-100"
                href={googleDriveDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                aria-label="Download CV as PDF"
              >
                <HiOutlineDownload className="mr-2" aria-hidden="true" />
                <span>Download CV</span>
              </a>
              <a 
                className="flex items-center w-full px-3 py-2 text-black transition-colors rounded-md hover:bg-gray-100 focus:bg-gray-100"
                href={googleDriveViewLink}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                aria-label="View CV in Google Drive"
              >
                <HiOutlineExternalLink className="mr-2" aria-hidden="true" />
                <span>View in Drive</span>
              </a>
            </div>
          )}
        </section>
      </section>

      {/* Hero Image Section */}
      <section className="flex items-center justify-center w-3/4 mx-auto mt-8 rounded-2xl md:w-1/4 md:mt-0" aria-label="Profile Photo">
        {/* Hero image with loading optimization */}
        <figure className="relative w-full h-96">
          {!imageLoaded && (
            <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-xl animate-pulse" aria-label="Loading profile image">
              <div className="w-16 h-16 border-4 rounded-full border-sky-400 animate-spin border-t-transparent" role="status" aria-label="Loading"></div>
            </div>
          )}
          <img 
            src="/assets/pic-removebg.png" 
            alt="Mohammed - Professional Web Developer and React Specialist" 
            className={`object-cover w-full h-full rounded-xl lg:mr-28 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'absolute inset-0 opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
            width="400"
            height="400"
          />
        </figure>
      </section>
    </main>
  );
} 