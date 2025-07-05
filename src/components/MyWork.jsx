import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function MyWork() {
  return (
    <section className="w-2/3 mx-auto my-1 mt-10 text-white" aria-labelledby="portfolio-heading">
      <header>
        <h2 id="portfolio-heading" className="py-5 ml-3 text-4xl text-white">
          My <span className="text-sky-400">Portfolio</span> Highlights
        </h2>
        <p className="ml-3 text-lg text-gray-400 mb-8">
          Explore my recent web development projects showcasing modern technologies and creative solutions.
        </p>
      </header>
      
      <div className="grid w-full grid-cols-1 md:grid-cols-3 h-fit gap-6" role="grid" aria-label="Portfolio projects">
        {projects.map((project, index) => (
          <div key={project.id} role="gridcell" aria-posinset={index + 1} aria-setsize={projects.length}>
            <ProjectCard 
              image={project.image}
              title={project.title}
              tags={project.tags}
              codeLink={project.codeLink}
              liveLink={project.liveLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 