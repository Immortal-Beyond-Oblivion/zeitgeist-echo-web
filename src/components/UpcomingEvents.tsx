
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data - replace with real data later
const upcomingEvents = [
  {
    id: 1,
    title: "Open Mic Poetry Session",
    date: "May 25, 2025",
    time: "6:00 PM",
    location: "Library Auditorium"
  },
  {
    id: 2,
    title: "Debate: Technology & Privacy",
    date: "June 3, 2025",
    time: "4:30 PM",
    location: "Main Auditorium"
  },
  {
    id: 3,
    title: "Creative Writing Workshop",
    date: "June 12, 2025",
    time: "2:00 PM",
    location: "Seminar Hall B"
  }
];

const UpcomingEvents = () => {
  return (
    <Card className="glass border-zeitgeist-purple/30 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-white text-xl">
          <Calendar className="mr-2" size={18} />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {upcomingEvents.map((event) => (
          <div 
            key={event.id} 
            className="border-l-2 border-zeitgeist-purple pl-3 py-1 card-hover"
          >
            <h3 className="font-serif font-semibold text-white">{event.title}</h3>
            <div className="mt-1 text-sm text-gray-300">
              <p>{event.date} • {event.time}</p>
              <p className="text-zeitgeist-light">{event.location}</p>
            </div>
          </div>
        ))}
        <a 
          href="#"
          className="block text-sm text-zeitgeist-light hover:text-white transition-colors mt-4 text-right"
        >
          View all events →
        </a>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
