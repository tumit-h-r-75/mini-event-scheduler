import React, { useState } from "react";
import type { NewEvent } from "../types/Event";

interface EventFormProps {
  onAddEvent: (newEvent: NewEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!date) {
      setError("Date is required");
      return;
    }
    if (!time) {
      setError("Time is required");
      return;
    }

    setError("");

    onAddEvent({
      title,
      date,
      time,
      notes: notes.trim() ? notes : undefined,
      archived: false,
    });

    setTitle("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-gray-800 text-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 hover:shadow-lime-600 transition duration-300"
    >
      <h2 className="text-3xl font-bold text-lime-400 text-center">
        Create a New Event
      </h2>

      {error && (
        <p className="text-red-500 text-center font-medium" role="alert">
          {error}
        </p>
      )}

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block mb-3 text-lime-300 font-semibold"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-lime-500 placeholder:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block mb-3 text-lime-300 font-semibold"
            >
              Date <span className="text-red-500">*</span>
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-lime-500 text-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block mb-3 text-lime-300 font-semibold"
            >
              Time <span className="text-red-500">*</span>
            </label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-lime-500 text-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block mb-2 text-lime-300 font-semibold"
          >
            Notes
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional notes..."
            rows={3}
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-lime-500 placeholder-gray-300 text-white resize-none focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-lime-600 hover:bg-lime-700 transition rounded-lg text-white text-lg font-semibold shadow-sm"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
