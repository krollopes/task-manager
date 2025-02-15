import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { Task, useTaskStore } from '../store/taskStore';
import TaskCard from './TaskCard';

const Column = styled.div`
  width: 250px;
  min-height: 300px;
  background: #f3f3f3;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskColumn = ({
  status,
  title,
}: {
  status: Task['status'];
  title: string;
}) => {
  const { tasks, moveTask } = useTaskStore();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { id: string }) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Column ref={drop} style={{ background: isOver ? '#e0e0e0' : '#f3f3f3' }}>
      <h3>{title}</h3>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </Column>
  );
};

export default TaskColumn;
