// import React, { Component } from 'react';
import './Board.css';
import Notebook from '../../components/notebook/Notebook';
// import kitchen from "../assets/img/room-img/kitchen.jpg";
// import ball from "../assets/img/room-img/ballroom.jpg";
// import billiards from "../assets/img/room-img/billiards.jpg";
// import conservatory from "../assets/img/room-img/conservatory.jpg";
// import dining from "../assets/img/room-img/dining.jpg";
// import hall from "../assets/img/room-img/hall.jpg";
// import library from "../assets/img/room-img/library.jpg";
// import lounge from "../assets/img/room-img/lounge.jpg";
// import study from "../assets/img/room-img/study.jpg";
// import center from "../assets/img/room-img/center.jpg";

import backgrnd from "../../assets/img/theme/backdrop.jpg";

import green from "../../assets/img/char-img/green.png";
import mustard from "../../assets/img/char-img/mustard.png";
import peacock from "../../assets/img/char-img/peacock.png";
import plum from "../../assets/img/char-img/plum.png";
import scarlett from "../../assets/img/char-img/scarlett.png";
import white from "../../assets/img/char-img/white.png";

import card1 from "../../assets/img/char-cards/green.png";
import card2 from "../../assets/img/char-cards/mustard.png";
import card3 from "../../assets/img/char-cards/peacock.png";
import card4 from "../../assets/img/char-cards/plum.png";
import card5 from "../../assets/img/char-cards/scarlett.png";
import card6 from "../../assets/img/char-cards/white.png";

import card7 from "../../assets/img/weapon-cards/candlestick.png";
import card8 from "../../assets/img/weapon-cards/dagger.png";
import card9 from "../../assets/img/weapon-cards/pipe.png";
import card10 from "../../assets/img/weapon-cards/revolver.png";
import card11 from "../../assets/img/weapon-cards/rope.png";
import card12 from "../../assets/img/weapon-cards/wrench.png";

import card13 from "../../assets/img/room-cards/ball.png";
import card14 from "../../assets/img/room-cards/billiards.png";
import card15 from "../../assets/img/room-cards/conservatory.png";
import card16 from "../../assets/img/room-cards/dining.png";
import card17 from "../../assets/img/room-cards/hall.png";
import card18 from "../../assets/img/room-cards/kitchen.png";
import card19 from "../../assets/img/room-cards/library.png";
import card20 from "../../assets/img/room-cards/lounge.png";
import card21 from "../../assets/img/room-cards/study.png";

const cards = [card1, card2, card3, card4, card5, card6, card7,
  card8, card9, card10, card11, card12, card13,
  card14, card15, card16, card17, card18, card19,
  card20, card21];
const charHeadshots = [green, mustard, peacock, plum, scarlett, white];
var loadedChars = ["1","2","3","4","5","6"];



