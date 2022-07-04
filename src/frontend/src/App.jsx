import React from 'react';
import Tasks from './components/Tasks';
import TasksProvider from './context/TasksProvider';

function App() {
  return (
    <TasksProvider>
      <Tasks />
    </TasksProvider>
  );
}

export default App;
