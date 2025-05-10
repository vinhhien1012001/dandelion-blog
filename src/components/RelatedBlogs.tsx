
import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogData";

interface RelatedBlogsProps {
  posts: BlogPost[];
}

const RelatedBlogs = ({ posts }: RelatedBlogsProps) => {
  if (!posts.length) return null;
  
  return (
    <div className="mt-16">
      <h3 className="font-folklore text-2xl mb-6">Related Posts</h3>
      <div className="grid grid-cols-1 gap-6">
        {posts.map(post => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            className="square-block flex flex-col hover:bg-blog-soft-gray/30 transition-colors"
          >
            <h4 className="font-folklore text-xl mb-2">{post.title}</h4>
            <p className="font-minion text-base mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="mt-auto flex justify-between items-center text-sm text-blog-neutral">
              <span>{post.category}</span>
              <span>{post.readTime} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
