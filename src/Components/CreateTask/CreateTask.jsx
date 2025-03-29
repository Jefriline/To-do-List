import { useState } from 'react'
import './CreateTask.css'

export const CreateTask = () => {

  const [task, setTask] = useState({
    tittle: '',
    description: ''
  });
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const currentTask = {
      id: Date.now(),
      tittle: task.tittle,
      description: task.description,
      completed: false,
    }
    setTasks([...tasks, currentTask]);
    setTask({
      tittle: '',
      description: ''
    });
  }



  return (
    <div className="container">
      <h2>To-Do List</h2>
      <form action="" onSubmit={addTask}>
      <input type="text" onChange={(e) => setTask({ ...task, tittle: e.target.value })} placeholder="Title" />
      <textarea placeholder="Description" onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
      <button className="add-task">Add Task</button>
      </form>
      <div className="filter-buttons">
        <button className="filter-btn">All</button>
        <button className="filter-btn">Pending</button>
        <button className="filter-btn">Completed</button>
      </div>
      <ul>
        {
          tasks.map((task) => (
              <li key={task.id}>
                <div>
                  <h3>{task.tittle}</h3>
                  <p>{task.description}</p>
                </div>
                <button>Delete</button>
              </li>
          ))
        }
      </ul>
    </div>
  );
};