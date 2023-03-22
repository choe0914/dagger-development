import React,  { useState, createContext, useEffect } from 'react';
import './App.css';
import GameBoard from './client/components/gameBoard'
import { SelectSuspect }from './client/components/login'
import { GameStateContext, SelectedSuspect } from './client/model/context'


function App() {
    const [canStart, setCanStart] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [selectedSuspect, setSelectedSuspect] = useState('');
    // TODO:: Connect to Flask server
    // useEffect(() => {
    //     fetch()
    // })

  return (
    <>
    <GameStateContext.Provider value={[canStart, setCanStart]}>
        <SelectedSuspect.Provider value={[selectedSuspect, setSelectedSuspect]}>
            {!canStart && <SelectSuspect />}
            {canStart && <div class="board"> <GameBoard /></div>}       
        </SelectedSuspect.Provider>
    </GameStateContext.Provider>

    </>);
}

export default App;
