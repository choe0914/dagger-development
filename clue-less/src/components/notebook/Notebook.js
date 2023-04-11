import React, { Component } from 'react';
import './Notebook.css';
import notebook from "../../assets/img/theme/notebook-raw.png";
const chars = ["GREEN", "MUSTARD", "PEACOCK", "PLUM", "SCARLETT", "WHITE"];

const weapons = ["CANDLESTICK", "DAGGER", "LEAD PIPE", "REVOLVER", "ROPE", "WRENCH"];

const weaponsTag = ["CANDLESTICK", "DAGGER", "LEAD-PIPE", "REVOLVER", "ROPE", "WRENCH"];

const rooms = ["BALLROOM", "BILLIARD ROOM", "CONSERVATORY", "DINING ROOM", "HALL", "KITCHEN",
    "LIBRARY", "LOUNGE", "STUDY"];

const roomsTag = ["BALLROOM", "BILLIARD-ROOM", "CONSERVATORY", "DINING-ROOM", "HALL", "KITCHEN",
    "LIBRARY", "LOUNGE", "STUDY"];

window.greenHex    = "#1C5125";
window.mustardHex  = "#F9B416";
window.peacockHex  = "#0B1535";
window.plumHex     = "#542D59";
window.scarlettHex = "#790905";
window.whiteHex    = "#ffffff";
const hexCharColors = ["#1C5125","#F9B416","#0B1535","#542D59","#790905","#ffffff"]
console.log(hexCharColors[Number(window.playerCharacter)])

class Notebook extends Component {
    
    render() {
        function checkPCColor(e) {
            console.log(e.currentTarget.className)
            for (let i=0; i<document.getElementsByClassName(e.currentTarget.className).length; i++) {
                console.log(i); 
            }
            // console.log(e.currentTarget.id.slice(-1))
            
            // switch (e.currentTarget.id.slice(-1)) {
            //     case "a":
            //         e.currentTarget.style.backgroundColor = hexCharColors[Number(window.playerCharacter)-1];
            //     break;
            //     case "b":
            //         e.currentTarget.style.backgroundColor = hexCharColors[Number(window.playerCharacter)-1];
            //     break;
            //     case "c":
            //         e.currentTarget.style.backgroundColor = hexCharColors[Number(window.playerCharacter)-1];
            //     break; 
            //     case "d":
            //         e.currentTarget.style.backgroundColor = hexCharColors[Number(window.playerCharacter)-1];
            //     break; 
            //     case "e":
            //         e.currentTarget.style.backgroundColor = hexCharColors[Number(window.playerCharacter)-1];
            //     break; 
            //     case "f":
            //         e.currentTarget.style.backgroundColor = hexCharColors[Number(window.playerCharacter)-1];
            //     break;                     
            // }
        }
        return (
            <div className="notebook-div">
                <img className="notebook-img" id="notebook" src={notebook} alt="Detective Notebook"></img>


                <table className="notebook-table" id="nb-table">
                    <tbody>
                        <tr className="table-section" id="table-header-row"><td>WHO?</td>
                            <td><div className='nb-header-token' id='nb-token-a' onClick={checkPCColor}></div></td>
                            <td><div className='nb-header-token' id='nb-token-b' onClick={checkPCColor}></div></td>
                            <td><div className='nb-header-token' id='nb-token-c' onClick={checkPCColor}></div></td>
                            <td><div className='nb-header-token' id='nb-token-d' onClick={checkPCColor}></div></td>
                            <td><div className='nb-header-token' id='nb-token-e' onClick={checkPCColor}></div></td>
                            <td><div className='nb-header-token' id='nb-token-f' onClick={checkPCColor}></div></td>
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
                                <input className="notebook-radio" id="sus-1" type="radio" name="who-radio" />
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
                                <input className="notebook-radio" id="sus-2" type="radio" name="who-radio" />
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
                                <input className="notebook-radio" id="sus-3" type="radio" name="who-radio" />
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
                                <input className="notebook-radio" id="sus-4" type="radio" name="who-radio" />
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
                                <input className="notebook-radio" id="sus-5" type="radio" name="who-radio" />
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
                                <input className="notebook-radio" id="sus-6" type="radio" name="who-radio" />
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
                                <input className="notebook-radio" id="weap-1" type="radio" name="what-radio" />
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
                                <input className="notebook-radio" id="weap-2" type="radio" name="what-radio" />
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
                                <input className="notebook-radio" id="weap-3" type="radio" name="what-radio" />
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
                                <input className="notebook-radio" id="weap-4" type="radio" name="what-radio" />
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
                                <input className="notebook-radio" id="weap-5" type="radio" name="what-radio" />
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
                                <input className="notebook-radio" id="weap-6" type="radio" name="what-radio" />
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
                                <input className="notebook-radio" id="rm-2" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-4" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-3" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-9" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-7" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-1" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-5" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-8" type="radio" name="where-radio" />
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
                                <input className="notebook-radio" id="rm-6" type="radio" name="where-radio" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Notebook;