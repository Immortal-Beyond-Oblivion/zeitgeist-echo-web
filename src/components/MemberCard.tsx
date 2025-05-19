
import { Card, CardContent } from "@/components/ui/card";

export interface MemberProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const MemberCard = ({ name, role, bio, imageUrl }: MemberProps) => {
  return (
    <Card className="glass border-zeitgeist-purple/30 overflow-hidden card-hover">
      <div className="h-64 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zeitgeist-dark via-zeitgeist-dark/70 to-transparent" />
      </div>
      <CardContent className="p-6 -mt-16 relative">
        <h3 className="text-white font-serif text-xl font-bold">{name}</h3>
        <p className="text-zeitgeist-light text-sm mt-1">{role}</p>
        <p className="text-gray-300 mt-4">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
