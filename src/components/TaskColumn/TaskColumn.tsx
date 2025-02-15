import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Task, useTaskStore } from '../../store/taskStore';
import TaskCard from '../TaskCard/TaskCard';
import { Column } from './TaskColumn.styles';

interface TaskColumnProps {
  status: Task['status'];
  title: string;
}

const ForwardedColumn = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef.current!);
  return <Column ref={innerRef} {...props} />;
});

const TaskColumn: React.FC<TaskColumnProps> = ({ status, title }) => {
  const { tasks, moveTask } = useTaskStore();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { id: string }) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const columnRef = useRef<HTMLDivElement>(null);
  drop(columnRef);

  return (
    <ForwardedColumn
      ref={columnRef}
      style={{ background: isOver ? '#e0e0e0' : '#f3f3f3' }}
    >
      <h3>{title}</h3>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </ForwardedColumn>
  );
};

export default TaskColumn;
