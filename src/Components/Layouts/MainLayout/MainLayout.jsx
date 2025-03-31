import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="app-header">
        <h1>Mi Lista de Tareas</h1>
      </header>
      
      <main className="app-main">
        {children}
      </main>

      <footer className="app-footer">
        <p>© 2024 Mi Lista de Tareas</p>
      </footer>
    </div>
  );
};

export default MainLayout; 