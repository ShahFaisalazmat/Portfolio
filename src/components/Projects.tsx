import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Weather Analysis Tool",
    description: "A C++ tool for analyzing weather data, showcasing advanced data processing skills.",
    demoLink: "https://github.com/ShahFaisalazmat/Weather-Analysis"
  },
  {
    title: "Zombie Survival Game",
    description: "A creative C++ game demonstrating problem-solving and game logic.",
    demoLink: "https://github.com/ShahFaisalazmat/Semester-Project-Zombie-Apocalypse-Survival-Game-"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#222] flex flex-col items-center py-16 px-4">
      <h2 className="text-5xl font-bold mb-12" style={{ textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;