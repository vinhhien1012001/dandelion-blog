
import React from "react";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import BlogList from "@/components/BlogList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <AboutMe />
        <BlogList />
      </main>
      <footer className="border-t border-border py-6">
        <div className="container text-center font-minion text-blog-neutral">
          © {new Date().getFullYear()} Folklore Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
