
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import MemberCard, { MemberProps } from "@/components/MemberCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock data - replace with real data later
const members: MemberProps[] = [
  {
    id: 1,
    name: "Aisha Patel",
    role: "Club President",
    bio: "English literature major with a passion for modernist poetry and postcolonial literature.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 2,
    name: "Raj Sharma",
    role: "Vice President",
    bio: "Debate champion specializing in critical theory and contemporary political discourse.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Events Coordinator",
    bio: "Creative writing enthusiast with published short stories in various literary magazines.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 4,
    name: "Arjun Kumar",
    role: "Podcast Host",
    bio: "Public speaking expert and podcast enthusiast who loves discussing philosophical literature.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 5,
    name: "Divya Reddy",
    role: "Secretary",
    bio: "Linguistics student with an interest in semantics, pragmatics, and literary translation.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1080"
  },
  {
    id: 6,
    name: "Vikram Joshi",
    role: "Treasurer",
    bio: "Economics major with a love for dystopian fiction and political satire.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1080"
  }
];

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(members);
  
  useEffect(() => {
    document.title = "Members - Zeitgeist Literature Club";
    
    const results = members.filter(member => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-zeitgeist-dark">
      <Navbar />
      
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Our <span className="text-gradient">Members</span>
            </h1>
            <p className="text-gray-300">
              Meet the passionate individuals who make up the Zeitgeist Literature Club. 
              Our diverse team brings together a wealth of knowledge, creativity, and enthusiasm 
              for literature, debate, and public speaking.
            </p>
            
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-zeitgeist-purple/30 text-white placeholder:text-gray-400 focus-visible:ring-zeitgeist-purple w-full"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.length > 0 ? (
              filteredMembers.map(member => (
                <MemberCard key={member.id} {...member} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400">No members found matching your search criteria.</p>
                <Button 
                  variant="link" 
                  className="text-zeitgeist-light mt-2"
                  onClick={() => setSearchTerm("")}
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-300 mb-6">
              Passionate about literature, debate, or public speaking? We're always looking for enthusiastic 
              individuals to join our club. Reach out to us to learn more about becoming a member.
            </p>
            <Button className="bg-zeitgeist-purple hover:bg-zeitgeist-accent text-white transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-zeitgeist-dark py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src="/lovable-uploads/760d3fd0-1ae6-4ed3-8151-82b31a6c6993.png"
              alt="Zeitgeist Logo"
              className="h-10 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zeitgeist Literature Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Members;
