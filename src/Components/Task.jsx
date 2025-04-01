import React from 'react'

export const Task = ({ task }) => {
  return (
    <li>
        <div>
            <div>
                <input type="checkbox" name="" id="" />
                <h3>{task.tittle}</h3>
                <p>{task.description}</p>
            </div>
            <button>
                Delete
            </button>
        </div>
    </li>
  )
}
