
import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogData";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="blog-card group animate-fade-in">
      <CardContent className="p-0">
        <Link to={`/blog/${post.id}`} className="block">
          <div className="aspect-[16/9] bg-blog-soft-gray w-full flex items-center justify-center">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-blog-neutral">Image Placeholder</span>
            )}
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3 text-sm text-blog-neutral">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="font-folklore text-2xl mb-3 group-hover:text-blog-dark transition-colors">
              {post.title}
            </h3>
            <p className="font-minion text-base mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex justify-between items-center text-sm text-blog-neutral">
              <span>By {post.author}</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
