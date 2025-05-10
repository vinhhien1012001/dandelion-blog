
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { blogPosts, getRelatedPosts } from "@/data/blogData";
import ProgressBar from "@/components/ProgressBar";
import ShareSection from "@/components/ShareSection";
import CommentSection from "@/components/CommentSection";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Clock, Calendar } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    if (!post) {
      navigate("/");
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;
  
  const relatedPosts = getRelatedPosts(post.id, post.category);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blog-soft-gray text-blog-dark font-minion text-sm mb-4">
                {post.category}
              </span>
              <h1 className="font-folklore text-4xl md:text-5xl mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-blog-neutral mb-8">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span className="font-minion">{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span className="font-minion">{post.readTime} min read</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <div className="aspect-[16/9] bg-blog-soft-gray w-full mb-8 flex items-center justify-center">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-blog-neutral">Featured Image</span>
                  )}
                </div>
                
                <article className="font-minion text-lg leading-relaxed blog-content">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                <ShareSection post={post} />
                <CommentSection />
                <RelatedBlogs posts={relatedPosts} />
              </div>
              
              <aside className="lg:w-1/3">
                <ProgressBar totalWords={post.wordCount} />
              </aside>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border py-6">
        <div className="container text-center font-minion text-blog-neutral">
          © {new Date().getFullYear()} Folklore Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
