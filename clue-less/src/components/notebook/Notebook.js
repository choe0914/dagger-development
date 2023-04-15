import React, { Component } from 'react';
import './Notebook.css';
import notebook from "../../assets/img/theme/notebook-raw.png";
const chars = ["GREEN", "MUSTARD", "PEACOCK", "PLUM", "SCARLETT", "WHITE"];
const charsFull = ["Mayor Green", "Colonel Mustard", "Solicitor Peacock",
    "Professor Plum", "Miss Scarlett", "Chef White"];
const weapons = ["CANDLESTICK", "DAGGER", "LEAD PIPE", "REVOLVER", "ROPE", "WRENCH"];

const weaponsTag = ["CANDLESTICK", "DAGGER", "LEAD-PIPE", "REVOLVER", "ROPE", "WRENCH"];

const rooms = ["BALLROOM", "BILLIARD ROOM", "CONSERVATORY", "DINING ROOM", "HALL", "KITCHEN",
    "LIBRARY", "LOUNGE", "STUDY"];

const roomsTag = ["BALLROOM", "BILLIARD-ROOM", "CONSERVATORY", "DINING-ROOM", "HALL", "KITCHEN",
    "LIBRARY", "LOUNGE", "STUDY"];

const hexCharColors = ["#1C5125", "#F9B416", "#0B1535", "#542D59", "#790905", "#ffffff"]
const charTokenColors = ["#3db350", "#F9B416", "#3863f1", "#b95cc5", "#e2140c", "#f5f5f5"];

// window.onload = (event) => {
//   charTokenColors.splice(Number(window.playerCharacter), 1);
//   console.log("here");
// };
window.playerSolve = [-1, -1, -1];
window.playerSolveString = ['', '', ''];
const equalsCheck = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}
function buttonHoverA(e) {
    e.currentTarget.style.filter = "brightness(80%)";
}
function buttonHoverB(e) {
    e.currentTarget.style.filter = "brightness(100%)";
}
function makeSuggestion(e) {
    // TODO need to have backend controller
    fetch("http://localhost:5000/game/suggestion", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            characterId: characterNumbersToIds[window.playerCharacter - 1],
            weaponId: notebookNumbersToId[window.playerSolve[1] - 1],
            gameId: window.gameId,
            roomId: notebookNumbersToId[window.playerSolve[2] - 1]
        }), // body data type must match "Content-Type" header
    }).then((response) => { return response.json() }).then((data) => { console.log(data) });
    // TODO: add turn logic 
    if (window.turnBool) {

    }
}

//TODO: make this work with a set of test cards from backend
function makeAccusation(e) {
    fetch("http://localhost:5000/game/accusation/",
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                characterId: characterNumbersToIds[window.playerCharacter - 1],
                weaponId: notebookNumbersToId[window.playerSolve[1] - 1],
                gameId: window.gameId,
                roomId: notebookNumbersToId[window.playerSolve[2] - 1]
            }),
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
        });

    if (equalsCheck(window.playerSolve, window.testSolve)) {
        document.getElementById("victory").style.display = "unset";
        document.getElementById("victory").style.display = "flex";
    } else {
        document.getElementById("defeat").style.display = "unset";
        document.getElementById("defeat").style.display = "flex";
    }


}
function clearRadios(e) {
    var radios = document.querySelectorAll('.notebook-radio');
    radios.forEach(radio => {
        radio.checked = false;
    });
    document.getElementById("suggest-button").style.visibility = "hidden";
    document.getElementById("accuse-button").style.visibility = "hidden";
    document.getElementById("accuse-warn").style.visibility = "hidden";
    window.playerSolve = [-1, -1, -1];
}
function checkRadios(e) {
    console.log(e.target.id.slice(0, 1));
    switch (e.target.id.slice(0, 1)) {
        case "s":
            window.playerSolveString[0] = charsFull[Number(e.target.id.slice(-1) - 1)];
            window.playerSolve[0] = Number(e.target.id.slice(-1));
            break;
        case "w":
            window.playerSolveString[1] = weapons[Number(e.target.id.slice(-1) - 1)];
            window.playerSolve[1] = Number(e.target.id.slice(-1)) + 6;
            break;
        case "r":
            window.playerSolveString[2] = rooms[Number(e.target.id.slice(-1) - 1)];
            window.playerSolve[2] = Number(e.target.id.slice(-1)) + 12;
            break;
    }
    if (!window.playerSolve.includes(-1)) {
        console.log(window.playerSolve);
        console.log(window.testSolve);
        if (window.turnBool) {
            document.getElementById("suggest-button").style.visibility = "visible";
            document.getElementById("accuse-button").style.visibility = "visible";
            document.getElementById("accuse-warn").style.visibility = "visible";
        }

    }
}
class Notebook extends Component {

