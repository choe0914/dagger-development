import './CharacterSelect.css';
// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { join_game } from '../../socket';
// import React, { useRef } from 'react';
import invite from "../../assets/img/theme/clue-less-invite.jpg";
import backdrop from "../../assets/img/theme/backdrop.jpg";
// const [char-select, setchar-select] = useState('');
import green from "../../assets/img/char-img/green.png";
import mustard from "../../assets/img/char-img/mustard.png";
import peacock from "../../assets/img/char-img/peacock.png";
import plum from "../../assets/img/char-img/plum.png";
import scarlett from "../../assets/img/char-img/scarlett.png";
import white from "../../assets/img/char-img/white.png";

const characterNumbersToIds = ["Mr. Green", "Colonel Mustard", "Mrs. Peacock", "Professor Plum", "Miss Scarlet", "Mrs. White"]

const murderHeading = "The Night of the Murder";

const murderIntro = "Six carefully chosen guests arrive at Boden “Boddy” Black's family home, Tudor Mansion, " +
"after receiving a mysterious invitation. Over dinner, Black announces his plans to build an extravagantly over-the-top, " + 
"luxury hotel right over a beloved public park. Everyone objects, but then Black reveals that he has the perfect blackmail " + 
"to force each one of them into helping him. If they don't, their secrets will be revealed. Shortly after, Black excuses " + 
"himself and the guests disperse to digest the news. A scream rings out and the guests discover Black, murdered.";

const greenBio = "The loveable Mayor of Hue County who always has a " + 
    "kind word to spare. He's up for re-election and not worried in the " + 
    "slightest-even his opponents struggle to dislike him. His squeaky-clean " + 
    "record has only one tarnish: a campaign-saving donation from a major crime " + 
    "family. Black has assured him that nobody needs to find out... as long as he " + 
    "helps re-zone the park where Black plans to build his hotel.";

const mustardBio = "A decorated war hero, full of stories of past battles and narrow escapes. " + 
    "He's a man of action, with the experience to back it up. His credibility as a respected military " + 
    "member means he could easily sway public opinion in Black's favor-especially if it means no one " + 
    "ever finds out he wasn't actually in the battle for which he was awarded his most prestigious medal.";

const peacockBio = "A tenacious attorney who knows exactly how to command a room, court or otherwise. Her " + 
    "success has provided her significant status and she's not shy about flaunting it. Black knows nothing " + 
    "is off-limits when it comes to getting her verdict, even tampering with witnesses, a fact he is happy " + 
    "to reveal if she refuses to represent him in his hotel dealings.";

const plumBio = "A professor of antiquities with an uncannily perceptive eye. His incredible attention to " + 
    "detail aids him in identifying counterfeits, and occasionally creating them. Only Black knows about" + 
    "his most convincing forgery: Plum's PhD, which hangs proudly above his desk. With the right incentive, " + 
    "the professor could likely fabricate anything, even a land deed proving Black has claim to the park " + 
    "he plans to build his hotel on.";

const scarlettBio = "A socialite, at first glance. A sharply intelligent investigative journalist, in " +
    "reality. Writing under the nom de plume 'Cyan', she's landed mobsters in jail and taken down " +
    "hometown heroes. No one is safe from her pen because no one knows who she is. Except for " +
    "Boddy Black, who just happens to need a glowing review of his new hotel.";

const whiteBio = "An up-and-coming chef full of youthful ambition and fresh ideas. She's been " +
    "running Black's kitchen for years but finds his uninspired menu creatively stifling and " +
    "dreams of opening a restaurant of her own. Her plan relies on talent, persistence... and " +
    "the money she's been skimming from Boddy Black, which he's known about all along. She has " +
    "two choices: thanklessly run Black's drab hotel restaurant, or face charges.";
