
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { blogPosts, getRelatedPosts } from "@/data/blogData";
import ProgressBar from "@/components/ProgressBar";
import ShareSection from "@/components/ShareSection";
import CommentSection from "@/components/CommentSection";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Clock, Calendar } from "lucide-react";
import { useLanguage, getBodyFont } from "@/context/LanguageContext";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
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
  const bodyFont = getBodyFont(language);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container">
          {/* Max width 4xl here */}
          <div className="mx-auto">
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
                
                <article className={`${bodyFont} text-[21px] leading-[2] blog-content`}>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                <ShareSection post={post} />
                <CommentSection />
                <RelatedBlogs posts={relatedPosts} />
              </div>
              
              <aside className="hidden sm:block lg:w-1/3">
                <ProgressBar totalWords={post.wordCount} />
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
