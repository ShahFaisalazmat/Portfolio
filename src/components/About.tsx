import React, { useEffect, useRef } from 'react';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    year: "2021",
    text: "Graduated SSC with 94% - Top 1% in BISE Mardan",
    position: "left"
  },
  {
    year: "2023",
    text: "FSc Pre-Engineering - Secured 1st Position (85%)",
    position: "right"
  },
  {
    year: "2024",
    text: "Web Development Intern at Prodigy InfoTech",
    position: "left"
  },
  {
    year: "2025",
    text: "NaSCon 2025 PR Committee Member",
    position: "right"
  }
];

const About: React.FC = () => {
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      timelineItemRefs.current.forEach((item, index) => {
        if (!item) return;
        
        const rect = item.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.top <= window.innerHeight;
        
        if (isInView) {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#111] flex flex-col items-center py-16 px-4">
      <h2 className="text-5xl font-bold mb-12" style={{ textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}>
        About Me
      </h2>
      <div className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed">
        <p>
          I am Shah Faisal, a Software Engineering student at FAST-NUCES, where I weave code into dreams. 
          From the circuits of Swabi to the innovation hubs of Islamabad, my journey is a tapestry of 
          engineering, creativity, and leadership. I believe in building solutions that transcend 
          boundaries—where technology meets human aspiration.
        </p>
      </div>
      <div className="w-full max-w-4xl mt-12">
        <div className="timeline relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              text={item.text}
              position={item.position}
              ref={(el) => {
                timelineItemRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;