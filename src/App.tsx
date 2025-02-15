import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskColumn from './components/TaskColumn/TaskColumn';
import { useTaskStore } from './store/taskStore';
import GlobalStyles from './styles/globalStyles';
import { Container, Input, InputArea } from './styles/TaskStyles';

const App = () => {
  const { addTask } = useTaskStore();
  const [newTask, setNewTask] = useState('');

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <InputArea>
        <Input
          type='text'
          placeholder='New task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            addTask(newTask, 'Default description');
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
