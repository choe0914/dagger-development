import React, { Component } from 'react';
import Skeletal, { SharedLayout } from './components/Skeletal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JoinGame from './test-components/JoinGame';
import Board from './test-components/Board';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route path='/welcome' element={<Skeletal />} />
            <Route path='/joinGame' element={<JoinGame />} />
            <Route path='/gameStart' element={<Board />} />

          </Route>
        </Routes>


      </BrowserRouter>
    );
  }
}

export default App;


