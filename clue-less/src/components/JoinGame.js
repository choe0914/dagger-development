import './JoinGame.css';
// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import boddy from "../assets/img/theme/boddy-black.jpg";
import backdrop from "../assets/img/theme/backdrop.jpg";
// const [game-launch, setgame-launch] = useState('');

function GameType() {
    const navigate = useNavigate();
    // var launchButton = useRef();

    const [newGame, setNewGame] = useState(0)
  
    // const gameChoice = useRef();
    function handleGameChoiceClick(event) {
        if (newGame) {
            fetch("http://localhost:5000/game/create", {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                  "Content-Type": "application/json",
                },// body data type must match "Content-Type" header
              }).then((response) => { return response.json(); }).then((data) => {
                window.gameId = data.gameId
                handleProceeding()
              })
        } else {
            window.gameId = document.getElementById("game-id-field").value
            handleProceeding()
        }
    }

    function handleProceeding() {
        var launchButton = document.getElementById("launch-char-select");
        launchButton.style.transform = "translateY(2px)";
        setTimeout(() => {
            launchButton.style.transform = "translateY(-1px)";
        }, 100);
        navigate('/characterSelect');
    }
    function buttonHoverA(event) {
        var launchButton = document.getElementById("launch-char-select");
        launchButton.style.filter = "brightness(80%)";
    }
    function buttonHoverB(event) {
        var launchButton = document.getElementById("launch-char-select");
        launchButton.style.filter = "brightness(100%)";
    }
    function handleGameChoiceA(event) {
        setNewGame(0)
        var launchButton = document.getElementById("launch-char-select");
        launchButton.style.visibility = "hidden";
        var fieldText = document.getElementById("game-id-field");
        fieldText.style.border = "1px solid rgba(255, 0, 0, 0.5)";
        var gameChoice = document.getElementById("game-search-wrapper");
        var gameVis = document.getElementById("game-vis-wrapper");
        gameChoice.style.display = "unset";
        gameChoice.style.display = "flex";
        gameVis.style.display = "none";
    }
    function handleGameChoiceB(event) {
        setNewGame(1)
        var launchButton = document.getElementById("launch-char-select");
        var gameChoice = document.getElementById("game-search-wrapper");
        var gameVis = document.getElementById("game-vis-wrapper");
        document.getElementById("game-id-field").value = "";
        gameChoice.style.display = "none";
        gameVis.style.display = "unset";
        gameVis.style.display = "flex";
        launchButton.style.visibility = "hidden";

    }
    // 121212
    function handleGameVisChoiceA(event) {
        var launchButton = document.getElementById("launch-char-select");
        // TODO: handle the option to post the game ID so others may see it in their global lists
        console.log("Public");
        launchButton.style.visibility = "visible";
    }
    function handleGameVisChoiceB(event) {
        var launchButton = document.getElementById("launch-char-select");
        // TODO: handle the option to keep game ID private
        console.log("Private");
        launchButton.style.visibility = "visible";
    }
    function checkField(event) {
        var launchButton = document.getElementById("launch-char-select");
        var fieldText = document.getElementById("game-id-field");
        // handling valid length joinable game ID
        if (Number.isInteger(Number(fieldText.value))) {
            if (fieldText.value !== "" && fieldText.value.length > 0) {
                launchButton.style.visibility = "visible";
                fieldText.style.border = "1px solid green";
            } else {
                launchButton.style.visibility = "hidden";
                fieldText.style.border = "1px solid rgba(255, 0, 0, 0.5)";
            }
        } else {
            fieldText.style.border = "1px solid rgba(255, 0, 0, 0.5)";
        }

    }
    return (
        <main className="game-launch-body">
            <section className="game-launch-panel">
                <section id="game-launch-wrapper">
                    <section className="game-launch-entry">

                        <span id="game-launch-header">Welcome {window.userName}</span>
                        <p>Begin by selecting "Join Game" or "Host New Game". If starting a new game, an ID will be provided after character selection that you can share to invite friends or make public so others may join.</p>
                        <span className="game-option-txt" id="game-launch-join">Join Game<input id="join-game" className="game-choice" type="radio" name="choice" onClick={handleGameChoiceA}></input></span>
                        <div id="game-search-wrapper">
                            <input type="text" id="game-id-field" maxLength={6} onKeyUp={checkField} name="game-id-field" placeholder='Game ID'></input>
                            <button id="search">List</button>
                        </div>
                        <span className="game-option-txt" id="game-launch-new">Host New Game<input id="start-game" className="game-choice" type="radio" name="choice" onClick={handleGameChoiceB}></input></span>
                        <div id="game-vis-wrapper">
                            <span className="game-vis-txt" id="game-vis-public" onClick={handleGameVisChoiceA}>Public<input id="game-public" className="game-vis" type="radio" name="vis-choice"></input></span>
                            <span className="game-vis-txt" id="game-vis-private" onClick={handleGameVisChoiceB}>Private<input id="game-private" className="game-vis" type="radio" name="vis-choice"></input></span>
                        </div>
                        <button id="launch-char-select" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB} onClick={handleGameChoiceClick}>Continue</button>
                        <span id="next-info">Next - Character Selection</span>
                    </section>
                </section>
            </section>
            <section className="splash-panel-A">
                <img className="backdrop" id="back-drop" src={backdrop} alt="Pre-game miscellaneous hints"></img>
                <div id="crime">

                    <p id="boddy-intro"><h1 id="boden">Boden "Boddy" Black</h1>Boden "Boddy" Black Jr. isn't rich. He is filthy rich. He made it the old-fashioned way, by inheritance.
                        Jumping from one passion project to another, mostly due to utter boredom, his newest venture is the obnoxiously
                        opulent Boden Black Hotel. Fitting. Despite public opposition, the hotel seems to have been fast tracked by government
                        officials and he's partnering with some of Hue County's elite. Hopefully this project won't bore him to death.
                    </p>
                    <img className="boddy" id="boddy-black" src={boddy} alt="Boden 'Boddy' Black"></img>
                </div>
            </section>


        </main>
    );
}

export default GameType;