window.charTokenColors = ["#3db350", "#F9B416", "#3863f1", "#b95cc5", "#e2140c", "#f5f5f5"];
function CharacterSelect() {
    const navigate = useNavigate();
    function handleGameLaunchClick(event) {
        fetch("http://localhost:5000/game/join", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: window.userName,
                gameId: window.gameId,
                characterId: characterNumbersToIds[window.playerCharacter - 1],
                positionId: "Hallway" + window.playerCharacter
            }), // body data type must match "Content-Type" header
          }).then((response) => { return response.json(); }).then((data) => {
                join_game(data.gameId)
                window.playerId = data.yourPlayer.playerStateId;
                var launchButton = document.getElementById("launch-game");
                launchButton.style.transform = "translateY(2px)";
                setTimeout(() => {
                    launchButton.style.transform = "translateY(-1px)";
                }, 100);
                navigate('/gameStart');
          })
        
    }
    function buttonHoverA(event) {
        var launchButton = document.getElementById("launch-game");
        launchButton.style.filter = "brightness(80%)";
    }
    function buttonHoverB(event) {
        var launchButton = document.getElementById("launch-game");
        launchButton.style.filter = "brightness(100%)";
    }

    function charHoverA(char) {

        // char.currentTarget.style.filter = "brightness(60%)";
        switch (char.currentTarget.id) {
            case "green":
                char.currentTarget.style.border = "3px solid green";
                // document.getElementById("murder").style.visibility = "hidden";
                document.getElementById("invite-img").setAttribute("src", green);
                document.getElementById("murder-heading").innerHTML = "Mayor Green";
                document.getElementById("murder-intro").innerHTML = greenBio;
                break;
            case "mustard":
                char.currentTarget.style.border = "3px solid yellow";
                document.getElementById("invite-img").setAttribute("src", mustard);
                document.getElementById("murder-heading").innerHTML = "Colonel Mustard";
                document.getElementById("murder-intro").innerHTML = mustardBio;
                break;
            case "peacock":
                char.currentTarget.style.border = "3px solid blue";
                document.getElementById("invite-img").setAttribute("src", peacock);
                document.getElementById("murder-heading").innerHTML = "Solicitor Peacock";
                document.getElementById("murder-intro").innerHTML = peacockBio;
                break;
            case "plum":
                char.currentTarget.style.border = "3px solid purple";
                document.getElementById("invite-img").setAttribute("src", plum);
                document.getElementById("murder-heading").innerHTML = "Professor Plum";
                document.getElementById("murder-intro").innerHTML = plumBio;
                break;
            case "scarlett":
                char.currentTarget.style.border = "3px solid red";
                document.getElementById("invite-img").setAttribute("src", scarlett);
                document.getElementById("murder-heading").innerHTML = "Miss Scarlett";
                document.getElementById("murder-intro").innerHTML = scarlettBio;
                break;
            case "white":
                char.currentTarget.style.border = "3px solid white";
                document.getElementById("invite-img").setAttribute("src", white);
                document.getElementById("murder-heading").innerHTML = "Chef White";
                document.getElementById("murder-intro").innerHTML = whiteBio;
                break;
            default:

                char.currentTarget.style.border = "3px solid rgba(0, 0, 0, 0)"; 
        }
    }
    function charHoverB(char) {
        char.currentTarget.style.filter = "brightness(100%)";
        char.currentTarget.style.border = "3px solid rgba(0, 0, 0, 0)";
        // document.getElementById("murder").style.visibility = "visible";
        document.getElementById("invite-img").setAttribute("src", invite);
        document.getElementById("murder-heading").innerHTML = murderHeading;
        document.getElementById("murder-intro").innerHTML = murderIntro;
    }

    function charSelect(e) {
        e.target.style.filter = "brightness(50%)";
        var checks = document.querySelectorAll(".check-mark");
        checks.forEach(check => {
            check.style.visibility = "hidden";
          });
        switch (e.currentTarget.id) {
            case "green":
                window.playerCharacter = "1";
                window.charColor = "#3db350";
                document.getElementById("check-1").style.visibility = "visible";
                // TODO: send db/backend char id?
                break;
            case "mustard":
                window.playerCharacter = "2";
                window.charColor = "#F9B416";
                document.getElementById("check-2").style.visibility = "visible";
                break;
            case "peacock":
                window.playerCharacter = "3";
                window.charColor = "#3863f1";
                document.getElementById("check-3").style.visibility = "visible";
                break;
            case "plum":
                window.playerCharacter = "4";
                window.charColor = "#b95cc5";
                document.getElementById("check-4").style.visibility = "visible";
                break;
            case "scarlett":
                window.playerCharacter = "5";
                window.charColor = "#e2140c";
                document.getElementById("check-5").style.visibility = "visible";
                break;
            case "white":
                window.playerCharacter = "6";
                window.charColor = "#f5f5f5";
                document.getElementById("check-6").style.visibility = "visible";
                break;
        }
        document.getElementById("launch-game").style.visibility = "visible";
        window.charTokenColors.splice(Number(window.playerCharacter)-1, 1);
    }
    return (

        <main className="char-select-body">
            <section className="char-select-panel">
                <section id="char-select-wrapper">
                    <section className="char-select-entry">

                        <span id="char-select-header">Character Selection</span>
                        <div id="character-div">
                            <div className="char-opt"><img className="char" onClick={charSelect} onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="green" src={green} alt="Mayor Green"></img><span className="check-mark" id="check-1">&#x2713;</span></div>
                            <div className="char-opt"><img className="char" onClick={charSelect} onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="mustard" src={mustard} alt="Colonel Mustard"></img><span className="check-mark" id="check-2">&#x2713;</span></div>
                            <div className="char-opt"><img className="char" onClick={charSelect} onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="peacock" src={peacock} alt="Solicitor Peacock"></img><span className="check-mark" id="check-3">&#x2713;</span></div>
                            <div className="char-opt"><img className="char" onClick={charSelect} onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="plum" src={plum} alt="Professor Plum"></img><span className="check-mark" id="check-4">&#x2713;</span></div>
                            <div className="char-opt"><img className="char" onClick={charSelect} onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="scarlett" src={scarlett} alt="Miss Scarlett"></img><span className="check-mark" id="check-5">&#x2713;</span></div>
                            <div className="char-opt"><img className="char" onClick={charSelect} onMouseEnter={charHoverA} onMouseLeave={charHoverB} id="white" src={white} alt="Chef White"></img><span className="check-mark" id="check-6">&#x2713;</span></div>
                        </div>
                        <button id="launch-game" onClick={handleGameLaunchClick} onMouseEnter={buttonHoverA} onMouseLeave={buttonHoverB}>Start Game</button>
                        <span id="next-info">Next - Play Clue-Less</span>
                    </section>
                </section>
            </section>
            <section className="splash-panel-B">
                <img className="backdrop" id="back-drop" src={backdrop} alt="Pre-game miscellaneous hints"></img>
                <div id="murder">
                    <img className="invite" id="invite-img" src={invite} alt="Invite to Tudor Mansion"></img>
                    <h1 id="murder-heading">{murderHeading}</h1>
                    <p id="murder-intro">{murderIntro}</p>
                </div>
            </section>


        </main>
    );
}

export default CharacterSelect;