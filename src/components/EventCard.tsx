import React from "react";
import type { Event } from "../types/Event";

interface EventCardProps {
  event: Event;
  onDelete: (id: string) => void;
  onToggleArchive: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onDelete,
  onToggleArchive,
}) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md p-5 mb-4 text-white border border-lime-600 hover:border-lime-400 transition">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-lime-400">{event.title}</h3>
        <div className="space-x-2">
          <button
            onClick={() => onToggleArchive(event.id)}
            className={`px-3 py-1 rounded text-sm font-medium ${
              event.archived
                ? "bg-lime-600 hover:bg-lime-700"
                : "bg-gray-700 hover:bg-gray-600"
            } transition`}
          >
            {event.archived ? "Unarchive" : "Archive"}
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="px-3 py-1 rounded text-sm font-medium bg-red-600 hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>

      <p className="mt-2 text-lime-300">
        <span className="font-semibold">Date:</span> {event.date}
      </p>
      <p className="text-lime-300">
        <span className="font-semibold">Time:</span> {event.time}
      </p>

      {event.notes && (
        <p className="mt-2 text-lime-200 italic">
          <span className="font-semibold">Notes:</span> {event.notes}
        </p>
      )}

      <p className="mt-2 text-lime-400 font-semibold ">
        Category: <span className="capitalize">{event.category}</span>
      </p>
    </div>
  );
};

export default EventCard;
