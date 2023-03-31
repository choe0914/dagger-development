import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';



function JoinGame() {
    const navigate = useNavigate();

    return (<><div>JoinGame </div>
        <button onClick={event => { navigate('/gameStart') }}>Continue</button></>);

}

export default JoinGame;