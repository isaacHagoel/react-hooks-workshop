import React from 'react';
import logo from './logo.svg';
import {BtCounter, BtCounterMulti} from './intuition/BtCounter';
// import {GlobalCounter} from './no-hooks/GlobalCounter';
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
        <BtCounterMulti />
        <hr />
        {/*<GlobalCounter />*/}
      </main>
    </div>
  );
}

export default App;
