
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Book, Users, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zeitgeist-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src="/lovable-uploads/760d3fd0-1ae6-4ed3-8151-82b31a6c6993.png"
                alt="Zeitgeist Logo"
              />
              <span className="ml-2 text-white font-serif font-bold text-xl">Zeitgeist</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-white hover:text-zeitgeist-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/members" className="text-white hover:text-zeitgeist-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Members
              </Link>
              <Link to="/#events" className="text-white hover:text-zeitgeist-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Events
              </Link>
              <Link to="/#podcasts" className="text-white hover:text-zeitgeist-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Podcasts
              </Link>
              <Button 
                variant="outline" 
                size="sm"
                className="border-zeitgeist-purple text-zeitgeist-light hover:bg-zeitgeist-purple/20"
                onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Main menu"
              className="text-white hover:text-zeitgeist-light"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zeitgeist-dark/95 backdrop-blur-md animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="flex items-center text-white hover:bg-zeitgeist-purple/20 hover:text-zeitgeist-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book className="mr-2" size={18} />
              Home
            </Link>
            <Link
              to="/members"
              className="flex items-center text-white hover:bg-zeitgeist-purple/20 hover:text-zeitgeist-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="mr-2" size={18} />
              Members
            </Link>
            <Link
              to="/#events"
              className="flex items-center text-white hover:bg-zeitgeist-purple/20 hover:text-zeitgeist-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Calendar className="mr-2" size={18} />
              Events
            </Link>
            <Button 
              variant="outline" 
              className="w-full mt-4 border-zeitgeist-purple text-zeitgeist-light hover:bg-zeitgeist-purple/20"
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
