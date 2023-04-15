import React, { Component } from 'react';
import { init_socket } from './socket'
import Skeletal from './pages/welcome/Welcome';
import { SharedLayout } from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JoinGame from './components/JoinGame';
import Board from './pages/startGame/Board';
import CharacterSelect from './pages/characterSelect/CharacterSelect';
import { CurrentHandProvider } from './context/cardContext';

function App() {
  init_socket();
  return (
    <CurrentHandProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route path='/welcome' element={<Skeletal />} />
            <Route path='/joinGame' element={<JoinGame />} />
            <Route path='/characterSelect' element={<CharacterSelect />} />
            <Route path='/gameStart' element={<Board key="1234" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrentHandProvider>
  );

}

export default App;


