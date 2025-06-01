import React, { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, buttonRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 300));
      }
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="text-center z-10">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-4 animate-pulse"
          style={{ textShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' }}
        >
          Shah Faisal
        </h1>
        <p 
          ref={subtitleRef}
          className="text-2xl md:text-4xl text-gray-300 mb-6"
        >
          Engineering the Future — One Idea at a Time
        </p>
        <div className="w-64 h-64 mx-auto mb-6">
          <img 
            src="https://media.licdn.com/dms/image/D4D22AQGxZVGZWXPQtw/feedshare-shrink_800/0/1708169751794?e=1712793600&v=beta&t=Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs_Hs" 
            alt="Shah Faisal AI Portrait" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <a 
          ref={buttonRef}
          href="#about" 
          className="px-6 py-3 bg-[#00f0ff] text-black rounded-full font-semibold hover:bg-white transition-all"
        >
          Discover My Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;