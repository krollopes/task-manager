import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'inProgress' | 'done';
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  moveTask: (id: string, newStatus: Task['status']) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { id: '1', title: 'Learn Zustand', status: 'todo' },
    { id: '2', title: 'Build a Task Manager', status: 'inProgress' },
  ],
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: crypto.randomUUID(), title, status: 'todo' },
      ],
    })),
  moveTask: (id, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    })),
}));
