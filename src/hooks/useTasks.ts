import { useEffect, useState } from 'react';
import taskService from '../services/taskService';
import { TaskType } from '../types/TaskType';

/**
 * Custom hook to fetch and manage tasks.
 * @returns {TaskType[]} Array of tasks.
 */
const useTasks = (): TaskType[] => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    // Fetch tasks from the service and update the state
    taskService.getTasks().then((data: TaskType[]) => setTasks(data));
  }, []);

  return tasks;
};

export default useTasks;
