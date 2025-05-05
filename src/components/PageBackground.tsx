
import React from 'react';

const PageBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-70 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23222222' opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px'
        }}
      ></div>
      
      {/* Blurred circles */}
      <div className="absolute -left-32 top-1/3 w-112 h-112 rounded-full bg-[#FFC2A4] blur-[80px] opacity-40 mix-blend-multiply"></div>
      <div className="absolute right-1/3 bottom-1/4 w-64 h-64 rounded-full bg-[#FEEAA0] blur-[80px] opacity-40 mix-blend-multiply"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#D0C7FF] blur-[80px] opacity-40 mix-blend-multiply"></div>
    </div>
  );
};

export default PageBackground;
