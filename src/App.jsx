import React from 'react';
import MainLayout from './Components/layouts/MainLayout/MainLayout';
import TaskManager from './Components/pages/TaskManager/TaskManager';
import './App.css';

function App() {
  return (
    <MainLayout>
      <TaskManager />
    </MainLayout>
  );
}

export default App;
