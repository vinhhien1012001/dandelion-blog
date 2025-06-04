
import React from "react";
import { blogPosts } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";

const BlogList = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-4xl font-folklore mb-10 tracking-wide">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
