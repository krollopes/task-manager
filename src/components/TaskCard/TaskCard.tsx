import { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Task } from '../../store/taskStore';
import { Card } from './TaskCard.styles';

const TaskCard = ({ task }: { task: Task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  return (
    <Card ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {task.title}
    </Card>
  );
};

export default TaskCard;
