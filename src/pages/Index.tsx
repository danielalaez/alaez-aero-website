
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BlogSection from '@/components/BlogSection';
import PublicationsSection from '@/components/PublicationsSection';
import ResearchSection from '@/components/ResearchSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6 text-center">About Me</h2>
              <div className="prose mx-auto">
                <p className="text-lg leading-relaxed mb-4">
                  Daniel Aláez Gómez is a Spanish aerospace engineer and researcher specialising in unmanned aerial vehicles (UAVs), 
                  particularly vertical take-off and landing (VTOL) drones. He earned his Bachelor's degree in Aerospace Engineering 
                  in 2020 and a Master's in Aeronautical Engineering in 2022 from the University of León.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  In 2024, he completed his PhD in Science and Industrial Technologies at the Public University of Navarre (UPNA), 
                  focusing on the development of digital twins for VTOL UAVs.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently, Aláez Gómez serves as a substitute lecturer in the Department of Statistics, Computer Science, and Mathematics at UPNA. 
                  His work encompasses drone technology, simulation, and aerodynamics, and he contributes to teaching in various academic programmes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PublicationsSection />
        <ResearchSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
