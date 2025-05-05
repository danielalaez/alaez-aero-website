
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { publications } from '@/data/publications';
import { Card, CardContent } from '@/components/ui/card';

const PublicationsSection: React.FC = () => {
  // Get 3 most recent publications for the home page
  const recentPublications = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-4 text-center">Recent Publications</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Selected peer-reviewed articles and conference papers from my research work.
        </p>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {recentPublications.map((pub) => (
            <Card key={pub.id} className="bg-white border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-2">{pub.authors}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {pub.year}
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full capitalize">
                    {pub.type}
                  </span>
                </div>
                <p className="text-gray-500 mb-4 italic">
                  {pub.source}
                </p>
                {pub.doi && (
                  <a 
                    href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy font-medium hover:underline inline-flex items-center"
                  >
                    View Publication
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </CardContent>
            </Card>
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
