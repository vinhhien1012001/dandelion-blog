
import React from "react";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <AboutMe />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
