
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#F8F8F8] relative overflow-hidden">
      {/* Blurred circles background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Noise overlay - significantly increased visibility */}
        <div 
          className="absolute inset-0 z-20 opacity-70 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23222222' opacity='0.25'/%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px'
          }}
        ></div>
        
        {/* Blurred circles - diverse sizes and repositioned circles */}
        <div className="absolute -left-32 top-1/3 w-112 h-112 rounded-full bg-[#FFC2A4] blur-[80px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 rounded-full bg-[#FEEAA0] blur-[80px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#D0C7FF] blur-[80px] opacity-40 mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            {/* Profile photo with white circle outline and shadow */}
            <div className="mb-8 inline-block rounded-full border-4 border-white shadow-lg">
              <Avatar className="h-36 w-36">
                <AvatarImage 
                  src="/lovable-uploads/48a1a046-cbcc-49d8-ac10-8aaaabe4f76b.png"
                  alt="Daniel Aláez Gómez" 
                />
                <AvatarFallback>DAG</AvatarFallback>
              </Avatar>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Daniel Aláez Gómez
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Aerospace engineer & researcher specializing in embedded systems, Unmanned Aerial Vehicles (UAVs) and simulation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-navy hover:bg-navy/90">
                <Link to="/research">Research Areas</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-xl rounded-md relative z-10">
            <h2 className="font-playfair text-2xl mb-4">Current Position</h2>
            <p className="mb-4">
              <strong className="font-medium">Assistant Lecturer & Researcher</strong><br />
              Department of Statistics, Computer Science, and Mathematics<br />
              Public University of Navarre (UPNA)
            </p>
            
            <h2 className="font-playfair text-2xl mb-4 mt-8">Education</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">PhD in Science and Industrial Technologies (2024)</p>
                <p className="text-gray-600">Public University of Navarre (UPNA)</p>
              </li>
              <li>
                <p className="font-medium">Master's in Aeronautical Engineering (2022)</p>
                <p className="text-gray-600">University of León</p>
              </li>
              <li>
                <p className="font-medium">Bachelor's in Aerospace Engineering (2020)</p>
                <p className="text-gray-600">University of León</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
