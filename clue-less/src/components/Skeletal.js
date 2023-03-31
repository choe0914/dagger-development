import './Skeletal.css';
import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigate } from 'react-router-dom';


// const [username, setUsername] = useState('');

let username = '';


export function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

function UserName() {
    const launchButton = useRef();
    let navigate = useNavigate();
    function handleSignInClick(event) {
        // launchButton.current.style.transform = "translateY(2px)";
        // setTimeout(() => {
        //     launchButton.current.style.transform = "translateY(-1px)";
        // }, 100);
        userAction();
    }

    const userAction = async () => {
        //  const response = await fetch('http://127.0.0.1:5000/user/' + username);
        //  const myJson = await response.json(); //extract JSON from the http response
        navigate('/joinGame');
    }

    return (
        <main className="username-body">
            <section className="username-panel">
                <section id="username-wrapper">
                    <section className="username-entry">

                        <span id="username-header">Welcome to Clue-Less</span>
                        <p id="game-description">A slimmed down and fully digital version of the classic board game.
                            Join or invite friends to solve the mystery of who killed Boden "Boddy" Black.</p>
                        <span id="username-info">Please enter a unique username to begin</span>
                        <input type="text" id="uname" name="uname" placeholder='Username' onBlur={k => { username = k.target.value; }}></input>
                        <button id="launch" ref={launchButton} onClick={handleSignInClick}>Continue</button>
                        <span id="next-info">Next - Join or Start New Game</span>
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

export default UserName;
