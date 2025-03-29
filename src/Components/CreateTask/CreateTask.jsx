import React from 'react'
import './CreateTask.css'

export const CreateTask = () => {
    return (
      <div className="container">
        <h2>To-Do List</h2>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <button className="add-task">Add Task</button>
        <div className="filter-buttons">
          <button className="filter-btn">All</button>
          <button className="filter-btn">Pending</button>
          <button className="filter-btn">Completed</button>
        </div>
      </div>
    );
};

  
