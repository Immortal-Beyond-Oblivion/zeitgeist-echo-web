
import { Card, CardContent } from "@/components/ui/card";

// Mock data for podcasts - replace with real data later
const podcasts = [
  {
    id: 1,
    title: "The Art of Literary Criticism",
    description: "Discussion on approaches to analyzing and appreciating literature.",
    spotifyEmbedUrl: "https://open.spotify.com/embed/episode/placeholder1",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 2,
    title: "Poetry in the Modern Age",
    description: "Exploring contemporary poetry trends and their cultural significance.",
    spotifyEmbedUrl: "https://open.spotify.com/embed/episode/placeholder2",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 3,
    title: "Authors Who Changed History",
    description: "The revolutionary writers who shaped our understanding of the world.",
    spotifyEmbedUrl: "https://open.spotify.com/embed/episode/placeholder3",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1080"
  }
];

const PodcastSection = () => {
  return (
    <div id="podcasts" className="w-full">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
        Our <span className="text-gradient">Podcasts</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {podcasts.map(podcast => (
          <Card 
            key={podcast.id} 
            className="glass border-zeitgeist-purple/30 overflow-hidden card-hover"
          >
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${podcast.image})` }}
            >
              <div className="w-full h-full flex items-center justify-center bg-zeitgeist-dark/50">
                <div className="bg-zeitgeist-purple/80 rounded-full p-3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" />
                    <path d="M9.5 8.5L16.5 12L9.5 15.5V8.5Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-serif font-semibold text-white text-xl">{podcast.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{podcast.description}</p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1DB954]">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                  </svg>
                  <span className="ml-1 text-sm text-gray-300">Spotify</span>
                </div>
                <a 
                  href="#" 
                  className="text-sm text-zeitgeist-light hover:text-white transition-colors"
                >
                  Listen →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="https://open.spotify.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-zeitgeist-purple text-zeitgeist-light hover:bg-zeitgeist-purple/20 transition-colors duration-300 rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
            <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
          </svg>
          View All Episodes on Spotify
        </a>
      </div>
    </div>
  );
};

export default PodcastSection;
