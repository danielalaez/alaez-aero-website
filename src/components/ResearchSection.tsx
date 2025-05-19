
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const researchAreas = [
  {
    id: 1,
    title: 'Digital Twin Technology',
    description: 'Development of digital twin models for VTOL UAVs to enhance flight simulation, predictive maintenance, and performance optimization.',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Drone Aerodynamics',
    description: 'Analysis and improvement of aerodynamic properties in drones, focusing on efficiency, stability, and performance across different flight conditions.',
    icon: '🛫'
  },
  {
    id: 3,
    title: 'UAV Simulation Systems',
    description: 'Creating advanced simulation environments for testing drone behavior in varied conditions without physical prototyping.',
    icon: '🖥️'
  },
  {
    id: 4,
    title: 'Unmanned Aerial Systems',
    description: 'Holistic research on UAV platforms, including propulsion, control systems, and payload integration for various applications.',
    icon: '🚁'
  }
];

const ResearchSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-4 text-center">Research Areas</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          My research focuses on advancing drone technology through innovative engineering approaches and simulation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area) => (
            <div key={area.id} className="p-6 border border-gray-100 rounded-md shadow-sm">
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-playfair text-xl mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-navy rounded-lg text-white">
          <h3 className="font-playfair text-2xl mb-4 text-center">Interested in Collaborating?</h3>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            I'm actively seeking motivated students and researchers interested in drone technology, 
            aerodynamics, and simulation. If you are passionate about aerial robotics and UAVs, 
            I'd love to hear from you.
          </p>
          <div className="text-center">
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-navy">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
