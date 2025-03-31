import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = () => {
  return (
    <div className="task-list">
      <div className="task-list__header">
        <h3>Mis Tareas</h3>
        <span className="task-list__count">0 tareas</span>
      </div>

      <div className="task-list__items">
        {/* Aquí irán los TaskItem */}
      </div>

      <div className="task-list__empty">
        <p>No hay tareas pendientes</p>
      </div>
    </div>
  );
};

export default TaskList; 