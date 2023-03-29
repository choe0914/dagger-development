import React, { Component } from 'react';
import Header from './components/Header';
// import Board from './components/Board';
import Skeletal from './components/Skeletal';
import SkeletalTest from './components/SkeletalTest';
import Footer from './components/Footer';

 
class App extends Component {
  render() {
    return (
      <div>
        
        <Header />
        {/* <Board /> */}
        <Skeletal />
        <Footer />
      </div>
    );
  }
}
 
export default App;


