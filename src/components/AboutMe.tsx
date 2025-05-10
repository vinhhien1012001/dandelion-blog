
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <section className="py-12 mb-16 border-b border-border">
      <div className="container">
        <h2 className="text-4xl font-folklore mb-8 tracking-wide">About Me</h2>
        <Card className="bg-white border border-border overflow-hidden">
          <CardContent className="p-0 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-72 md:h-auto bg-blog-soft-gray">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-blog-neutral text-lg">Profile Image</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-8">
              <h3 className="font-folklore text-2xl mb-4">Taylor's Blog</h3>
              <div className="font-minion text-lg space-y-4">
                <p>
                  Welcome to my minimalist blog where I share thoughts on literature, 
                  music, and everyday moments that inspire creativity. I believe in 
                  the power of words to transform and connect us.
                </p>
                <p>
                  When I'm not writing, you'll find me exploring vintage bookstores, 
                  experimenting with new recipes, or strumming my guitar under the stars.
                </p>
              </div>
              <div className="mt-6">
                <Button className="rounded-none font-minion">Read More</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
