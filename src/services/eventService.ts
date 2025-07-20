import axios from 'axios';
import { Event } from '../types/Event';

const API_URL = 'http://localhost:5000/events';

// for fetch all function
export const fetchEvents = async (): Promise<Event[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

// add new evenet 

export const addEvent = async (newEvent: Omit<Event, 'id'>): Promise<Event> => {
  const response = await axios.post(API_URL, newEvent);
  return response.data;
};



export const archiveEvent = async (id: string): Promise<Event> => {
  const response = await axios.put(`${API_URL}/${id}`);
  return response.data;
};


export const deleteEvent = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};