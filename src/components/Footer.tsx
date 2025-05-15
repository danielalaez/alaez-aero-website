
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Daniel Aláez</h3>
            <p className="text-gray-600 mb-4">Academic and Researcher in UAV and embedded systems</p>
            <p className="text-gray-600">Public University of Navarre (UPNA)</p>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-navy transition-colors">Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-navy transition-colors">Blog</Link></li>
              <li><Link to="/publications" className="text-gray-600 hover:text-navy transition-colors">Publications</Link></li>
              <li><Link to="/research" className="text-gray-600 hover:text-navy transition-colors">Research</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-navy transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/danialaez/" className="text-gray-600 hover:text-navy transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://scholar.google.com/citations?user=D5pW6RUAAAAJ&hl=es" className="text-gray-600 hover:text-navy transition-colors" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
              <a href="mailto:daniel.alaez@unavarra.es" className="text-gray-600 hover:text-navy transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Daniel Aláez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
