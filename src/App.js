import 'regenerator-runtime/runtime';
import './App.css';
import React from 'react';

import {Mcupage} from "./Mcupage"
function App() {
  // let search = window.location.search;
  // let params = new URLSearchParams(search);
  // let date = params.get('date');
  // console.log(date);
  return (
    <div className="App">
      <h1 className="when">When is next MCU film releasing?</h1>
      <hr />
      <Mcupage  />
    </div>
  );
}

export default App;
