import React, { useEffect, useRef } from 'react';

interface ExperienceItemProps {
  organization: string;
  role: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  organization, 
  role, 
  period, 
  description 
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && itemRef.current) {
          itemRef.current.style.opacity = '1';
          itemRef.current.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="exp-item flex items-center gap-6 opacity-0"
      style={{
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <div className="w-24 h-24 bg-[#00f0ff] rounded-full flex items-center justify-center text-black font-bold text-center text-sm">
        {organization}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#00f0ff]">{role}</h3>
        <p className="text-gray-400">
          {period} | {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;