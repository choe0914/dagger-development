import './CharacterSelect.css';
// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
// import React, { useRef } from 'react';
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
    function handleGameLaunchClick(event) {
        var launchButton = document.getElementById("launch-game");
        launchButton.style.transform = "translateY(2px)";
        setTimeout(() => {
            launchButton.style.transform = "translateY(-1px)";
        }, 100);
        navigate('/gameStart');
    }
    function buttonHoverA(event) {
        var launchButton = document.getElementById("launch-game");
        launchButton.style.filter = "brightness(80%)";
    }
    function buttonHoverB(event) {
        var launchButton = document.getElementById("launch-game");
        launchButton.style.filter = "brightness(100%)";
    }

    function charHoverA(char) {
        
        char.currentTarget.style.filter = "brightness(60%)";
        switch (char.currentTarget.id) {
            case "green":
                char.currentTarget.style.border = "3px solid green";
                break;
            case "mustard":
                char.currentTarget.style.border = "3px solid yellow";
                break;
            case "peacock":
                char.currentTarget.style.border = "3px solid blue";
                break;
            case "plum":
                char.currentTarget.style.border = "3px solid purple";
                break;
            case "scarlett":
                char.currentTarget.style.border = "3px solid red";
                break;
            case "white":
                char.currentTarget.style.border = "3px solid white";
                break;
            default:
                char.currentTarget.style.border = "3px solid rgba(0, 0, 0, 0)";
        }
    }
    function charHoverB(char) {
        char.currentTarget.style.filter = "brightness(100%)";
        char.currentTarget.style.border = "3px solid rgba(0, 0, 0, 0)";
    }
    return (

        <main className="char-select-body">
            <section className="char-select-panel">
                <section id="char-select-wrapper">
                    <section className="char-select-entry">

                        <span id="char-select-header">Character Selection</span>
                        <div id="character-div">
                            <img className="char" onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="green" src={green} alt="Mayor Green"></img>
                            <img className="char" onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="mustard" src={mustard} alt="Colonel Mustard"></img>
                            <img className="char" onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="peacock" src={peacock} alt="Solicitor Peacock"></img>
                            <img className="char" onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="plum" src={plum} alt="Professor Plum"></img>
                            <img className="char" onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="scarlett" src={scarlett} alt="Miss Scarlett"></img>
                            <img className="char" onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="white" src={white} alt="Chef White"></img>
                        </div>
                        <button id="launch-game" onClick={handleGameLaunchClick} onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Start Game</button>
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