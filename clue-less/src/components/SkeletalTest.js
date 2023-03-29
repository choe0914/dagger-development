import './SkeletalTest.css';
import React, { useRef } from 'react';

// const [game-launch, setgame-launch] = useState('');

function GameType () {
    const launchButton = useRef();
    function handleSignInClick(event) {
        launchButton.current.style.transform = "translateY(2px)";
        setTimeout(() => {
            launchButton.current.style.transform = "translateY(-1px)";
        }, 100);
        // return (<Board />)
    }
    return (
        <main className="game-launch-body">
            <section className="game-launch-panel">
                <section id="game-launch-wrapper">
                    <section className="game-launch-entry">
                    
                        <span id="game-launch-header">Welcome USER-NAME</span>
                        <span id="game-launch-join">Join Game<input className="game-choice" type="radio" name="choice"></input></span>
                        <span id="game-launch-new">Host New Game<input className="game-choice" type="radio" name="choice" checked="checked"></input></span>
                        <button id="launch" ref={launchButton} onClick={handleSignInClick}>Continue</button>
                        <span id="next-info">Next - Character Selection</span>
                    </section>
                </section>
            </section>
            <section className="splash-panel">
                <h1>&nbsp;CLUE-LESS</h1>
                <h2 id="tag-a">One is guilty, none are innocent.</h2>
                <h2 id="tag-b">A modern take on the classic mystery game.</h2>
            </section>
            
            
        </main>
    );
    }

  export default GameType;