// window.onload = (event) => {
//   window.charTokenColors.splice(Number(window.playerCharacter)-1, 1);
//   console.log(window.charTokenColors);
// };
function Board() {
  function buttonHoverA(e) {
    e.currentTarget.style.filter = "brightness(80%)";
  }
  function buttonHoverB(e) {
    e.currentTarget.style.filter = "brightness(100%)";
  }
  function cardClick(e) {
    e.currentTarget.style.zIndex = "101";
  }
  function cardEnter(e) {
    e.currentTarget.style.transform = "translateY(-20px)";
  }
  function cardExit(e) {
    e.currentTarget.style.zIndex = "0";
    e.currentTarget.style.transform = "translateY(20px)";
  }
  function brighten() {
    var hallways = document.querySelectorAll('.hallway');
    hallways.forEach(hallway => {
      hallway.style.filter = "brightness(100%)";
    });
    // for (let i = 0; i < hallways.length; i++) {

    // }
    // hallways.style.filter = "brightness(100%)";
  }

  function noAllowDrop(e) {
    brighten();
    e.stopPropagation();
  }
  function allowHallwayDrop(e) {
    if ((e.target.lastElementChild.className === "starting-loc") || (e.target.lastElementChild.className === "hall-num")) {
      e.target.style.filter = "brightness(80%)";
      e.preventDefault();
    }
  }

  function allowCardDrop(e) {
    if (e.target.className === "card-container" || e.target.id === "card-reveal") {
      e.preventDefault();
    }
  }
  function dropCardReveal(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    document.getElementById("drop-preventer").style.display = "none";
  }

  function allowRoomDrop(e) {
    brighten();
    e.preventDefault();
  }
  function dragCard(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  function dropKitchen(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall1(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropBall(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall2(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropConservatory(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall3(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropBilliards(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall4(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropLibrary(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall5(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropStudy(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall6(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall7(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropLounge(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall8(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropDining(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall9(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall10A(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall10B(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall11(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall12A(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall12B(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall12C(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }
  function dropHall13(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    brighten();
  }

  // checks current player character, allows movement of token by them only
  function checkPC(e) {
    if (e.currentTarget.id.slice(-1) === window.playerCharacter) {
      e.currentTarget.setAttribute("draggable", "true");
      e.currentTarget.style.cursor = "pointer";
    }
    //// testing event
    // e.currentTarget.setAttribute("draggable", "true");
    // e.currentTarget.style.cursor = "pointer";
  }
  function secretPassageKitchen(e) {
    var char = document.getElementById(`char-${window.playerCharacter}`);
    if (e.currentTarget.parentElement === char.parentElement) {
      document.getElementById("room-6").appendChild(char);
    }  
  }
  function secretPassageConservatory(e) {
    var char = document.getElementById(`char-${window.playerCharacter}`);
    if (e.currentTarget.parentElement === char.parentElement) {
      document.getElementById("room-8").appendChild(char);
    } 
  }
  function secretPassageStudy(e) {
    var char = document.getElementById(`char-${window.playerCharacter}`);
    if (e.currentTarget.parentElement === char.parentElement) {
      document.getElementById("room-1").appendChild(char);
    } 
  }
  function secretPassageLounge(e) {
    var char = document.getElementById(`char-${window.playerCharacter}`);
    if (e.currentTarget.parentElement === char.parentElement) {
      document.getElementById("room-3").appendChild(char);
    } 
  }
  function fixColors(e) {
    window.charTokenColors.splice(Number(window.playerCharacter)-1, 1);
    document.getElementById("nb-token-b").style.backgroundColor = window.charTokenColors[0];
  }

  function dropPrevent(e) {
    document.getElementById("drop-preventer").style.display = "unset";
  }
  function dropEnable(e) {
    document.getElementById("drop-preventer").style.display = "none";
  }
  return (
    <main className="wrapper">
      <section className="left-panel">
        <img id="bck" src={backgrnd} alt="Player Panel Background"></img>
        
        <div className="player-card-div">
          <div id="pc-headshot">
            <div id="player-idx" style={{backgroundColor: window.charColor}}>{window.playerCharacter}</div>
            <img id="pc" src={charHeadshots[Number(window.playerCharacter)-1]} alt="You"></img>
          </div>
          {/* <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 3 + "vh" }}>
            <img className="player-card" id="card-1" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div> */}
          {/* <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 15 + "vh" }}>
            <img className="player-card" id="card-2" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div> */}
          {/* <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 27 + "vh" }}>
            <img className="player-card" id="card-3" src={cards[Math.floor(Math.random() * cards.length)]} alt="Detective Notebook"></img>
          </div> */}
          <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 27 + "vh" }} onDragOver={allowCardDrop} onDrop={dropCardReveal}>
            <img className="player-card" id="card-1" src={cards[Math.floor(Math.random() * cards.length)]} onMouseDown={dropPrevent} onMouseUp={dropEnable} draggable="true" onDragStart={dragCard} onDragOver={noAllowDrop} alt="Card 1"></img>
          </div>
          <div className="card-container" onClick={cardClick} onMouseEnter={cardEnter} onMouseLeave={cardExit} style={{ top: 39 + "vh" }} onDragOver={allowCardDrop} onDrop={dropCardReveal}>
            <img className="player-card" id="card-2" src={cards[Math.floor(Math.random() * cards.length)]} onMouseDown={dropPrevent} onMouseUp={dropEnable} draggable="true" onDragStart={dragCard} onDragOver={noAllowDrop} alt="Card 2"></img>
          </div>
          <div className="card-container" style={{ top: 51 + "vh" }} onDragOver={allowCardDrop} onDrop={dropCardReveal}>
            <img className="player-card" id="card-3" src={cards[Math.floor(Math.random() * cards.length)]} onMouseDown={dropPrevent} onMouseUp={dropEnable} draggable="true" onDragStart={dragCard} onDragOver={noAllowDrop} alt="Card 3"></img>
          </div>
        </div>



        <div className="player-interact-div">
          {/* <button className="player-sugg-acc" id="suggestion-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Suggest</button> */}
          <Notebook />
          {/* <button className="player-sugg-acc" id="accusation-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Accuse</button> */}
        </div>
      </section>
      <section className="board-div">
        <div className="game-board">
          <div id="drop-preventer"></div>
          <div className="room-div" id="room-1" onDrop={dropKitchen} onDragOver={allowRoomDrop}>
            <button className="secret-passage" id="secret-pass-1" onClick={secretPassageKitchen}>To Study</button>
          </div>
          <div className="hallway" id="hall-1" onDrop={dropHall1} onDragOver={allowHallwayDrop}><span className="hall-num">1</span>
            <div className="starting-loc" id="loc-1" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-1" onMouseDown={checkPC} onMouseUp={brighten} draggable="false" onDragStart={drag} onDragOver={noAllowDrop}></div>
            </div>
          </div>
          <div className="room-div" id="room-2" onDrop={dropBall} onDragOver={allowRoomDrop}>
          </div>
          <div className="hallway" id="hall-2" onDrop={dropHall2} onDragOver={allowHallwayDrop}><span className="hall-num">2</span>
            <div className="starting-loc" id="loc-2" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-2" onMouseDown={checkPC} draggable="false" onDragStart={drag} onDragOver={noAllowDrop}></div>
            </div>
          </div>
          <div className="room-div" id="room-3" onDrop={dropConservatory} onDragOver={allowRoomDrop}>
            <button className="secret-passage" id="secret-pass-3" onClick={secretPassageConservatory}>To Lounge</button>
          </div>
          <div className="hallway" id="hall-3" onDrop={dropHall3} onDragOver={allowHallwayDrop}><span className="hall-num">3</span>
            <div className="starting-loc" id="loc-3" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-3" onMouseDown={checkPC} draggable="false" onDragStart={drag} onDragOver={noAllowDrop}></div>
            </div>
          </div>

          <div className="room-div" id="room-4" onDrop={dropBilliards} onDragOver={allowRoomDrop}>
          </div>
          <div className="hallway" id="hall-4" onDrop={dropHall4} onDragOver={allowHallwayDrop}><span className="hall-num">4</span>
            <div className="starting-loc" id="loc-4" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-4" onMouseDown={checkPC} draggable="false" onDragStart={drag} onDragOver={noAllowDrop}></div>
            </div>
          </div>

          <div className="room-div" id="room-5" onDrop={dropLibrary} onDragOver={allowRoomDrop}>
          </div>
          <div className="hallway" id="hall-5" onDrop={dropHall5} onDragOver={allowHallwayDrop}><span className="hall-num">5</span>
            <div className="starting-loc" id="loc-5" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-5" onMouseDown={checkPC} draggable="false" onDragStart={drag} onDragOver={noAllowDrop}></div>
            </div>
          </div>

          <div className="room-div" id="room-6" onDrop={dropStudy} onDragOver={allowRoomDrop}>
            <button className="secret-passage" id="secret-pass-6" onClick={secretPassageStudy}>To Kitchen</button>
          </div>
          <div className="hallway" id="hall-6" onDrop={dropHall6} onDragOver={allowHallwayDrop}><span className="hall-num">6</span>
            <div className="starting-loc" id="loc-6" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-6" onMouseDown={checkPC} draggable="false" onDragStart={drag} onDragOver={noAllowDrop}></div>
            </div>
          </div>

          <div className="room-div" id="room-7" onDrop={dropHall} onDragOver={allowRoomDrop}>
          </div>
          <div className="hallway" id="hall-7" onDrop={dropHall7} onDragOver={allowHallwayDrop}><span className="hall-num">7</span>
            <div className="starting-loc" id="loc-7" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-7"></div>
            </div>
          </div>

          <div className="room-div" id="room-8" onDrop={dropLounge} onDragOver={allowRoomDrop}>
            <button className="secret-passage" id="secret-pass-8" onClick={secretPassageLounge}>To Conservatory</button>
          </div>
          <div className="hallway" id="hall-8" onDrop={dropHall8} onDragOver={allowHallwayDrop}><span className="hall-num">8</span>
            <div className="starting-loc" id="loc-8" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-8"></div>
            </div>
          </div>

          <div className="hallway" id="hall-9" onDrop={dropHall9} onDragOver={allowHallwayDrop}><span className="hall-num">9</span>
            <div className="starting-loc" id="loc-9" onDragOver={noAllowDrop}>
              <div className="char-token" id="char-9"></div>
            </div>
          </div>
          <div className="room-div" id="room-9" onDrop={dropDining} onDragOver={allowRoomDrop}>
          </div>

          <div className="room-div" id="room-0">
          </div>

          <div className="hallway" id="hall-10A" onDrop={dropHall10A} onDragOver={allowHallwayDrop}><span className="hall-num">10A</span></div>
          <div className="hallway" id="hall-10B" onDrop={dropHall10B} onDragOver={allowHallwayDrop}><span className="hall-num">10B</span></div>
          <div className="hallway" id="hall-11" onDrop={dropHall11} onDragOver={allowHallwayDrop}><span className="hall-num">11</span></div>
          <div className="hallway" id="hall-12A" onDrop={dropHall12A} onDragOver={allowHallwayDrop}><span className="hall-num">12A</span></div>
          <div className="hallway" id="hall-12B" onDrop={dropHall12B} onDragOver={allowHallwayDrop}><span className="hall-num">12B</span></div>
          <div className="hallway" id="hall-12C" onDrop={dropHall12C} onDragOver={allowHallwayDrop}><span className="hall-num">12C</span></div>
          <div className="hallway" id="hall-13" onDrop={dropHall13} onDragOver={allowHallwayDrop}><span className="hall-num">13</span></div>
        </div>
      </section>
      <section className="right-panel">
        <div id="card-reveal" onDragOver={allowCardDrop} onDrop={dropCardReveal}></div>
        <div id="opposing-chars">

        </div>
      </section>
    </main>
  );
}

export default Board;