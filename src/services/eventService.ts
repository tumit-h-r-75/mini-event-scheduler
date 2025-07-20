import axios from "axios";
import type { Event, NewEvent } from "../types/Event";

const API_URL = "https://mini-event-scheduler-server.vercel.app/events";

// Fetch all events
export const fetchEvents = async (): Promise<Event[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new event
export const addEvent = async (newEvent: NewEvent): Promise<Event> => {
  const response = await axios.post(API_URL, newEvent);
  return response.data;
};

// Toggle archive
export const toggleArchive = async (id: string): Promise<Event> => {
  const response = await axios.put(`${API_URL}/${id}`);
  return response.data;
};

// Delete event
export const deleteEvent = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
