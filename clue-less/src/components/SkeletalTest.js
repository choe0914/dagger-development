import './SkeletalTest.css';
import React, { useRef } from 'react';
import boddy from      "../assets/img/theme/boddy-black.jpg";
import backdrop from      "../assets/img/theme/backdrop.jpg";
// const [game-launch, setgame-launch] = useState('');

function GameType () {
    const launchButton = useRef();
    // const gameChoice = useRef();
    function handleGameChoiceClick(event) {
        console.log("click")
        launchButton.current.style.transform = "translateY(2px)";

        setTimeout(() => {
            launchButton.current.style.transform = "translateY(-1px)";
        }, 100);
        // return (<Board />)
    }
    function buttonHoverA(event) {
        launchButton.current.style.filter = "brightness(80%)";
    }
    function buttonHoverB(event) {
        launchButton.current.style.filter = "brightness(100%)";
    }
    function handleGameChoiceA(event) {
        launchButton.current.style.display = "none";
        var gameChoice = document.getElementById("game-search-wrapper");
        gameChoice.style.display = "unset";
        gameChoice.style.display = "flex";
    }
    function handleGameChoiceB(event) {
        var gameChoice = document.getElementById("game-search-wrapper");
        document.getElementById("game-id-field").value = "";
        gameChoice.style.display = "none";
        launchButton.current.style.display = "unset";
    }
    function checkField(event) {
        var fieldText = document.getElementById("game-id-field");
        console.log(fieldText.value)
        if (fieldText.value !== "" && fieldText.value.length > 5) {
            launchButton.current.style.display = "unset";
        } else {
            launchButton.current.style.display = "none";
        }
    }
    return (
        <main className="game-launch-body">
            <section className="game-launch-panel">
                <section id="game-launch-wrapper">
                    <section className="game-launch-entry">
                    
                        <span id="game-launch-header">Welcome USER-NAME</span>
                        <span className="game-option-txt" id="game-launch-join" onClick={handleGameChoiceA}>Join Game<input id="join-game" className="game-choice" type="radio" name="choice"></input></span>
                        <div id="game-search-wrapper">
                            <input type="text" id="game-id-field" maxLength={6} onKeyUp={checkField} name="game-id-field" placeholder='Game ID'></input>
                            <button id="search">List</button>
                        </div>
                        <span className="game-option-txt" id="game-launch-new" onClick={handleGameChoiceB}>Host New Game<input id="start-game" className="game-choice" type="radio" name="choice"></input></span>
                        <button id="launch" ref={launchButton} onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB} onClick={handleGameChoiceClick}>Continue</button>
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