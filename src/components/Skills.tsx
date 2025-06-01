import React, { useEffect, useRef } from 'react';
import SkillsGraph from './SkillsGraph';

const Skills: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-[#222] flex flex-col items-center py-16 px-4">
      <h2 
        ref={titleRef}
        className="text-5xl font-bold mb-12 opacity-0"
        style={{ 
          textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff',
          transform: 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        Skills
      </h2>
      <div className="w-full max-w-3xl h-96">
        <SkillsGraph />
      </div>
    </section>
  );
};

export default Skills;