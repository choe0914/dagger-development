import './SignIn.css';
import React, { useRef } from 'react';
import Board from './Board';
// TODO: handle href with Link to create an account
function SignIn () {
    const signInButton = useRef();
    function handleSignInClick(event) {
        signInButton.current.style.transform = "translateY(2px)";
        setTimeout(() => {
            signInButton.current.style.transform = "translateY(-1px)";
        }, 100);
        // return (<Board />)
    }
    return (
        <section className="left-panel">
            <section className="login-panel">
            <span id="sign-in-header">Sign In</span>
            <span id="new-user">New User? <a href="#" id="create-account-link">Create an account</a></span>
            <input type="text" id="uname-email" name="uname-email" value="Username or email"></input>
            <input type="password" id="password" name="password" value="Password"></input>
            <button id="sign-in" ref={signInButton} onClick={handleSignInClick}>Sign In</button>
            </section>
        </section>
    );
    }

  export default SignIn;