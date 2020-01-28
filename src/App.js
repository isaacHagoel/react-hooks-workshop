import React from 'react';
import logo from './logo.svg';
// import {BtCounter, BtCounterMulti} from './with-hooks/BtCounter';
import {GlobalCounter} from './with-hooks/GlobalCounter';
// import {GlobalCounterWithSelect} from './with-hooks/GlobalCounterWithSelect';
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
        {/*<BtCounter />*/}
        {/*<hr />*/}
        {/*<BtCounterMulti />*/}
        {/*<hr />*/}
        <GlobalCounter />
        <hr />
        {/*<GlobalCounterWithSelect/>*/}
      </main>
    </div>
  );
}

export default App;
