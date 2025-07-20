import  { useState } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import type { Event } from '../types/Event';

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const eventWithId = {
      id: Date.now().toString(),
      ...newEvent,
    };
    setEvents(prev => [...prev, eventWithId]);
  };

  // for delete funtion
  const handleDelete = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  // for toggole the arcribe
  const handleToggleArchive = (id: string) => {
    setEvents(prev =>
      prev.map(event =>
        event.id === id ? { ...event, archived: !event.archived } : event
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <EventForm onAddEvent={handleAddEvent} />
      <EventList
        events={events}
        onDelete={handleDelete}
        onToggleArchive={handleToggleArchive}
      />
    </div>
  );
};

export default Home;
