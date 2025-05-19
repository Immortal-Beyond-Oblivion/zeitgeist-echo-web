
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import QuoteCarousel from "@/components/QuoteCarousel";
import EventSlideshow from "@/components/EventSlideshow";
import UpcomingEvents from "@/components/UpcomingEvents";
import PodcastSection from "@/components/PodcastSection";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

const Index = () => {
  useEffect(() => {
    document.title = "Zeitgeist - The Literature Club";
  }, []);

  return (
    <div className="min-h-screen bg-zeitgeist-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-zeitgeist-purple/10 rounded-full -translate-y-1/4 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zeitgeist-accent/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            <img
              src="/lovable-uploads/760d3fd0-1ae6-4ed3-8151-82b31a6c6993.png"
              alt="Zeitgeist Logo"
              className="w-32 md:w-40 mb-8 animate-float"
            />
            
            <h1 className="font-serif font-bold text-center">
              <span className="block text-4xl md:text-6xl lg:text-7xl text-white mb-2 writing-animation">
                ZEITGEIST
              </span>
              <span className="block text-xl md:text-2xl text-zeitgeist-light">
                THE LITERATURE CLUB
              </span>
            </h1>
            
            <div className="h-0.5 w-40 bg-gradient-to-r from-transparent via-zeitgeist-purple to-transparent my-8"></div>
            
            <div className="max-w-2xl">
              <QuoteCarousel />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button 
                className="px-6 py-3 bg-zeitgeist-purple hover:bg-zeitgeist-accent text-white rounded-md transition-colors duration-300"
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Events
              </button>
              <button 
                className="px-6 py-3 border border-zeitgeist-purple text-zeitgeist-light hover:bg-zeitgeist-purple/20 rounded-md transition-colors duration-300"
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Newsletter
              </button>
            </div>
            
            <div className="mt-16 md:mt-24">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EventSlideshow />
          </div>
          <div>
            <UpcomingEvents />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-zeitgeist-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              About <span className="text-gradient">Zeitgeist</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Zeitgeist is the premier Literature, Debating, and Public Speaking club of IIIT Dharwad. 
              We foster a community of literary enthusiasts, critical thinkers, and eloquent speakers who 
              share a passion for words and ideas. Through various events, workshops, and initiatives, 
              we aim to cultivate the art of expression and literary appreciation among students.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="glass p-6 rounded-lg border-zeitgeist-purple/30">
                <div className="bg-zeitgeist-purple/20 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white font-serif text-xl mb-2">Literature</h3>
                <p className="text-gray-300 text-sm">Exploring the world of books, poetry, and creative writing.</p>
              </div>
              
              <div className="glass p-6 rounded-lg border-zeitgeist-purple/30">
                <div className="bg-zeitgeist-purple/20 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5286 20 9.14429 19.6853 7.94153 19.1333L3 20L4.2 15.5C3.44918 14.4367 3 13.2503 3 12C3 7.58172 7.02944 4 12 4C16.97 4 21 7.58172 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white font-serif text-xl mb-2">Debate</h3>
                <p className="text-gray-300 text-sm">Honing critical thinking and persuasive argumentation skills.</p>
              </div>
              
              <div className="glass p-6 rounded-lg border-zeitgeist-purple/30">
                <div className="bg-zeitgeist-purple/20 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.5V19.38C12 21.25 10.5 22 9 22H7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 22H16C18.4 22 20 20.4 20 18V15C20 12.6 18.4 11 16 11H8C5.6 11 4 12.6 4 15V18C4 20.4 5.6 22 8 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 5V9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5V9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.7998 2H16.2998C17.3998 2 18.3998 3 18.3998 4.1V5.7C18.3998 6.8 17.3998 7.8 16.2998 7.8H7.7998C6.6998 7.8 5.5998 6.9 5.5998 5.7V4.1C5.5998 3 6.6998 2 7.7998 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white font-serif text-xl mb-2">Public Speaking</h3>
                <p className="text-gray-300 text-sm">Developing confidence and eloquence in verbal expression.</p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <img 
                src="/lovable-uploads/b591d71e-9928-449e-8094-f1b32cbbe764.png"
                alt="IIIT Dharwad Logo"
                className="h-16"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Indian Institute of Information Technology, Dharwad
            </p>
          </div>
        </div>
      </section>
      
      {/* Podcast Section */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <PodcastSection />
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-zeitgeist-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscribe />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-zeitgeist-dark py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/lovable-uploads/760d3fd0-1ae6-4ed3-8151-82b31a6c6993.png"
                alt="Zeitgeist Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-white font-serif font-bold text-xl">Zeitgeist</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-zeitgeist-light transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-zeitgeist-light transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-zeitgeist-light transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zeitgeist Literature Club. All rights reserved.
            </p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-zeitgeist-light text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-zeitgeist-light text-sm transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-zeitgeist-light text-sm transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
