
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  name: string;
  content: string;
  date: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Alex Johnson",
      content: "This is such a thoughtful perspective. I've been thinking about this topic a lot lately.",
      date: "May 9, 2025"
    },
    {
      id: 2,
      name: "Sarah Miller",
      content: "I love how you connected these ideas to everyday experiences. Really resonated with me.",
      date: "May 8, 2025"
    }
  ]);
  
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !newComment.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name and comment",
        variant: "destructive"
      });
      return;
    }
    
    const comment: Comment = {
      id: comments.length + 1,
      name: name.trim(),
      content: newComment.trim(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
    
    setComments([...comments, comment]);
    setNewComment("");
    setName("");
    
    toast({
      title: "Success",
      description: "Your comment has been added",
    });
  };
  
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle size={20} />
        <h3 className="font-folklore text-2xl">Comments ({comments.length})</h3>
      </div>
      
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="square-block">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-folklore">{comment.name}</h4>
              <span className="text-sm text-blog-neutral">{comment.date}</span>
            </div>
            <p className="font-minion">{comment.content}</p>
          </div>
        ))}
      </div>
      
      <div className="square-block">
        <h4 className="font-folklore text-xl mb-4">Leave a Comment</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-border p-3 font-minion"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Textarea
              placeholder="Share your thoughts..."
              className="font-minion resize-none min-h-[120px]"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
          <Button type="submit" className="rounded-none">
            Post Comment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
