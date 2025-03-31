import { useState } from 'react'
import './CreateTask.css'

export const CreateTask = () => {



  return (
    <div className="container">
      <h2>To-Do List</h2>
      <form action="">
      <input type="text" placeholder="Title" />
      <textarea placeholder="Description"></textarea>
      <button className="add-task">Add Task</button>
      </form>
      <div className="filter-buttons">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Pending</button>
        <button className="filter-btn">Completed</button>
      </div>
      <ul>
        {
          // tasks.map((task) => (
          //     <li key={task.id}>
          //       <div>
          //         <h3>{task.tittle}</h3>
          //         <p>{task.description}</p>                 TASKS
          //       </div>
          //       <button>Delete</button>
          //     </li>
          // ))
        }
      </ul>
    </div>
  );
};