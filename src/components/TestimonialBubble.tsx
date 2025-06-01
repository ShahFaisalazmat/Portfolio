import React, { useEffect, useRef } from 'react';

interface TestimonialBubbleProps {
  content: string;
  author: string;
  delay: number;
}

const TestimonialBubble: React.FC<TestimonialBubbleProps> = ({ 
  content, 
  author,
  delay 
}) => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && bubbleRef.current) {
          setTimeout(() => {
            if (bubbleRef.current) {
              bubbleRef.current.style.opacity = '1';
              bubbleRef.current.style.transform = 'translateY(0)';
            }
          }, delay * 1000);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (bubbleRef.current) {
      observer.observe(bubbleRef.current);
    }

    return () => {
      if (bubbleRef.current) {
        observer.unobserve(bubbleRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={bubbleRef}
      className="speech-bubble bg-[#333] p-6 rounded-lg relative opacity-0"
      style={{
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <p className="text-gray-300">{content}</p>
      <p className="text-[#00f0ff] mt-2">{author}</p>
    </div>
  );
};

export default TestimonialBubble;