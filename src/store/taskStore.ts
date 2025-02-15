import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'done';
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  moveTask: (id: string, newStatus: Task['status']) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Learn Zustand',
      description: 'Learn how to use Zustand for state management',
      status: 'todo',
    },
    {
      id: '2',
      title: 'Build a Task Manager',
      description: 'Build a task manager application using React and Zustand',
      status: 'inProgress',
    },
  ],

  addTask: (title, description) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: crypto.randomUUID(), title, description, status: 'todo' },
      ],
    })),

  moveTask: (id, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    })),
}));
