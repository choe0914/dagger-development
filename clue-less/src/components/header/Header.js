import React from 'react';
import "./Header.css"
import logo from "../../assets/img/logo/logo-banner-rev-a-wht.png";
import menu from "../../assets/img/icons/menu.png";


function Header() {

    const navi = document.getElementById('navi');
    function handleMenuClick(event) {
        console.log("here");
        if (navi) {
            navi.style.visibility = "hidden";

        }

        // return (<Board />)
    }

    // function startGame() {
    //     fetch("http://localhost:5000/game/start/" + window.gameId, {
    //         method: "GET", // *GET, POST, PUT, DELETE, etc.
    //         mode: "cors", // no-cors, *cors, same-origin
    //         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //         headers: {
    //             "Content-Type": "application/json",
    //         },// body data type must match "Content-Type" header
    //     }).then((response) => { return response.json(); }).then((data) => {
    //         console.log(data)
    //         // Filter Current Hand 
    //         let charInfo = data.gameInfo.players.filter(charId => charId.characterId === characterNumbersToIds[window.playerCharacter - 1])[0];
    //         // TODO : why I can't save card info?
    //         setCurrentHand(state => ({ ...state, hand: charInfo }));
    //         // Filter Winning Hand 
    //         setWinningHand(data.gameInfo.winningHand);
    //     })
    // }
    return (
        <header>
            <img className="logo" id="header-logo" src={logo} alt="Dagger Development"></img>
            <button className="menu" id="menu-icon" onClick={handleMenuClick}></button>
            <img className="menu" id="menu-icon" src={menu} onClick={handleMenuClick} alt="Menu"></img>
            {/* <nav id="navi"></nav> */}
        </header>
    );
}

export default Header;

