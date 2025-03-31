import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar nueva tarea..."
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        Agregar
      </button>
    </form>
  );
};

export default TodoForm; 