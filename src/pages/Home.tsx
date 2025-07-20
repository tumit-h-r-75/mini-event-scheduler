import React, { useState } from 'react';
import EventForm from '../components/EventForm';
import { Event } from '../types/Event';

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const eventWithId = {
      id: Date.now().toString(),
      ...newEvent,
    };
    setEvents(prev => [...prev, eventWithId]);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <EventForm onAddEvent={handleAddEvent} />
      {/* EventList / অন্য UI তোমার মত যোগ করবে */}
    </div>
  );
};

export default Home;
