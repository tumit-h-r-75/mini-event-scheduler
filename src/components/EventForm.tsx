import React, { useState } from 'react';
import { Event } from '../types/Event';

interface EventFormProps {
  onAddEvent: (newEvent: Omit<Event, 'id'>) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    if (!date) {
      setError('Date is required');
      return;
    }
    if (!time) {
      setError('Time is required');
      return;
    }

    setError('');

    onAddEvent({
      title,
      date,
      time,
      notes: notes.trim() ? notes : undefined,
      category: 'Other', // backend দিবে, তাই dummy data
      archived: false,
    });

    // ফর্ম ক্লিয়ার
    setTitle('');
    setDate('');
    setTime('');
    setNotes('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg text-white shadow-lg"
    >
      <h2 className="text-2xl mb-6 font-semibold text-lime-400">Add New Event</h2>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <div className="mb-4">
        <label htmlFor="title" className="block mb-1 font-medium text-lime-300">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event title"
          className="w-full rounded px-3 py-2 border border-lime-500 bg-gray-800 text-white placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block mb-1 font-medium text-lime-300">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded px-3 py-2 border border-lime-500 bg-gray-800 text-white placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="time" className="block mb-1 font-medium text-lime-300">
          Time <span className="text-red-500">*</span>
        </label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full rounded px-3 py-2 border border-lime-500 bg-gray-800 text-white placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="notes" className="block mb-1 font-medium text-lime-300">
          Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Additional notes (optional)"
          rows={3}
          className="w-full rounded px-3 py-2 border border-lime-500 bg-gray-800 text-white placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-lime-600 hover:bg-lime-700 rounded text-white font-semibold transition"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
