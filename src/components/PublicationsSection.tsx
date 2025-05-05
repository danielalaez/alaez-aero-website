
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
  }
];

const PublicationsSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-4 text-center">Recent Publications</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Selected peer-reviewed articles and conference papers from my research work.
        </p>
        
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="bg-white p-6 border border-gray-100 rounded-md shadow-sm">
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
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/publications">View All Publications</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
