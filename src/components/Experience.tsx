import React from 'react';
import ExperienceItem from './ExperienceItem';

const experienceData = [
  {
    organization: "FAST LADS",
    role: "Marketing Officer",
    period: "Sep 2023 - Present",
    description: "Led campaigns reaching 500+ students, boosting engagement by 30%."
  },
  {
    organization: "Prodigy InfoTech",
    role: "Web Development Intern",
    period: "Aug 2024",
    description: "Gained hands-on experience in HTML, CSS, and JavaScript."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen bg-[#111] flex flex-col items-center py-16 px-4">
      <h2 className="text-5xl font-bold mb-12" style={{ textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}>
        Experience & Roles
      </h2>
      <div className="max-w-4xl flex flex-col gap-8">
        {experienceData.map((exp, index) => (
          <ExperienceItem
            key={index}
            organization={exp.organization}
            role={exp.role}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;