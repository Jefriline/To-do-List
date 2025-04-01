import React from 'react'
import './styles.css'

export const FormTask = () => {
  return (
    <form className="form-task">
      <input type="text" placeholder="Title" className="input-task" />
      <textarea placeholder="Description" className="textarea-task"></textarea>
      <button className="add-task">Add Task</button>
    </form>
  )
}
