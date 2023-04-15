import React from "react";

export default class Room extends React.Component {
    constructor(){
        super();
    }
 
    handleDrop = (e) => { 
        fetch("http://localhost:5000/player/move_player", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              "Content-Type": "application/json",  
            },
            body: JSON.stringify({
                playerId: window.playerId,  // TODO get this from somewhere
                positionId: this.props.roomId
            }), // body data type must match "Content-Type" header
          });
    }

    handleSecretPassage = () => {
        fetch("http://localhost:5000/player/move_player", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                playerId: window.playerId,  // TODO get this from somewhere
                positionId: this.props.secretPassage.toId 
            }), // body data type must match "Content-Type" header
          });
    }

    getStartingLocation = () => {
        if (typeof this.props.startingLocation !== 'undefined' && 
        this.props.startingLocation !== null) {
            return (
                <div className="starting-loc" id={this.props.startingLocation.classId} 
                    onDragOver={this.props.startingLocation.handleDragOver}>        
                    {this.getPlayerTokens()}
                </div>
            );
        }
        return null
    }

    getHallwaySpan = () => {
        if (typeof this.props.hallwayId !== 'undefined' && 
            this.props.hallwayId !== null) {
            return (
                <React.Fragment>
                    <span className="hall-num">{this.props.hallwayId}</span>
                    {this.getStartingLocation()}
                </React.Fragment>
            );
        }
        return null;
    }

    getSecretPassage = () => {
        if (typeof this.props.secretPassage !== 'undefined' && 
            this.props.secretPassage !== null) {
            return (
                <button className="secret-passage" id={this.props.secretPassage.styleId}
                    onClick={this.handleSecretPassage}>
                    {this.props.secretPassage.text}
                </button>
            );
        }
        return null;
    }
    
    // checks current player character, allows movement of token by them only
    checkPC(e) {
        if (e.currentTarget.id.slice(-1) === window.playerCharacter) {
        e.currentTarget.setAttribute("draggable", "true");
        e.currentTarget.style.cursor = "pointer";
        }
        //// testing event
        // e.currentTarget.setAttribute("draggable", "true");
        // e.currentTarget.style.cursor = "pointer";
    }

    
    drag(e) {
        e.dataTransfer.setData("text", e.target.id);
    }

    getPlayerStyleId = (player) => {
        switch (player.characterId) {
            case "Miss Scarlet":
                return 'char-5'
            case "Colonel Mustard":
                return 'char-2'
            case "Professor Plum":
                return 'char-4'
            case "Mr. Green":
                return 'char-1'
            case "Mrs. White":
                return 'char-6'
            case "Mrs. Peacock":
                return 'char-3'
        }
    }

    getPlayerTokens = () => {
        if (this.props.player_tokens.length > 0) {
            return (
                <div className="char-token" id={this.getPlayerStyleId(this.props.player_tokens[0])}
                    onMouseDown={this.checkPC} 
                    draggable="false" onDragStart={this.drag}>
                </div>
            );
        }
    }
 
    getMainBodyPlayerTokens = () => {
        if (typeof this.props.startingLocation == 'undefined' ||
            this.props.startingLocation == null) {
            return this.getPlayerTokens()
        } 
        return null;
    }

    render() {
      return (
        <div className={this.props.classId}
            id={this.props.styleId} onDrop={this.handleDrop}
            onDragOver={this.props.handleDragOver}>
            {this.getHallwaySpan()}
            {this.getSecretPassage()}
            {this.getMainBodyPlayerTokens()}
        </div>
      );
    }
  }