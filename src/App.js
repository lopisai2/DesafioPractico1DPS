import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    
    <div className="container">
      <div className="jumbotron">
        <h1>Lista de Compras</h1>
      </div>
      <Menu />            
    </div>
    
  );
}

export default App;
