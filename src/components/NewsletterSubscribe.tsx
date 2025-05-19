
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div id="newsletter" className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-xl glass border-zeitgeist-purple/30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-zeitgeist-purple/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zeitgeist-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>
        
        <div className="p-8 md:p-12 relative z-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
              Stay <span className="text-gradient">Inspired</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for literary insights, event updates, and exclusive content from Zeitgeist.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/5 border-zeitgeist-purple/30 text-white placeholder:text-gray-400 focus-visible:ring-zeitgeist-purple"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-zeitgeist-purple hover:bg-zeitgeist-accent text-white transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
            
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to receive email communications from Zeitgeist. 
              We'll never share your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
