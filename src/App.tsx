import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import TaskColumn from './components/TaskColumn';
import { useTaskStore } from './store/taskStore';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
`;

const InputArea = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  width: 200px;
  margin-right: 8px;
`;

const App = () => {
  const { addTask } = useTaskStore();
  const [newTask, setNewTask] = useState('');

  return (
    <DndProvider backend={HTML5Backend}>
      <InputArea>
        <Input
          type='text'
          placeholder='New task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            addTask(newTask);
            setNewTask('');
          }}
        >
          Add
        </button>
      </InputArea>
      <Container>
        <TaskColumn status='todo' title='📌 To Do' />
        <TaskColumn status='inProgress' title='🚀 In Progress' />
        <TaskColumn status='done' title='✅ Done' />
      </Container>
    </DndProvider>
  );
};

export default App;
