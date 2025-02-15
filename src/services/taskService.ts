import { TaskType } from '../types/TaskType';

const tasks: TaskType[] = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'todo' },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'inProgress',
  },
];

const getTasks = (): Promise<TaskType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  });
};

export default { getTasks };
