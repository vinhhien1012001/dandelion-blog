
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "Name is required"),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

const Subscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success(`Thank you ${data.name}! You've been subscribed successfully.`);
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container max-w-2xl">
          <h1 className="font-folklore text-4xl md:text-5xl mb-6">Subscribe to Our Newsletter</h1>
          <p className="font-minion text-lg mb-8">
            Stay updated with our latest articles, stories, and insights. We promise not to spam your inbox!
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                <Mail className="mr-2" />
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-12 border-t border-border pt-8">
            <h2 className="font-folklore text-2xl mb-4">Contact Us</h2>
            <p className="font-minion text-lg mb-4">
              Have questions, suggestions, or just want to say hello? Feel free to reach out to us.
            </p>
            <p className="font-minion">
              Email: <a href="mailto:hello@folkloreblog.com" className="text-blog-dark hover:underline">hello@folkloreblog.com</a>
            </p>
          </div>
        </div>
      </main>
      <footer className="border-t border-border py-6">
        <div className="container text-center font-minion text-blog-neutral">
          © {new Date().getFullYear()} Folklore Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Subscribe;
