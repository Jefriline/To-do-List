import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
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
        <TaskContext.Provider value={{ task, setTask, tasks, setTasks, addTask }}>
            {children}
        </TaskContext.Provider>
    )
}