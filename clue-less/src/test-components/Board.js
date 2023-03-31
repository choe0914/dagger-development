import React, { Component } from 'react';
import './Board.css';
import Notebook from './Notebook.js'
import kitchen from "../assets/img/room-img/kitchen.jpg";
import ball from "../assets/img/room-img/ballroom.jpg";
import billiards from "../assets/img/room-img/billiards.jpg";
import conservatory from "../assets/img/room-img/conservatory.jpg";
import dining from "../assets/img/room-img/dining.jpg";
import hall from "../assets/img/room-img/hall.jpg";
import library from "../assets/img/room-img/library.jpg";
import lounge from "../assets/img/room-img/lounge.jpg";
import study from "../assets/img/room-img/study.jpg";
import center from "../assets/img/room-img/center.jpg";

import card1 from "../assets/img/char-cards/green.png";
import card2 from "../assets/img/char-cards/mustard.png";
import card3 from "../assets/img/char-cards/peacock.png";
import card4 from "../assets/img/char-cards/plum.png";
import card5 from "../assets/img/char-cards/scarlett.png";
import card6 from "../assets/img/char-cards/white.png";

import card7 from "../assets/img/weapon-cards/candlestick.png";
import card8 from "../assets/img/weapon-cards/dagger.png";
import card9 from "../assets/img/weapon-cards/pipe.png";
import card10 from "../assets/img/weapon-cards/revolver.png";
import card11 from "../assets/img/weapon-cards/rope.png";
import card12 from "../assets/img/weapon-cards/wrench.png";

import card13 from "../assets/img/room-cards/ball.png";
import card14 from "../assets/img/room-cards/billiards.png";
import card15 from "../assets/img/room-cards/conservatory.png";
import card16 from "../assets/img/room-cards/dining.png";
import card17 from "../assets/img/room-cards/hall.png";
import card18 from "../assets/img/room-cards/kitchen.png";
import card19 from "../assets/img/room-cards/library.png";
import card20 from "../assets/img/room-cards/lounge.png";
import card21 from "../assets/img/room-cards/study.png";

const cards = [card1, card2, card3, card4, card5, card6, card7,
  card8, card9, card10, card11, card12, card13,
  card14, card15, card16, card17, card18, card19,
  card20, card21];

// TODO: alt tags on player cards
function Board() {

  return (
    <main className="wrapper">
      <section className="left-panel">
        <div className="player-card-div">
          <div className="card-container">
            <img className="player-card" id="card-1" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div>
          <div className="card-container">
            <img className="player-card" id="card-2" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div>
          <div className="card-container">
            <img className="player-card" id="card-3" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div>
          <div className="card-container">
            <img className="player-card" id="card-4" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div>
          <div className="card-container">
            <img className="player-card" id="card-5" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div>
          <div className="card-container">
            <img className="player-card" id="card-6" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div>
        </div>

        <Notebook />


      </section>
      <section className="board-div">
        <div className="game-board">
          <img className="room-img" id="kitchen-img" src={kitchen} alt="Kitchen"></img>
          <div className="hallway" id="hall-1">1
                <div className="starting-loc" id="loc-1">1</div>
          </div>
          <img className="room-img" id="dining-img" src={dining} alt="Dining Room"></img>
          <div className="hallway" id="hall-2">2
                <div className="starting-loc" id="loc-2">2</div>
          </div>
          <img className="room-img" id="lounge-img" src={lounge} alt="Lounge"></img>
          <div className="hallway" id="hall-3">3
                <div className="starting-loc" id="loc-3">3</div>
          </div>
          <div className="hallway" id="hall-4">4</div>
          <div className="hallway" id="hall-5">5
                <div className="starting-loc" id="loc-4">4</div>
          </div>
          <img className="room-img" id="ball-img" src={ball} alt="Ballroom"></img>
          <div className="hallway" id="hall-6">6</div>
          <img className="room-img" id="center-img" src={center} alt="Interrogation Room"></img>
          <div className="hallway" id="hall-7">7</div>
          <img className="room-img" id="hall-img" src={hall} alt="Hall"></img>
          <div className="hallway" id="hall-8">8
                <div className="starting-loc" id="loc-5">5</div>
          </div>
          <div className="hallway" id="hall-9">9</div>
          <div className="hallway" id="hall-10">10</div>
          <img className="room-img" id="conservatory-img" src={conservatory} alt="Conservatory"></img>
          <div className="hallway" id="hall-11">11</div>
          <img className="room-img" id="billiards-img" src={billiards} alt="Billiard Room"></img>
          <div className="hallway" id="hall-12">12</div>
          <img className="room-img" id="library-img" src={library} alt="Library"></img>
          <div className="hallway" id="hall-13">13
                <div className="starting-loc" id="loc-6">6</div>
          </div>
          <img className="room-img" id="study-img" src={study} alt="Study"></img>
        </div>
      </section>
      <section className="right-panel"></section>
    </main>
  );
}

export default Board;