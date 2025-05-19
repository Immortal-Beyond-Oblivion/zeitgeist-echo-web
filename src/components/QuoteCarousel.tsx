
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const quotes = [
  {
    text: "Literature is the most agreeable way of ignoring life.",
    author: "Fernando Pessoa"
  },
  {
    text: "Words can be like X-rays, if you use them properly—they'll go through anything.",
    author: "Aldous Huxley"
  },
  {
    text: "The purpose of literature is to turn blood into ink.",
    author: "T.S. Eliot"
  },
  {
    text: "Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.",
    author: "Boris Pasternak"
  }
];

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fadeState, setFadeState] = useState("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");
      
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFadeState("in");
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-28 flex flex-col items-center justify-center px-6 relative">
      <div 
        className={cn(
          "text-center transition-opacity duration-500",
          fadeState === "in" ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="text-white font-serif text-lg md:text-xl italic">
          "{quotes[currentQuote].text}"
        </p>
        <p className="mt-2 text-zeitgeist-light text-sm md:text-md">
          — {quotes[currentQuote].author}
        </p>
      </div>
      
      <div className="flex space-x-2 mt-4">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentQuote ? "bg-zeitgeist-purple" : "bg-gray-600"
            } transition-colors duration-300`}
            onClick={() => {
              setFadeState("out");
              setTimeout(() => {
                setCurrentQuote(index);
                setFadeState("in");
              }, 500);
            }}
            aria-label={`Quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;
