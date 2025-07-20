import React from 'react';
import { Event } from '../types/Event';
import EventCard from './EventCard';

interface EventListProps {
  events: Event[];
  onDelete: (id: string) => void;
  onToggleArchive: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onDelete, onToggleArchive }) => {
  if (events.length === 0) {
    return <p className="text-lime-400 mt-4">No events yet. Please add some!</p>;
  }

  return (
    <div className="mt-6">
      {events
        .sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.time}`);
          const dateB = new Date(`${b.date}T${b.time}`);
          return dateA.getTime() - dateB.getTime();
        })
        .map(event => (
          <EventCard
            key={event.id}
            event={event}
            onDelete={onDelete}
            onToggleArchive={onToggleArchive}
          />
        ))}
    </div>
  );
};

export default EventList;
