
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageBackground from '@/components/PageBackground';

const researchAreas = [
  {
    id: 1,
    title: 'Digital Twin Technology for VTOL UAVs',
    description: `Development and implementation of digital twin models for vertical take-off and landing unmanned aerial vehicles. 
    This research focuses on creating accurate virtual replicas of physical drones to predict behavior, optimize design, and 
    enhance performance through simulation before physical testing.`,
    icon: '🤖',
    details: [
      'Real-time data integration from physical drones',
      'Predictive maintenance algorithms',
      'Performance optimization through virtual testing',
      'Integration with machine learning for adaptive model refinement'
    ]
  },
  {
    id: 2,
    title: 'Drone Aerodynamics',
    description: `Analysis and improvement of aerodynamic properties of drones, with particular attention to efficiency, 
    stability, and performance across various flight regimes. This research applies computational fluid dynamics and wind tunnel 
    testing to optimize airflow and minimize drag.`,
    icon: '🛫',
    details: [
      'Computational Fluid Dynamics (CFD) modeling',
      'Wind tunnel testing and validation',
      'Flight performance optimization',
      'Energy efficiency improvements in varied flight conditions'
    ]
  },
  {
    id: 3,
    title: 'UAV Simulation Systems',
    description: `Development of advanced simulation environments for testing drone behavior in varied conditions without the need 
    for physical prototyping. This research creates high-fidelity virtual testing grounds that account for weather conditions, 
    obstacles, and flight dynamics.`,
    icon: '🖥️',
    details: [
      'Physics-based flight simulators',
      'Environmental condition modeling (wind, rain, temperature)',
      'Sensor and actuator simulation',
      'Hardware-in-the-loop testing frameworks'
    ]
  },
  {
    id: 4,
    title: 'Unmanned Aerial Systems Integration',
    description: `Holistic research on UAV platforms, including propulsion systems, control algorithms, and payload integration 
    for various applications. This research aims to optimize the overall system performance by considering the interplay between 
    different components.`,
    icon: '🚁',
    details: [
      'Propulsion system optimization',
      'Control algorithm development',
      'Payload integration strategies',
      'System reliability and redundancy planning'
    ]
  }
];

const ResearchPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8F8F8] relative overflow-hidden">
          <PageBackground />
          <div className="container relative z-20">
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 text-center">Research</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              My research focuses on advancing drone technology through innovative engineering approaches and simulation.
            </p>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container">
            {researchAreas.map((area, index) => (
              <div key={area.id} className={`mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-start gap-12`}>
                <div className={`md:w-1/3 mb-8 md:mb-0`}>
                  <div className="bg-gray-100 p-12 rounded-lg flex items-center justify-center">
                    <span className="text-8xl">{area.icon}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="font-playfair text-3xl mb-4">{area.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                  
                  <h3 className="font-medium text-xl mb-3">Research Focus Areas:</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    {area.details.map((detail, i) => (
                      <li key={i} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            <div className="mt-16 p-8 bg-navy rounded-lg text-white">
              <h3 className="font-playfair text-2xl mb-4 text-center">Interested in Research Collaboration?</h3>
              <p className="text-center mb-6 max-w-2xl mx-auto">
                I'm actively seeking motivated students and researchers interested in drone technology, 
                aerodynamics, and simulation. If you are passionate about aerial robotics and UAVs, 
                I'd love to hear from you.
              </p>
              <div className="text-center">
                <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-navy">
                  <Link to="/contact">Contact for Collaboration</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResearchPage;
