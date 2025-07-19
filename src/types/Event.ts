export interface Event {
  id: string;                
  title: string;             
  date: string;               
  time: string;              
  notes?: string;             
  category: "Work" | "Personal" | "Other";
  archived: boolean;         
}