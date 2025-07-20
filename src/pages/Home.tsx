import { useState } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import type { Event } from '../types/Event';
import Navbar from '../components/Navbar';

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
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="min-h-screen bg-gray-900 p-4">
                <div className='mt-16'>
                    <EventForm onAddEvent={handleAddEvent} />
                </div>
                <EventList
                    events={events}
                    onDelete={handleDelete}
                    onToggleArchive={handleToggleArchive}
                />
            </div>
        </div>
    );
};

export default Home;
