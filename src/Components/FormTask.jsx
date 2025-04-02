import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { TaskContext } from './Context/context'

export const FormTask = () => {
  const { task, setTask, addTask } = useContext(TaskContext);

  return (
    <form className="form-task" onSubmit={addTask}>
      <input type="text" onChange={(e) => setTask({ ...task, tittle: e.target.value })} placeholder="Title" className="input-task" />
      <textarea placeholder="Description" onChange={(e) => setTask({ ...task, description: e.target.value })} className="textarea-task"></textarea>
      <button className="add-task">Add Task</button>
    </form>
  )
}
