
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import PageBackground from '@/components/PageBackground';

const BlogPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F8F8F8] relative overflow-hidden">
          <PageBackground />
          <div className="container relative z-20">
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6 text-center">Blog</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Insights and thoughts on UAVs, simulation and academic research.
            </p>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container max-w-3xl">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white p-6 border border-gray-100 rounded-md shadow-sm">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="font-playfair text-2xl mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-navy transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-navy font-medium hover:underline inline-flex items-center"
                  >
                    Continue Reading
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
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

export default BlogPage;
