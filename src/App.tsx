
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PublicationsPage from "./pages/PublicationsPage";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle GitHub Pages SPA routing
const basename = import.meta.env.PROD ? '/alaez-aero-website' : '';

const App = () => {
  // GitHub Pages SPA redirect handling
  React.useEffect(() => {
    // Check if we're in production and if there's a redirect query parameter
    if (import.meta.env.PROD && window.location.search.includes('/?/')) {
      const redirect = window.location.search
        .substring(1)
        .split('&')
        .find(param => param.startsWith('/?/'));
      
      if (redirect) {
        const path = redirect.substring(3).replace(/~and~/g, '&');
        window.history.replaceState(null, '', basename + path);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
