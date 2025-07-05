import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

export default function ProjectCard({ image, title, tags, codeLink, liveLink }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3 hover:shadow-lg transition-shadow duration-300" 
             itemScope 
             itemType="https://schema.org/CreativeWork">
      
      {/* Project Image */}
      <div ref={imgRef} className="overflow-hidden relative w-full h-48 rounded-lg mb-4">
        {!imageLoaded && (
          <div className="flex justify-center items-center w-full h-full bg-gray-800 animate-pulse" 
               aria-label="Loading project image">
            <div className="w-8 h-8 rounded-full border-2 border-sky-400 animate-spin border-t-transparent" 
                 role="status" 
                 aria-label="Loading"></div>
          </div>
        )}
        <img 
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'absolute inset-0 opacity-0'
          }`}
          src={isInView ? image : ''}
          alt={`${title} - Web Development Project Screenshot`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          itemProp="image"
          width="300"
          height="200"
        />
      </div>
      
      {/* Project Details */}
      <div className="flex-1 flex flex-col">
        <header className="mb-3">
          <h3 className="text-xl font-semibold text-white" itemProp="name">{title}</h3>
          <p className="sr-only" itemProp="description">
            {title} - A modern web development project built with {tags.join(', ')}
          </p>
        </header>
        
        <div className="flex w-full mt-auto">
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 w-1/2" role="list" aria-label="Technologies used">
            {tags.map((tag, index) => (
              <span key={index} 
                    className="px-2 py-1 rounded-lg border shadow-xl border-neutral-700 text-xs bg-gray-700 text-gray-300"
                    role="listitem"
                    itemProp="keywords">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action Links */}
          <div className="flex justify-end space-x-2 w-1/2" role="group" aria-label="Project links">
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-sky-400 rounded-lg transition-colors w-fit hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label={`View source code for ${title} on GitHub`}
              itemProp="url"
            >
              <span className="text-sm font-medium">Code</span>
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-sky-400 rounded-lg transition-colors w-fit hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label={`View live demo of ${title}`}
              itemProp="url"
            >
              <span className="text-sm font-medium">Live</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  codeLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired
}; 