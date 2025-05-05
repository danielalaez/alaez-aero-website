
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogSection: React.FC = () => {
  // Get only the 3 most recent posts for the homepage
  const recentPosts = blogPosts.slice(0, 3);
  
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-4 text-center">Latest Blog Posts</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Insights and thoughts on UAVs, simulation and academic research.
        </p>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {recentPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 border border-gray-100 rounded-md shadow-sm">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="font-playfair text-xl mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="text-navy font-medium hover:underline inline-flex items-center"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
