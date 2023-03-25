import React, { useRef } from 'react';
import "./Header.css" 
import logo from "../assets/img/logo/logo-banner-rev-a-wht.png";
import menu from "../assets/img/icons/menu.png";

function Header() {
  const navi = document.getElementById('navi');
  function handleMenuClick(event) {
    console.log("here");
      navi.style.visibility = "hidden";
      
      // return (<Board />)
  }
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

