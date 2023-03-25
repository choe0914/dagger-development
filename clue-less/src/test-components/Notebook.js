import React, { Component } from 'react';
import './Notebook.css';
import notebook from     "../assets/img/theme/notebook-raw.png";
const chars = ["GREEN", "MUSTARD", "PEACOCK", "PLUM", "SCARLETT", "WHITE"];

const weapons = ["CANDLESTICK", "DAGGER", "LEAD PIPE", "REVOLVER", "ROPE", "WRENCH"];

const weaponsTag = ["CANDLESTICK", "DAGGER", "LEAD-PIPE", "REVOLVER", "ROPE", "WRENCH"];

const rooms = ["BALLROOM", "BILLIARD ROOM", "CONSERVATORY", "DINING ROOM", "HALL", "KITCHEN",
               "LIBRARY", "LOUNGE", "STUDY"];

const roomsTag = ["BALLROOM", "BILLIARD-ROOM", "CONSERVATORY", "DINING-ROOM", "HALL", "KITCHEN",
                  "LIBRARY", "LOUNGE", "STUDY"];

class Notebook extends Component {
    
    render() {
      return (
        <div className="notebook-div">
            <img className="notebook-img" id="notebook" src={notebook} alt="Detective Notebook"></img>
              
        
            <table className="notebook-table" id="nb-table">
                <tr className="table-section">WHO?</tr>
                <tr className="nb-char-row" id={chars[0]}>{chars[0]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-char-row" id={chars[1]}>{chars[1]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-char-row" id={chars[2]}>{chars[2]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-char-row" id={chars[3]}>{chars[3]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-char-row" id={chars[4]}>{chars[4]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-char-row" id={chars[5]}>{chars[5]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="table-section">WHAT?</tr>
                <tr className="nb-weapon-row" id={weaponsTag[0]}>{weapons[0]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-weapon-row" id={weaponsTag[1]}>{weapons[1]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                
                <tr className="nb-weapon-row" id={weaponsTag[2]}>{weapons[2]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-weapon-row" id={weaponsTag[3]}>{weapons[3]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-weapon-row" id={weaponsTag[4]}>{weapons[4]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-weapon-row" id={weaponsTag[5]}>{weapons[5]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="table-section">WHERE?</tr>
                <tr className="nb-room-row" id={roomsTag[0]}>{rooms[0]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[1]}>{rooms[1]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[2]}>{rooms[2]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[3]}>{rooms[3]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[4]}>{rooms[4]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[5]}>{rooms[5]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[6]}>{rooms[6]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[7]}>{rooms[7]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
                <tr className="nb-room-row" id={roomsTag[8]}>{rooms[8]}
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>
                        <input type="checkbox"/>
                    </td>
                </tr>
            </table>
        </div>
      );
    }
  }
   
  export default Notebook;