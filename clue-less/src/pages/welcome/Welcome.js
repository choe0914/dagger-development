import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

let username = '';

function UserName() {
    const [dbUserList, setUsers] = useState([]);
    const [currentUsername, setCurrentUsername] = useState("");
    const [isUniqueUsername, setIsUniqueUsername] = useState(true);

    const { register, getValues, formState: { errors } } = useForm({ mode: "onChange" });
    let navigate = useNavigate();


    useEffect(() => {
        // Retrieve all user name from DB - user table 
        fetch('http://127.0.0.1:5000/user/get_all')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
            });
    }, []);


    function handleSignInClick(event) {
        var launchButton = document.getElementById("launch-game-select");
        launchButton.style.transform = "translateY(2px)";
        setTimeout(() => {
            launchButton.style.transform = "translateY(-1px)";
        }, 100);
        var fieldText = document.getElementById("uname");
        window.userName = fieldText.value;
        let validate = dbUserList.filter(elem => elem.name === currentUsername).length < 1;
        setIsUniqueUsername(validate);
        if (validate) {
            userAction();
        }
    }
    function buttonHoverA(event) {
        var launchButton = document.getElementById("launch-game-select");
        launchButton.style.filter = "brightness(80%)";
    }
    function buttonHoverB(event) {
        var launchButton = document.getElementById("launch-game-select");
        launchButton.style.filter = "brightness(100%)";
    }

    const userAction = async () => {
        const response = await fetch('http://127.0.0.1:5000/user/' + username);
        const myJson = await response.json(); //extract JSON from the http response
        navigate('/joinGame');
    }

    function checkNameField(event) {
        var launchButton = document.getElementById("launch-game-select");
        var fieldText = document.getElementById("uname");
        // handling valid length joinable game ID 
        if (fieldText.value !== "" && fieldText.value.length > 5) {
            launchButton.style.display = "unset";
            window.userName = fieldText.value;

        } else {
            launchButton.style.display = "none";
        }
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
                        <input type="text" id="uname" name="uname" placeholder='Username'
                            onKeyUp={checkNameField} onBlur={k => { username = k.target.value; }} onChange={(e) => setCurrentUsername(e.target.value)}
                            required minLength={6}
                        />
                        <button id="launch-game-select" onClick={handleSignInClick} onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Continue</button>
                        {!isUniqueUsername && <p id="murdered" className="font-bold" >Username not unique enough</p>}
                        <span id="next-info">Next - Join or Start New Game</span>
                    </section>
                </section>
            </section>
            <section className="splash-panel-welcome">
                <h1 id="game-title">&nbsp;CLUE-LESS</h1>
                <h2 className="sub-heading" id="tag-a">One is guilty, none are innocent.</h2>
                <h2 className="sub-heading" id="tag-b">A modern take on the classic mystery game.</h2>
            </section>


        </main >
    );
}

export default UserName;
