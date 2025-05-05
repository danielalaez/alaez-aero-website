
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This would typically come from your data store
const blogPosts = [
  {
    id: 1,
    title: 'Recent Advancements in VTOL Drone Technology',
    excerpt: 'An overview of the latest innovations in vertical take-off and landing drone technologies and their applications.',
    date: 'April 28, 2024',
    slug: 'vtol-drone-technology',
    content: 'This is a placeholder for the full blog content...'
  },
  {
    id: 2,
    title: 'Digital Twins in Aerospace Engineering: A Case Study',
    excerpt: 'Exploring how digital twin technology is transforming aerospace engineering and aircraft maintenance.',
    date: 'March 15, 2024',
    slug: 'digital-twins-aerospace',
    content: 'This is a placeholder for the full blog content...'
  },
  {
    id: 3,
    title: 'Aerodynamic Challenges in UAV Design',
    excerpt: 'A technical analysis of the unique aerodynamic challenges encountered in designing small-scale unmanned aerial vehicles.',
    date: 'February 2, 2024',
    slug: 'aerodynamic-challenges-uav',
    content: 'This is a placeholder for the full blog content...'
  },
  {
    id: 4,
    title: 'The Future of Drone Technology in Urban Environments',
    excerpt: 'Examining how drones are being integrated into urban infrastructure and the challenges that lie ahead.',
    date: 'January 17, 2024',
    slug: 'drone-technology-urban',
    content: 'This is a placeholder for the full blog content...'
  },
  {
    id: 5,
    title: 'Sustainable Materials in Aerospace Manufacturing',
    excerpt: 'A look at eco-friendly materials being adopted in aerospace manufacturing and their impact on performance.',
    date: 'December 5, 2023',
    slug: 'sustainable-materials-aerospace',
    content: 'This is a placeholder for the full blog content...'
  }
];

const BlogPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8F8F8]">
          <div className="container">
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 text-center">Blog</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Thoughts, research notes, and insights on aerospace engineering, drone technology, and academic research.
            </p>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="border border-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="bg-gray-100 h-48"></div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h2 className="font-playfair text-2xl mb-3">
                      <a href={`/blog/${post.slug}`} className="hover:text-navy transition-colors">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="text-navy font-medium hover:underline inline-flex items-center"
                    >
                      Continue Reading
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
