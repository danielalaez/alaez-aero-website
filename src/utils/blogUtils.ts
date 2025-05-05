
import { BlogPost } from '@/data/blogPosts';

export interface ParsedMarkdown {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function parseMarkdownFile(markdown: string): ParsedMarkdown {
  const lines = markdown.split('\n');
  
  // Extract title (first h1)
  const titleLine = lines.find(line => line.startsWith('# '));
  const title = titleLine ? titleLine.substring(2).trim() : 'Untitled';
  
  // Extract date (usually the line after title)
  const titleIndex = lines.findIndex(line => line.startsWith('# '));
  const dateLine = titleIndex >= 0 && titleIndex + 1 < lines.length ? lines[titleIndex + 1].trim() : '';
  const date = dateLine && !dateLine.startsWith('#') ? dateLine : '';
  
  // Extract excerpt (usually the line after date)
  const excerptIndex = titleIndex >= 0 && titleIndex + 2 < lines.length ? titleIndex + 2 : -1;
  const excerpt = excerptIndex >= 0 ? lines[excerptIndex].trim() : '';
  
  // Remove title, date and excerpt from content if they exist
  let contentLines = [...lines];
  if (titleIndex >= 0) {
    contentLines.splice(titleIndex, 1); // Remove title
    if (date) {
      contentLines.splice(titleIndex, 1); // Remove date line
    }
    if (excerpt) {
      contentLines.splice(titleIndex, 1); // Remove excerpt line
    }
  }
  
  // Join remaining lines as content
  const content = contentLines.join('\n').trim();
  
  return {
    title,
    date,
    excerpt,
    content
  };
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

export function formatBlogPost(parsedMarkdown: ParsedMarkdown, slug: string): BlogPost {
  // Generate a simple numeric ID based on the current timestamp
  // This ensures each post gets a unique ID
  const id = Date.now();
  
  return {
    id,
    title: parsedMarkdown.title,
    date: parsedMarkdown.date,
    excerpt: parsedMarkdown.excerpt,
    content: parsedMarkdown.content,
    slug
  };
}
