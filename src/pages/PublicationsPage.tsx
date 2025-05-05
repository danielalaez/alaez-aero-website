
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';
import { publications as allPublications } from '@/data/publications';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageBackground from '@/components/PageBackground';

const PublicationsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredPublications = allPublications
    .filter(pub => {
      if (filter === 'all') return true;
      return pub.type === filter;
    })
    .sort((a, b) => b.year - a.year); // Always sort by year (most recent first)

  const publicationTypes = ['all', ...new Set(allPublications.map(p => p.type))];
  
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8F8F8] relative overflow-hidden">
          <PageBackground />
          <div className="container relative z-20">
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 text-center">Publications</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Peer-reviewed articles, conference papers, and research contributions.
            </p>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container max-w-3xl">
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                {publicationTypes.map(type => (
                  <Button 
                    key={type}
                    variant={filter === type ? "default" : "outline"}
                    onClick={() => setFilter(type)}
                    className="capitalize"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredPublications.map((pub) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PublicationsPage;
