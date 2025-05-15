
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, FileText, Globe, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-4 text-center">Contact</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          If you are passionate about aerial robotics and UAVs, I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-playfair text-2xl mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <p className="font-medium">Daniel Aláez Gómez, PhD</p>
              <p>Department of Statistics, Computer Science, and Mathematics</p>
              <p>Public University of Navarre (UPNA)</p>
              <p>Pamplona, Spain</p>
            </div>
            
            <div className="space-y-4">
              <p>
                <a href="mailto:daniel.alaez@unavarra.es" className="text-navy hover:underline flex items-center">
                  <Mail size={18} className="mr-2" />
                  daniel.alaez@unavarra.es
                </a>
              </p>
            </div>
            
            <h3 className="font-playfair text-2xl mt-12 mb-6">Connect</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://scholar.google.com/citations?user=D5pW6RUAAAAJ&hl=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
              >
                <FileText size={24} className="mr-3 text-navy" />
                <span>Google Scholar</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/danialaez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={24} className="mr-3 text-navy" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://orcid.org/0000-0002-5346-2562" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
              >
                <FileText size={24} className="mr-3 text-navy" />
                <span>ORCID</span>
              </a>
              
              <a 
                href="https://www.unavarra.es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Globe size={24} className="mr-3 text-navy" />
                <span>University Profile</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 border border-gray-200 rounded-md shadow-sm">
            <h3 className="font-playfair text-2xl mb-6">Send a Message</h3>
            <form action="mailto:daniel.alaez@unavarra.es" method="post" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  className="w-full p-3 border border-gray-300 rounded-md h-40"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-navy hover:bg-navy/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
