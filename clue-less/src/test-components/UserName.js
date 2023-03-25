import './UserName.css';
import React, { useRef } from 'react';
import chargroup from "../assets/img/theme/char-group.jpg";
// TODO: handle href with Link to create an account
function UserName () {
    const launchButton = useRef();
    function handleSignInClick(event) {
        launchButton.current.style.transform = "translateY(2px)";
        setTimeout(() => {
            launchButton.current.style.transform = "translateY(-1px)";
        }, 100);
        // return (<Board />)
    }
    return (
        <main className="username-body">
            <section className="username-panel">sdasd</section>
            {/* <section className="splash-panel">
                <img className="char-group" id="splash-chars" src={chargroup} alt="The characters of Clue-Less"></img>
            </section> */}
            {/* <span id="sign-in-header">Sign In</span>
            <span id="new-user">New User? <a href="#" id="create-account-link">Create an account</a></span>
            <input type="text" id="uname-email" name="uname-email" value="Username or email"></input>
            <input type="password" id="password" name="password" value="Password"></input>
            <button id="sign-in" ref={launchButton} onClick={handleSignInClick}>Sign In</button> */}
            
        </main>
    );
    }

  export default UserName;