import React from 'react';
import Container from './Components/Layouts/MainLayout/Container';
import { FormTask } from './Components/FormTask';
import { ListTask } from './Components/ListTask';
import { Filters } from './Components/FIlters';
import './Components/styles.css';
import './App.css';

function App() {
  return (
    <Container>
      <div className="container">
        <h2>To-Do List</h2>
        <FormTask />
        <Filters />
        <ListTask />
      </div>
    </Container>
  );
}

export default App;
