
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  // Function to parse markdown text and convert to styled HTML
  const parseMarkdown = (text: string) => {
    // Handle bold text (**text**)
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle italic text (*text*)
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return formattedText;
  };

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-32">
          <div className="container max-w-3xl py-20">
            <h1 className="font-playfair text-3xl mb-6">Post not found</h1>
            <p className="mb-8">The blog post you are looking for does not exist or has been removed.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <article className="pt-32 pb-16">
          <div className="container max-w-3xl">
            <div className="mb-8">
              <Link to="/blog" className="text-navy hover:underline inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <p className="text-gray-500 mb-2">{post.date}</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-medium mb-6">{post.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('# ')) {
                  // Skip rendering H1 titles since we already have the title above
                  return null; 
                } else if (line.startsWith('## ')) {
                  return <h2 key={i} className="font-playfair text-2xl font-medium mt-8 mb-4">{line.substring(3)}</h2>;
                } else if (line.startsWith('- ')) {
                  const parsedContent = parseMarkdown(line.substring(2));
                  return <li key={i} className="ml-6 mb-2" dangerouslySetInnerHTML={{ __html: parsedContent }} />;
                } else if (line.trim() === '') {
                  return <br key={i} />;
                } else {
                  return (
                    <p 
                      key={i} 
                      className="mb-4 text-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(line) }}
                    />
                  );
                }
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