    render() {
        return (
            <div className="notebook-div">
                {/* <img className="notebook-img" id="notebook" src={notebook} alt="Detective Notebook"></img> */}


                <table className="notebook-table" id="nb-table">
                    <tbody>
                        <tr className="table-section" id="table-header-row"><td>WHO?</td>
                            <td><div className='nb-header-token' id='nb-token-a' style={{ backgroundColor: window.charColor }}></div></td>
                            <td><div className='nb-header-token' id='nb-token-b' style={{ backgroundColor: window.charTokenColors[0] }}></div></td>
                            <td><div className='nb-header-token' id='nb-token-c' style={{ backgroundColor: window.charTokenColors[1] }}></div></td>
                            <td><div className='nb-header-token' id='nb-token-d' style={{ backgroundColor: window.charTokenColors[2] }}></div></td>
                            <td><div className='nb-header-token' id='nb-token-e' style={{ backgroundColor: window.charTokenColors[3] }}></div></td>
                            <td><div className='nb-header-token' id='nb-token-f' style={{ backgroundColor: window.charTokenColors[4] }}></div></td>
                            <td><div id="refresh-nb-rads" onClick={clearRadios}></div></td>
                        </tr>
                        <tr className="nb-char-row" id={chars[0]}><td>{chars[0]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="sus-1" type="radio" name="who-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-char-row" id={chars[1]}><td>{chars[1]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="sus-2" type="radio" name="who-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-char-row" id={chars[2]}><td>{chars[2]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="sus-3" type="radio" name="who-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-char-row" id={chars[3]}><td>{chars[3]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="sus-4" type="radio" name="who-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-char-row" id={chars[4]}><td>{chars[4]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="sus-5" type="radio" name="who-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-char-row" id={chars[5]}><td>{chars[5]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="sus-6" type="radio" name="who-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="table-section"><td>WHAT?</td></tr>
                        <tr className="nb-weapon-row" id={weaponsTag[0]}><td>{weapons[0]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="weap-1" type="radio" name="what-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-weapon-row" id={weaponsTag[1]}><td>{weapons[1]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="weap-2" type="radio" name="what-radio" onClick={checkRadios} />
                            </td>
                        </tr>

                        <tr className="nb-weapon-row" id={weaponsTag[2]}><td>{weapons[2]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="weap-3" type="radio" name="what-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-weapon-row" id={weaponsTag[3]}><td>{weapons[3]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="weap-4" type="radio" name="what-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-weapon-row" id={weaponsTag[4]}><td>{weapons[4]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="weap-5" type="radio" name="what-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-weapon-row" id={weaponsTag[5]}><td>{weapons[5]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="weap-6" type="radio" name="what-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="table-section"><td>WHERE?</td></tr>
                        <tr className="nb-room-row" id={roomsTag[0]}><td>{rooms[0]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-1" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[1]}><td>{rooms[1]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-2" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[2]}><td>{rooms[2]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-3" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[3]}><td>{rooms[3]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-4" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[4]}><td>{rooms[4]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-5" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[5]}><td>{rooms[5]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-6" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[6]}><td>{rooms[6]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-7" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[7]}><td>{rooms[7]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-8" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                        <tr className="nb-room-row" id={roomsTag[8]}><td>{rooms[8]}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input className="notebook-radio" id="rm-9" type="radio" name="where-radio" onClick={checkRadios} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="player-sugg-acc" id="suggest-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB} onClick={makeSuggestion}>Suggest</button>
                <button className="player-sugg-acc" id="accuse-button" onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB} onClick={makeAccusation}>Accuse !</button>
                <span id="accuse-warn">Beware of false accusations...</span>
            </div>
        );
    }
}

export default Notebook;