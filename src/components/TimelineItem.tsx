import React, { forwardRef } from 'react';

interface TimelineItemProps {
  year: string;
  text: string;
  position: 'left' | 'right';
}

const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ year, text, position }, ref) => {
    return (
      <div 
        ref={ref}
        className={`timeline-item flex items-center mb-12 opacity-0`}
        style={{
          transform: position === 'left' ? 'translateX(-50px)' : 'translateX(50px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}
      >
        {position === 'left' ? (
          <>
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-xl font-semibold text-[#00f0ff]">{year}</h3>
              <p className="text-gray-400">{text}</p>
            </div>
            <div className="w-1/2 pl-8">
              <div className="w-4 h-4 bg-[#00f0ff] rounded-full absolute left-1/2 transform -translate-x-1/2" 
                   style={{ boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' }}></div>
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2 pr-8">
              <div className="w-4 h-4 bg-[#00f0ff] rounded-full absolute left-1/2 transform -translate-x-1/2" 
                   style={{ boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' }}></div>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-xl font-semibold text-[#00f0ff]">{year}</h3>
              <p className="text-gray-400">{text}</p>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default TimelineItem;