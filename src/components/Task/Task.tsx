import React from 'react';
import { TaskContainer, TaskDescription, TaskTitle } from './Task.styles';

interface TaskProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: string;
  };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <TaskContainer>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
    </TaskContainer>
  );
};

export default Task;
