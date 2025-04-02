import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { TaskContext } from './Context/context'
import { Task } from './Task'


export const ListTask = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ul className="list-task">
      {
        tasks.map((tasks) => (
          <Task 
            tittle={tasks.tittle} 
            description={tasks.description} 
            value={tasks.id}
          />
        ))
      }
    </ul>
  )
}