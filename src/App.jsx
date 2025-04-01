import React from 'react';
import MainLayout from './Components/layouts/MainLayout/MainLayout';
import { FormTask } from './Components/FormTask';
import { ListTask } from './Components/ListTask';
import { FIlters } from './Components/FIlters';
import './Components/styles.css';
import './App.css';

function App() {
  return (
    <MainLayout>
      <div className="container">
        <h2>To-Do List</h2>
        <FormTask />
        <FIlters />
        //listtask//
      </div>
    </MainLayout>
  );
}

export default App;
