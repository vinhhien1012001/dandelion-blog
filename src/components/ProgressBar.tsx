
import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  totalWords: number;
}

const ProgressBar = ({ totalWords }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress((scrollTop / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", calculateReadingProgress);
    return () => window.removeEventListener("scroll", calculateReadingProgress);
  }, []);

  const estimatedTimeToRead = Math.ceil(totalWords / 200); // Assuming average reading speed of 200 words per minute

  return (
    <div className="sticky top-20 w-full h-64 square-block bg-white">
      <div className="flex flex-col h-full justify-between">
        <div>
          <p className="font-folklore text-lg mb-2">Reading Progress</p>
          <div className="w-full h-2 bg-blog-soft-gray">
            <div 
              className="h-full bg-blog-dark transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="font-minion mt-3 text-blog-neutral">
            {Math.round(progress)}% complete
          </p>
        </div>
        
        <div className="mt-auto">
          <p className="font-minion text-blog-neutral">
            <span className="block font-bold mb-1">Estimated time:</span>
            {estimatedTimeToRead} minute{estimatedTimeToRead !== 1 ? 's' : ''} to read
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
