import React from 'react';
import logo from './logo.svg';
import {BtCounter} from './no-hooks/BtCounter';
import {GlobalCounter} from './no-hooks/GlobalCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          Let's play with hooks
        </span>
      </header>
      <main>
        <BtCounter />
        <hr />
        <GlobalCounter />
      </main>
    </div>
  );
}

export default App;
