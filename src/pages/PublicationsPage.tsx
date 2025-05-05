
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink } from 'lucide-react';
import { publications as allPublications, Publication } from '@/data/publications';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from '@/components/ui/table';

const PublicationsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'citations'>('year');
  
  const filteredPublications = allPublications
    .filter(pub => {
      if (filter === 'all') return true;
      return pub.type === filter;
    })
    .sort((a, b) => {
      if (sortBy === 'year') {
        return b.year - a.year;
      } else {
        // Default to 0 if citations is undefined
        const citesA = a.citations || 0;
        const citesB = b.citations || 0;
        return citesB - citesA;
      }
    });

  const publicationTypes = ['all', ...new Set(allPublications.map(p => p.type))];
  
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
          <div className="container max-w-5xl">
            <div className="mb-8 flex flex-wrap gap-4 justify-between items-center">
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
              <div className="flex gap-2">
                <Button 
                  variant={sortBy === 'year' ? "default" : "outline"}
                  onClick={() => setSortBy('year')}
                >
                  Sort by Year
                </Button>
                <Button 
                  variant={sortBy === 'citations' ? "default" : "outline"}
                  onClick={() => setSortBy('citations')}
                >
                  Sort by Citations
                </Button>
              </div>
            </div>
            
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Publication</TableHead>
                    <TableHead className="hidden md:table-cell">Year</TableHead>
                    <TableHead className="hidden md:table-cell">Type</TableHead>
                    <TableHead className="hidden md:table-cell">Citations</TableHead>
                    <TableHead className="w-[100px]">Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPublications.map((pub) => (
                    <TableRow key={pub.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{pub.title}</p>
                          <p className="text-sm text-gray-500">{pub.authors}</p>
                          <p className="text-sm text-gray-500 italic md:hidden">{pub.source}</p>
                          <div className="md:hidden mt-1 flex gap-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              {pub.year}
                            </span>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full capitalize">
                              {pub.type}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{pub.year}</TableCell>
                      <TableCell className="hidden md:table-cell capitalize">{pub.type}</TableCell>
                      <TableCell className="hidden md:table-cell">{pub.citations || '-'}</TableCell>
                      <TableCell>
                        {pub.doi && (
                          <a 
                            href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-navy hover:text-blue-700 inline-flex items-center"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PublicationsPage;
