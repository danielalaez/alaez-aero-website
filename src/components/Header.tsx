
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-playfair text-xl md:text-2xl font-medium">
          Daniel Aláez
        </Link>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav className={`absolute md:static top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-6 md:p-0">
            <li>
              <Link to="/" className="text-gray-800 hover:text-navy transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-800 hover:text-navy transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/publications" className="text-gray-800 hover:text-navy transition-colors">
                Publications
              </Link>
            </li>
            <li>
              <Link to="/research" className="text-gray-800 hover:text-navy transition-colors">
                Research
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-navy transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
