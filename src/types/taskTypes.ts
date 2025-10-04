export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
  priority: 'High' | 'Medium' | 'Low';
  due_date?: string; 
  category?: string;
}
