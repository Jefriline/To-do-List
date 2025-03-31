import React from 'react';
import './TaskForm.css';

const TaskForm = () => {
  return (
    <form className="task-form">
      <div className="task-form__input-group">
        <input
          type="text"
          placeholder="¿Qué necesitas hacer?"
          className="task-form__input"
        />
        <button type="submit" className="task-form__button">
          Agregar Tarea
        </button>
      </div>
    </form>
  );
};

export default TaskForm; 