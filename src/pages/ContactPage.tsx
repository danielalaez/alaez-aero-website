
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageBackground from '@/components/PageBackground';

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8F8F8] relative overflow-hidden">
          <PageBackground />
          <div className="container relative z-20">
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 text-center">Contact</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              If you are passionate about aerial robotics and UAVs, I'd love to hear from you.
            </p>
          </div>
        </section>
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
