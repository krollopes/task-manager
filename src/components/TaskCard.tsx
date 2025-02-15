import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { Task } from '../store/taskStore';

const Card = styled.div`
  background: white;
  padding: 12px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: grab;
`;

const TaskCard = ({ task }: { task: Task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {task.title}
    </Card>
  );
};

export default TaskCard;
