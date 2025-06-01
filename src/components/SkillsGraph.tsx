import React, { useEffect, useRef } from 'react';

const skills = [
  { name: "C++", value: 90 },
  { name: "Python", value: 60 },
  { name: "HTML", value: 80 },
  { name: "CSS", value: 75 },
  { name: "JavaScript", value: 70 }
];

const SkillsGraph: React.FC = () => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphRef.current) return;

    // Clean up any previous content
    while (graphRef.current.firstChild) {
      graphRef.current.removeChild(graphRef.current.firstChild);
    }

    // Create skill bars
    skills.forEach((skill, index) => {
      const barContainer = document.createElement('div');
      barContainer.className = 'flex items-center mb-6';
      
      // Skill name
      const nameDiv = document.createElement('div');
      nameDiv.className = 'w-24 text-right pr-4';
      nameDiv.textContent = skill.name;
      
      // Bar container
      const progressContainer = document.createElement('div');
      progressContainer.className = 'flex-1 bg-gray-700 h-6 rounded-full overflow-hidden relative';
      
      // Progress bar
      const progressBar = document.createElement('div');
      progressBar.className = 'h-full bg-[#00f0ff]';
      progressBar.style.width = '0%';
      progressBar.style.transition = 'width 1.5s ease-out';
      
      // Percentage text
      const percentText = document.createElement('div');
      percentText.className = 'absolute inset-0 flex items-center justify-end pr-3 text-black font-bold';
      percentText.textContent = `${skill.value}%`;
      
      progressContainer.appendChild(progressBar);
      progressContainer.appendChild(percentText);
      
      barContainer.appendChild(nameDiv);
      barContainer.appendChild(progressContainer);
      
      if (graphRef.current) {
        graphRef.current.appendChild(barContainer);
      }
      
      // Animate bar width after a short delay
      setTimeout(() => {
        progressBar.style.width = `${skill.value}%`;
      }, 300 + (index * 200));
    });

    // Cleanup function
    return () => {
      if (graphRef.current) {
        while (graphRef.current.firstChild) {
          graphRef.current.removeChild(graphRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div ref={graphRef} className="w-full h-full p-4 flex flex-col justify-center">
      {/* Skill bars will be dynamically created here */}
    </div>
  );
};

export default SkillsGraph;