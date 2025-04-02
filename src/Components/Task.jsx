import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const Task = ({ tittle, description, value}) => {
  return (
    <li className="task-item">
      <div className="task-content">
        <div className="task-header">
          <label className="checkbox-container">
            <input type="checkbox" className="task-checkbox" />
            <span className="checkmark"></span>
          </label>
          <h3 className="task-title">{tittle}</h3>
        </div>
        {description && <p className="task-description">{description}</p>}
      </div>
      <button className="delete-btn" aria-label="Delete task" value={value}>
        <FaTrash />
      </button>
    </li>
  )
}
