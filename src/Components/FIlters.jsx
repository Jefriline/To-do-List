import React from 'react'
import './styles.css'

export const Filters = () => {
  return (
    <div className="filter-buttons">
      <button className="filter-btn active">All</button>
      <button className="filter-btn">Pending</button>
      <button className="filter-btn">Completed</button>
    </div>
  )
}
