import React from 'react';
import TaskList from '../../ui/TaskList/TaskList';
import TaskForm from '../../ui/TaskForm/TaskForm';
import './TaskManager.css';

const TaskManager = () => {
  return (
    <div className="task-manager">
      <div className="task-manager__header">
        <h2>Gestiona tus Tareas</h2>
        <p>Organiza y completa tus tareas diarias</p>
      </div>

      <TaskForm />
      
      <div className="task-manager__content">
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManager; 