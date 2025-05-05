
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

// This would typically come from your data store
const publications = [
  {
    id: 1,
    title: 'Development and Validation of Digital Twins for VTOL UAVs',
    journal: 'Journal of Aerospace Engineering',
    year: 2024,
    doi: 'https://doi.org/10.1000/xyz123',
    authors: 'Aláez Gómez, D., Smith, J., Johnson, A.'
  },
  {
    id: 2,
    title: 'Aerodynamic Performance Analysis of Multi-Rotor Drones in Urban Environments',
    journal: 'International Journal of Unmanned Systems',
    year: 2023,
    doi: 'https://doi.org/10.1000/abc456',
    authors: 'Aláez Gómez, D., Williams, R., García, L.'
  },
  {
    id: 3,
    title: 'Simulation Methods for UAV Flight Testing in Adverse Weather Conditions',
    journal: 'Aerospace Science and Technology',
    year: 2022,
    doi: 'https://doi.org/10.1000/def789',
    authors: 'Brown, T., Aláez Gómez, D., Chen, H.'
  },
  {
    id: 4,
    title: 'Control System Design for Hybrid VTOL-Fixed Wing UAVs',
    journal: 'IEEE Transactions on Aerospace and Electronic Systems',
    year: 2022,
    doi: 'https://doi.org/10.1000/ghi101',
    authors: 'Aláez Gómez, D., Park, S.'
  },
  {
    id: 5,
    title: 'Comparative Analysis of Propulsion Systems for Small-Scale VTOL Drones',
    journal: 'Journal of Propulsion and Power',
    year: 2021,
    doi: 'https://doi.org/10.1000/jkl112',
    authors: 'Aláez Gómez, D., Lee, K., Martínez, J.'
  }
];

const PublicationsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8F8F8]">
          <div className="container">
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 text-center">Publications</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Peer-reviewed articles, conference papers, and research contributions.
            </p>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="mb-12">
              <h2 className="font-playfair text-2xl mb-6">Journal Articles</h2>
              {publications
                .filter(pub => pub.journal.includes('Journal') || pub.journal.includes('Transactions'))
                .map((pub) => (
                <div key={pub.id} className="mb-8 p-6 border border-gray-100 rounded-md shadow-sm">
                  <h3 className="font-playfair text-xl mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-gray-500 mb-4">
                    <span className="italic">{pub.journal}</span>, {pub.year}
                  </p>
                  <a 
                    href={pub.doi} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy font-medium hover:underline inline-flex items-center"
                  >
                    View Publication
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl mb-6">Conference Papers</h2>
              {publications
                .filter(pub => !pub.journal.includes('Journal') && !pub.journal.includes('Transactions'))
                .map((pub) => (
                <div key={pub.id} className="mb-8 p-6 border border-gray-100 rounded-md shadow-sm">
                  <h3 className="font-playfair text-xl mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-gray-500 mb-4">
                    <span className="italic">{pub.journal}</span>, {pub.year}
                  </p>
                  <a 
                    href={pub.doi} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy font-medium hover:underline inline-flex items-center"
                  >
                    View Publication
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PublicationsPage;
