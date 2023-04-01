import './CharacterSelect.css';
// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import invite from "../assets/img/theme/clue-less-invite.jpg";
import backdrop from "../assets/img/theme/backdrop.jpg";
// const [char-select, setchar-select] = useState('');
import green from "../assets/img/char-img/green.png";
import mustard from "../assets/img/char-img/mustard.png";
import peacock from "../assets/img/char-img/peacock.png";
import plum from "../assets/img/char-img/plum.png";
import scarlett from "../assets/img/char-img/scarlett.png";
import white from "../assets/img/char-img/white.png";
function CharacterSelect() {
    const navigate = useNavigate();

    return (

        <main className="char-select-body">
            <section className="char-select-panel">
                <section id="char-select-wrapper">
                    <section className="char-select-entry">

                        <span id="char-select-header">Character Selection</span>
                        <div id="character-div">
                            <img className="char" id="green" src={green} alt="Mayor Green"></img>
                            <img className="char" id="mustard" src={mustard} alt="Colonel Mustard"></img>
                            <img className="char" id="peacock" src={peacock} alt="Solicitor Peacock"></img>
                            <img className="char" id="plum" src={plum} alt="Professor Plum"></img>
                            <img className="char" id="scarlett" src={scarlett} alt="Miss Scarlett"></img>
                            <img className="char" id="white" src={white} alt="Chef White"></img>
                        </div>
                        <button id="launch-game" onClick={event => { navigate('/gameStart') }}>Start Game</button>
                    </section>
                </section>
            </section>
            <section className="splash-panel-B">
                <img className="backdrop" id="back-drop" src={backdrop} alt="Pre-game miscellaneous hints"></img>
                <div id="murder">
                    <img className="invite" id="invite-img" src={invite} alt="Boden 'Boddy' Black"></img>
                    <h1 id="murder-heading">The Night of the Murder</h1>
                    <p id="murder-intro">Six carefully chosen guests arrive at Boden “Boddy” Black's family home, Tudor Mansion,
                        after receiving a mysterious invitation. Over dinner, Black announces his plans to build an extravagantly over-the-top, luxury hotel right over a
                        beloved public park. Everyone objects, but then Black reveals that he has the perfect blackmail to force each one of them into helping him. If they don't,
                        their secrets will be revealed. Shortly after, Black excuses himself and the guests disperse to digest the news. A scream rings out and the guests
                        discover Black, <em id="murdered">murdered</em>.
                    </p>

                </div>
            </section>


        </main>
    );
}

export default CharacterSelect;