import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function MyWork() {
  return (
    <div className="w-2/3 mx-auto my-1 mt-10 text-white">
      <h1 className="py-5 ml-3 text-4xl text-white">
        My portfolio highlights
      </h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 h-fit">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.image}
            title={project.title}
            tags={project.tags}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
} 