
import React from "react";
import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogData";

interface ShareSectionProps {
  post: BlogPost;
}

const ShareSection = ({ post }: ShareSectionProps) => {
  const shareUrl = window.location.href;
  
  const handleShare = (platform: string) => {
    let shareLink = "";
    
    switch (platform) {
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    
    window.open(shareLink, "_blank", "width=600,height=400");
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copied to clipboard!");
    });
  };
  
  return (
    <div className="mt-12 py-6 border-t border-b border-border">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Share size={18} />
          <span className="font-folklore">Share this post</span>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-none" 
            onClick={() => handleShare("twitter")}
          >
            Twitter
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-none" 
            onClick={() => handleShare("facebook")}
          >
            Facebook
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-none" 
            onClick={() => handleShare("linkedin")}
          >
            LinkedIn
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="rounded-none" 
            onClick={copyToClipboard}
          >
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
