import React from 'react';
import './App.css';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHook from './SimpleFormInputHook';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
     {/* <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormInputHook /> */}
      <Clicker />
    </div>
  );
}

export default App;
