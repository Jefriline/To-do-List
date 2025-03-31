import './Tasks.css'

import React from 'react'

export const Tasks = ({task}) => {
  return (
    <ul>
        {task.map((task) => (
            <li key={task.id}>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <button>Delete</button>
            </li>
        ))}
    </ul>
  )
}
