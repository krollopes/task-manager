import React from 'react';
import Task from '../components/Task/Task';
import useTasks from '../hooks/useTasks';

interface TaskType {
  id: string;
  title: string;
  description: string;
  status: string;
}

const HomePage: React.FC = () => {
  const tasks: TaskType[] = useTasks();

  return (
    <div>
      <h1>Task Manager</h1>
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default HomePage;
