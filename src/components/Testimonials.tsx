import React from 'react';
import TestimonialBubble from './TestimonialBubble';

const testimonialsData = [
  {
    content: "Shah's innovation in AI and software engineering is unparalleled. A true visionary!",
    author: "Dr. A. Khan, AI Mentor"
  },
  {
    content: "His leadership in tech events is inspiring. Shah is a natural leader.",
    author: "Prof. S. Ahmed, FAST-NUCES"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="min-h-screen bg-[#111] flex flex-col items-center py-16 px-4">
      <h2 className="text-5xl font-bold mb-12" style={{ textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}>
        Testimonials
      </h2>
      <div className="max-w-3xl flex flex-col gap-6">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialBubble
            key={index}
            content={testimonial.content}
            author={testimonial.author}
            delay={index * 0.3}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;