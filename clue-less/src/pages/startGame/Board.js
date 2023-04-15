// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './Board.css';
import { useState, useEffect, useContext } from 'react';
import { register_callback } from "../../socket";
import Room from './room'
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
import card0 from "../../assets/img/theme/pwr-card-back.png";
import star from "../../assets/img/icons/star.png";


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

import { CurrentHandContext } from "../../context/cardContext";
window.testSolve = [1, 7, 13];

const cards = [card1, card2, card3, card4, card5, card6, card7,
  card8, card9, card10, card11, card12, card13,
  card14, card15, card16, card17, card18, card19,
  card20, card21];


// TODO: figure out how to put the turn indicator in place
// document.onload = (event) => {
//   console.log("here");
//   if (window.playerCharacter == "5") {
//     document.getElementById("pc-headshot").appendChild('<img className="turn-ind" id="turn-indicator" src={star} alt="Turn Icon"></img>');
//   } else {
//     document.getElementById("opp-div-5").appendChild('<img className="turn-ind" id="turn-indicator" src={star} alt="Turn Icon"></img>');
//   }
// };
function Board() {
  const [currentHand, setCurrentHand] = useContext(CurrentHandContext);

  const [playerTokens, setPlayerTokens] = useState([]);
  const [weaponTokens, setWeaponTokens] = useState([]);

  function updateRoom(message) {
    setPlayerTokens(message.players)
  }
  useEffect(() => {
    // Update the document title using the browser API

    fetch("http://localhost:5000/game/get_all_board_pieces", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, s ame-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: window.gameId,  // TODO get this from somewhere
      }), // body data type must match "Content-Type" header
    }).then((response) => { return response.json(); }).then((data) => {
      setPlayerTokens(data.player_tokens)
      setWeaponTokens(data.weaponTokens)
      register_callback('update_players', updateRoom)
    })
  }, []);

  const navigate = useNavigate();
  function exitGame(e) {
    navigate('/welcome');
  }
  function defeatReturn(e) {
    document.getElementById("defeat").style.display = "none";
    var nbInputs = document.querySelectorAll('input[type="radio"]');
    nbInputs.forEach(nbRad => {
      nbRad.disabled = true;
    });
    document.getElementById("suggest-button").style.visibility = "hidden";
    document.getElementById("accuse-button").style.visibility = "hidden";
    document.getElementById("accuse-warn").style.visibility = "hidden";
    console.log(window.playerSolve);
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

  function dropPrevent(e) {
    document.getElementById("drop-preventer").style.display = "unset";
  }
  function dropEnable(e) {
    document.getElementById("drop-preventer").style.display = "none";
  }

  function turnPass(e) {
    if (window.playerCharacter === "6") {
      var nextPlayer = document.getElementById("opp-div-1");
    } else {
      var nextPlayer = document.getElementById("opp-div-" + (Number(window.playerCharacter) + 1));
    }
    nextPlayer.appendChild(document.getElementById("turn-indicator"));
    document.getElementById("suggest-button").style.visibility = "hidden";
    document.getElementById("accuse-button").style.visibility = "hidden";
    document.getElementById("accuse-warn").style.visibility = "hidden";
    window.turnBool = false;
  }
  return (
    <main className="wrapper">
      <section className="left-panel">
        <img id="bck" src={backgrnd} alt="Player Panel Background"></img>

        <div className="player-card-div">
          <div id="pc-headshot">
            <div className="char-idx" id="player-idx" style={{ backgroundColor: window.charColor }}>{window.playerCharacter}</div>
            <img id="pc" src={window.charHeadshots[Number(window.playerCharacter) - 1]} alt="You"></img>
            <button className="turn-pass" id={"turn-pass" + window.playerCharacter} onClick={turnPass}></button>
            <img className="turn-ind" id="turn-indicator" src={star} alt="Turn Icon"></img>
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
          {/* <button className="player-sugg-acc" i d="accusation-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Accuse</button> */}
        </div>
      </section>
      <section className="board-div">
        <div className="game-board">
          <div id="drop-preventer"></div>
          <Room key="1" player_tokens={playerTokens.filter(player => player.currentPosition == "Kitchen")}
            classId="room-div" styleId="room-1"
            roomId="Kitchen" handleDragOver={allowRoomDrop}
            secretPassage={{ styleId: "secret-pass-1", text: "To Study", toId: "Study" }} />

          <Room key="2" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway1")}
            classId="hallway" hallwayId="1" styleId="hall-1" roomId="Hallway1" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-1", handleDragOver: noAllowDrop }} />

          <Room key="3" player_tokens={playerTokens.filter(player => player.currentPosition == "Ballroom")}
            classId="room-div" styleId="room-2" roomId="Ballroom" handleDragOver={allowRoomDrop} />

          <Room key="4" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway2")}
            classId="hallway" hallwayId="2" styleId="hall-2" roomId="Hallway2" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-2", handleDragOver: noAllowDrop }} />

          <Room key="5" player_tokens={playerTokens.filter(player => player.currentPosition == "Conservatory")}
            classId="room-div" styleId="room-3" roomId="Conservatory" handleDragOver={allowRoomDrop} />

          <Room key="6" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway3")}
            classId="hallway" hallwayId="3" styleId="hall-3" roomId="Hallway3" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-3", handleDragOver: noAllowDrop }} />

          <Room key="7" player_tokens={playerTokens.filter(player => player.currentPosition == "Billiards")}
            classId="room-div" styleId="room-4" roomId="Billiards" handleDragOver={allowRoomDrop} />

          <Room key="8" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway4")}
            classId="hallway" hallwayId="4" styleId="hall-4" roomId="Hallway4" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-4", handleDragOver: noAllowDrop }} />

          <Room key="9" player_tokens={playerTokens.filter(player => player.currentPosition == "Library")}
            classId="room-div" styleId="room-5" roomId="Library" handleDragOver={allowRoomDrop} />

          <Room key="10" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway5")}
            classId="hallway" hallwayId="5" styleId="hall-5" roomId="Hallway5" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-5", handleDragOver: noAllowDrop }} />

          <Room key="11" player_tokens={playerTokens.filter(player => player.currentPosition == "Study")}
            classId="room-div" styleId="room-6" roomId="Study" handleDragOver={allowRoomDrop}
            secretPassage={{ styleId: "secret-pass-6", text: "To Kitchen", toId: "Kitchen" }} />

          <Room key="12" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway6")}
            classId="hallway" hallwayId="6" styleId="hall-6" roomId="Hallway6" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-6", handleDragOver: noAllowDrop }} />

          <Room key="13" player_tokens={playerTokens.filter(player => player.currentPosition == "Hall")}
            classId="room-div" styleId="room-7" roomId="Hall" handleDragOver={allowRoomDrop} />

          <Room key="14" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway7")}
            classId="hallway" hallwayId="7" styleId="hall-7" roomId="Hallway7" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-7", handleDragOver: noAllowDrop }} />

          <Room key="15" player_tokens={playerTokens.filter(player => player.currentPosition == "Lounge")}
            classId="room-div" styleId="room-8" roomId="Lounge" handleDragOver={allowRoomDrop} />

          <Room key="16" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway8")}
            classId="hallway" hallwayId="8" styleId="hall-8" roomId="Hallway8" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-8", handleDragOver: noAllowDrop }} />

          <Room key="17" player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway9")}
            classId="hallway" hallwayId="9" styleId="hall-9" roomId="Hallway9" handleDragOver={allowHallwayDrop}
            startingLocation={{ classId: "loc-9", handleDragOver: noAllowDrop }} />

          <Room key="18" player_tokens={playerTokens.filter(player => player.currentPosition == "Dining Room")}
            classId="room-div" styleId="room-9" roomId="Dining Room" handleDragOver={allowRoomDrop} />


          <div className="room-div" id="room-0">
            <div id="solve-deck">
              <img className="card-0" src={card0} alt="Solve Envelope"></img>
              <img className="card-0" src={card0} alt="Solve Envelope"></img>
              <img className="card-0" src={card0} alt="Solve Envelope"></img>
            </div>
          </div>

          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway10A")}
            classId="hallway" hallwayId="10A" styleId="hall-10A" roomId="Hallway10A" handleDragOver={allowHallwayDrop} />
          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway10B")}
            classId="hallway" hallwayId="10B" styleId="hall-10B" roomId="Hallway10B" handleDragOver={allowHallwayDrop} />
          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway11")}
            classId="hallway" hallwayId="11" styleId="hall-11" roomId="Hallway11" handleDragOver={allowHallwayDrop} />
          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway12A")}
            classId="hallway" hallwayId="12A" styleId="hall-12A" roomId="Hallway12A" handleDragOver={allowHallwayDrop} />
          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway12B")}
            classId="hallway" hallwayId="12B" styleId="hall-12B" roomId="Hallway12B" handleDragOver={allowHallwayDrop} />
          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway12C")}
            classId="hallway" hallwayId="12C" styleId="hall-12C" roomId="Hallway12C" handleDragOver={allowHallwayDrop} />
          <Room player_tokens={playerTokens.filter(player => player.currentPosition == "Hallway13")}
            classId="hallway" hallwayId="13" styleId="hall-13" roomId="Hallway13" handleDragOver={allowHallwayDrop} />
        </div>
      </section>
      <section className="right-panel">
        <img id="bck-right" src={backgrnd} alt="Player Panel Background"></img>
        <div id="game-state">
          <div id="card-reveal" onDragOver={allowCardDrop} onDrop={dropCardReveal}></div>
        </div>
        <div id="opposing-chars">
          <div className="turn-div" id={"opp-div-" + window.opponentIds[0]}>
            <div className="char-idx" id="player-idx-1" style={{ backgroundColor: window.charTokenColors[0] }}>{window.opponentIds[0]}</div>
            <img className="opp" src={window.activePlayers[0]} alt="CARD1"></img>
          </div>
          <div className="turn-div" id={"opp-div-" + window.opponentIds[1]}>
            <div className="char-idx" id="player-idx-2" style={{ backgroundColor: window.charTokenColors[1] }}>{window.opponentIds[1]}</div>
            <img className="opp" src={window.activePlayers[1]} alt="CARD1"></img>
          </div>
          <div className="turn-div" id={"opp-div-" + window.opponentIds[2]}>
            <div className="char-idx" id="player-idx-3" style={{ backgroundColor: window.charTokenColors[2] }}>{window.opponentIds[2]}</div>
            <img className="opp" src={window.activePlayers[2]} alt="CARD1"></img>
          </div>
          <div className="turn-div" id={"opp-div-" + window.opponentIds[3]}>
            <div className="char-idx" id="player-idx-4" style={{ backgroundColor: window.charTokenColors[3] }}>{window.opponentIds[3]}</div>
            <img className="opp" src={window.activePlayers[3]} alt="CARD1"></img>
          </div>
          <div className="turn-div" id={"opp-div-" + window.opponentIds[4]}>
            <div className="char-idx" id="player-idx-5" style={{ backgroundColor: window.charTokenColors[4] }}>{window.opponentIds[4]}</div>
            <img className="opp" src={window.activePlayers[4]} alt="CARD1"></img>
          </div>
        </div>
      </section>
      <div id="victory">
        <span id="victory-header">PLAYER {window.userName} WINS!</span>
        <div id="victory-reveal">
          {/* TODO: index cards to strings for alt tags */}
          <img className="victory-cards" src={cards[window.testSolve[0]]} alt="CARD1"></img>
          <img className="victory-cards" src={cards[window.testSolve[1]]} alt="CARD2"></img>
          <img className="victory-cards" src={cards[window.testSolve[2]]} alt="CARD3"></img>
        </div>
        <button id="close-victory" onClick={exitGame}>Exit Game</button>
      </div>
      <div id="defeat">
        <span id="defeat-header">SORRY {window.userName}, YOU HAVE MADE A FALSE ACCUSATION.</span>
        <span id="defeat-instructions">PLEASE RETURN TO THE GAME SO YOU MAY CONTINUE TO REVEAL CLUES</span>
        <span id="defeat-summary">ACCUSATION SUMMARY</span>
        {/* <div id="defeat-wait">

          <img className="defeat-cards" src={cards[window.playerSolve[0]]} alt="CARD1"></img>
          <img className="defeat-cards" src={cards[window.playerSolve[1]]} alt="CARD2"></img>
          <img className="defeat-cards" src={cards[window.playerSolve[2]]} alt="CARD3"></img>
        </div> */}
        <button id="close-defeat" onClick={defeatReturn}>Return</button>
      </div>
    </main>
  );
}

export default Board;