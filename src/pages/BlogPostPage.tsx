import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Import common languages
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

// Register languages with the highlighter
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);

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

  // Function to render content based on the line type
  const renderContent = (line: string, index: number) => {
    // Image pattern: ![alt text](image-url)
    const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
    if (imageMatch) {
      const alt = imageMatch[1];
      const url = imageMatch[2];
      return (
        <div key={index} className="my-8">
          <img 
            src={url} 
            alt={alt} 
            className="w-full rounded-md shadow-md" 
          />
          {alt && <p className="text-sm text-gray-500 mt-2 text-center">{alt}</p>}
        </div>
      );
    }
    
    // Code block pattern: ```language\ncode\n```
    if (line.startsWith('```') && !line.endsWith('```')) {
      const language = line.substring(3).trim() || 'text';
      let codeContent = '';
      let i = index + 1;
      
      // Collect all lines until closing ```
      while (i < post.content.split('\n').length && !post.content.split('\n')[i].startsWith('```')) {
        codeContent += post.content.split('\n')[i] + '\n';
        i++;
      }
      
      return (
        <div key={index} className="my-6">
          <div className="flex flex-col">
            {language && <div className="text-xs font-mono bg-gray-800 text-gray-300 px-4 py-1 rounded-t-md">{language}</div>}
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              showLineNumbers={true}
              wrapLines={true}
              className="rounded-b-md"
              customStyle={{
                margin: 0,
                borderTopLeftRadius: language ? 0 : '0.375rem',
                borderTopRightRadius: language ? 0 : '0.375rem',
              }}
            >
              {codeContent}
            </SyntaxHighlighter>
          </div>
        </div>
      );
    }
    
    // Skip lines that are part of a code block
    if (index > 0) {
      let prevLineIndex = index - 1;
      while (prevLineIndex >= 0) {
        const prevLine = post.content.split('\n')[prevLineIndex];
        if (prevLine.startsWith('```') && !prevLine.endsWith('```')) {
          // We're inside a code block
          let foundEnd = false;
          for (let i = prevLineIndex + 1; i <= index; i++) {
            if (post.content.split('\n')[i].startsWith('```')) {
              foundEnd = true;
              break;
            }
          }
          if (!foundEnd) return null; // Skip rendering this line
        }
        prevLineIndex--;
      }
    }
    
    // Skip code block closing
    if (line.startsWith('```') && line.length === 3) {
      return null;
    }
    
    // Handle regular markdown
    if (line.startsWith('# ')) {
      // Skip rendering H1 titles since we already have the title above
      return null; 
    } else if (line.startsWith('## ')) {
      return <h2 key={index} className="font-playfair text-2xl font-medium mt-8 mb-4">{line.substring(3)}</h2>;
    } else if (line.startsWith('- ')) {
      const parsedContent = parseMarkdown(line.substring(2));
      return <li key={index} className="ml-6 mb-2" dangerouslySetInnerHTML={{ __html: parsedContent }} />;
    } else if (line.trim() === '') {
      return <br key={index} />;
    } else {
      return (
        <p 
          key={index} 
          className="mb-4 text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(line) }}
        />
      );
    }
  };

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
              {post.content.split('\n').map((line, i) => renderContent(line, i))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
