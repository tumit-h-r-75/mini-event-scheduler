import { useEffect, useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import type { Event, NewEvent } from "../types/Event";
import Navbar from "../components/Navbar";
import { fetchEvents, addEvent, toggleArchive, deleteEvent } from "../services/eventService";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
         console.log("Fetched events:", data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);


  const handleAddEvent = async (newEvent: NewEvent) => {
    try {
      const savedEvent = await addEvent(newEvent);
      setEvents((prev) => [...prev, savedEvent]);
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };


  const handleToggleArchive = async (id: string) => {
    try {
      const updatedEvent = await toggleArchive(id);
      setEvents((prev) =>
        prev.map((e) => (e.id === id ? updatedEvent : e))
      );
    } catch (error) {
      console.error("Failed to toggle archive:", error);
    }
  };

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-gray-900 p-4">
        <div className="mt-1">
          <EventForm onAddEvent={handleAddEvent} />
        </div>
        <EventList
          events={events}
          onDelete={handleDelete}
          onToggleArchive={handleToggleArchive}
        />
      </main>
    </div>
  );
};

export default Home;
