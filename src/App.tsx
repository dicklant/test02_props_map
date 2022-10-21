import React from 'react';
import './App.css';

import ListClient from './ListClient';



function App() {

  let state = {
    clients: [
        {id:1, nom:"Lantim"},
        {id:2, nom:"Biscarros"},
        {id:3, nom:"Parros"},
        {id:4, nom:"Timlan"}
      ]
  };

  let title = "Liste de clients :";
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <ul>
          {state.clients.map((client) => <ListClient id = {client.id} nom = {client.nom} />)}
        </ul>
        <a
          className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
