import { HiOutlineDownload, HiOutlineExternalLink } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);
  
  // Google Drive link provided by the user
  const googleDriveViewLink = "https://drive.google.com/file/d/1_5o08svwnLMD7nabywgYsLyXAF1dHIJU/view?usp=sharing";
  
  // Convert to direct download link format
  const googleDriveDownloadLink = "https://drive.google.com/uc?export=download&id=1_5o08svwnLMD7nabywgYsLyXAF1dHIJU";
  
  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex flex-col w-full min-h-screen mt-20 lg:w-4/5 md:flex-row lg:mt-0 lg:mx-auto">
      <div className="flex flex-col justify-center w-full md:w-1/2 md:ml-14">
        <p className="mt-6 text-4xl text-center text-white lg:text-6xl">
          Building Scalable modern websites for the future
        </p>
        
        <div className="relative">
          <button
            className="flex px-3 py-2 mx-auto bg-sky-400 w-fit rounded-xl mt-14"
            onClick={handleButtonClick}
          >
            Resume / CV
            <HiOutlineDownload className="mt-1 ml-3" />
          </button>
          
          {showOptions && (
            <div className="absolute z-50 w-48 p-2 mt-2 bg-white rounded-md shadow-lg -left-5 top-16">
              <a 
                className="flex items-center w-full px-3 py-2 text-black rounded-md hover:bg-gray-100"
                href={googleDriveDownloadLink}
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineDownload className="mr-2" />
                Download CV
              </a>
              <a 
                className="flex items-center w-full px-3 py-2 text-black rounded-md hover:bg-gray-100"
                href={googleDriveViewLink}
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineExternalLink className="mr-2" />
                View in Drive
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center w-3/4 mx-auto mt-8 md:w-1/4 rounded-2xl md:mt-0">
        <img 
          src="/assets/pic-removebg.png" 
          alt="Portfolio owner" 
          className="object-cover w-full h-96 rounded-xl lg:mr-28"
        />
      </div>
    </div>
  );
} 