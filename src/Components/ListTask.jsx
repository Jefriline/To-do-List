import React from 'react'
import { Task } from './Task'
import './styles.css'

export const ListTask = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="list-task">
      {
        tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      }
    </ul>
  )
}
