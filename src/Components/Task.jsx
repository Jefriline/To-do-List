import React from 'react'

export const Task = ({ tittle, description }) => {
  return (
    <li>
        <div>
            <div>
                <input type="checkbox" name="" id="" />
                <h3>{tittle}</h3>
                <p>{description}</p>
            </div>
            <button>
                Delete
            </button>
        </div>
    </li>
  )
}
