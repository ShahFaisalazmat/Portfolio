import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, demoLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="project-card relative w-80 h-96 bg-[#333] rounded-lg overflow-hidden cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className="card-inner w-full h-full transition-transform duration-600"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="card-front absolute inset-0 flex items-center justify-center bg-[#00f0ff] text-black font-bold text-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {title}
        </div>
        <div 
          className="card-back absolute inset-0 bg-[#111] p-6 flex flex-col justify-between"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <h3 className="text-xl font-semibold text-[#00f0ff]">{title}</h3>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>
          <a href={demoLink} className="px-4 py-2 bg-[#00f0ff] text-black rounded-full text-center">
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;