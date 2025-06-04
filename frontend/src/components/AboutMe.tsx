import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <section className="py-12 mb-16 border-b border-border">
      <div className="container">
        <h2 className="text-4xl font-folklore mb-8 tracking-wide">About Me</h2>
        <Card className="bg-white border border-border overflow-hidden">
          <CardContent className="p-0 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-72 md:h-auto">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={
                    "https://dandelionthewild.com/wp-content/uploads/2021/12/65967752_2392428557699239_2110426786134228992_o-300x169.jpeg"
                  }
                  alt="avatar"
                  className="w-[80%] h-[80%] object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 p-8">
              <img
                src="https://dandelionthewild.com/wp-content/uploads/2022/03/The-Wild-Dandelion-e1648419949174.png"
                alt="Brand name"
                className="w-full lg:w-[50%] object-cover"
              />
              <div className="font-minion text-lg space-y-4">
                <p>
                  In the most turbulent days of May 2020, the pandemic year,
                  there is a secret seed planted on the soil. The seed of a
                  young adult left behind her home country. The seed of a young
                  adult facing uncertainty and unknown. The seed is named The
                  Wild Dandelion – The seed of a dandelion.
                </p>
                <p>
                  It is me, that very young adult. My name is Tú Anh, you can
                  call me Anh or Stella. I am living and working in Bellevue,
                  Washington.
                </p>
                <p>
                  The Wild Dandelion is the wildflower of my heart, it is
                  nurtured, cultivated, and grows in the harshest conditions. As
                  a dandelion thirsts for life even in the hardest winter, then
                  blossoms brightly in yellow in the spring, and is ready to fly
                  in the summer, I hope that I will be like that dandelion
                  sustaining the sufferings to have a wild, free, and gorgeous
                  youth.
                </p>
              </div>
              {/* <div className="mt-6">
                <Button className="rounded-none font-minion">Read More</Button>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
