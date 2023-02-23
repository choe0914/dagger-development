import React, { useState } from 'react';
import './App.css';
//import BoardTile from "./client/components/GameBoard/BoardTile"
import GameBoard from './client/components/GameBoard'

function App() {
    const [canStart, setFlag] = useState(false);
    const [hidden, setHidden] = useState(true);
  return (
    <>
        {hidden && <button onClick={() => {setFlag(true); setHidden(false);}}>Start the game! </button>}
        {canStart && <div class="board"> <GameBoard /></div>}
    </>);
}

export default App;
