import React from 'react';
import './TaskItem.css';

const TaskItem = () => {
  return (
    <div className="task-item">
      <div className="task-item__checkbox">
        <input type="checkbox" />
      </div>
      
      <div className="task-item__content">
        <p className="task-item__text">Ejemplo de tarea</p>
        <span className="task-item__date">Creada: 31/03/2024</span>
      </div>

      <div className="task-item__actions">
        <button className="task-item__edit">
          <span>✎</span>
        </button>
        <button className="task-item__delete">
          <span>×</span>
        </button>
      </div>
    </div>
  );
};

export default TaskItem; 