import React, { Component } from 'react';
import "./Splash.css"
import chargroup from      "../assets/img/theme/char-group.jpg";
import SignIn from './SignIn';
class Splash extends Component {
  render() {
    return (
        <main>
            
            <div className="splash-div">
                <SignIn />
                <div>
                  {/* <h1>CLUE-LESS</h1> */}
                  {/* <h2 id="tag-a">One is guilty, none are innocent.</h2> */}
                  {/* <h2 id="tag-b">A modern take on the classic mystery game.</h2> */}
                  {/* <img className="char-group" id="splash-chars" src={chargroup} alt="The characters of Clue-Less"></img> */}
                </div>
            </div> 
        </main>
        
    );
  }
}
 
export default Splash;
