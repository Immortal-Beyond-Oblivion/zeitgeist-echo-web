
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data for events - replace with real data later
const events = [
  {
    id: 1,
    title: "Poetry Reading Night",
    description: "An evening of poetry reading and appreciation featuring works from both classic and contemporary poets.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1080",
    date: "October 15, 2023"
  },
  {
    id: 2,
    title: "Debate Championship",
    description: "Annual inter-college debate competition on contemporary social and political issues.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1080",
    date: "September 28, 2023"
  },
  {
    id: 3,
    title: "Public Speaking Workshop",
    description: "Interactive workshop on effective public speaking techniques for beginners and intermediate speakers.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1080",
    date: "August 12, 2023"
  },
  {
    id: 4,
    title: "Podcast Recording Session",
    description: "Live podcast recording session with special guest speakers discussing literature in the digital age.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080",
    date: "July 30, 2023"
  }
];

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % events.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);
  
  return (
    <div id="events" className="w-full max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center">
        Recent <span className="text-gradient">Events</span>
      </h2>
      
      <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-[16/9] md:aspect-[21/9]">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="w-full h-full flex items-end bg-gradient-to-t from-zeitgeist-dark via-zeitgeist-dark/70 to-transparent">
                <Card className="m-6 glass bg-zeitgeist-dark/70 border-zeitgeist-purple/30 w-full max-w-md">
                  <div className="p-4">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white">{event.title}</h3>
                    <p className="text-sm text-zeitgeist-light mt-1">{event.date}</p>
                    <p className="mt-2 text-gray-300">{event.description}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 z-10"
          onClick={prevSlide}
          disabled={isAnimating}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 z-10"
          onClick={nextSlide}
          disabled={isAnimating}
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </Button>
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {events.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => {
                  setIsAnimating(false);
                }, 500);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSlideshow;
