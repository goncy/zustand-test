import React from "react";

import logo from "./logo.svg";
import {usePokemon, useShuffle} from "./pokemon/hooks";
import "./App.css";

function App() {
  const pokemon = usePokemon();
  const shuffle = useShuffle();

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>{pokemon.name}</p>
        <button onClick={shuffle}>Shuffle</button>
      </header>
    </div>
  );
}

export default App;
