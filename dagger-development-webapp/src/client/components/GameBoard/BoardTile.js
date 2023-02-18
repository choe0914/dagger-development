import React from 'react';
import Grid from 'react-css-grid';
import Tile from './Tile';
import Start  from './Start';

export default class BoardTile extends React.Component {


    state = {
       startTiles: [3, 4, 5,6]
    }

    createBoard = () => {
        let tileArray = []
        for (let counter = 50; counter > 0; counter--){
            tileArray.push(counter)
        }
        return this.occupyTiles(tileArray)
    }

    occupyTiles = (tileArray) => {
        return tileArray.map((number) => (
            this.state.startTiles.includes(number) ? 
            <Start number={number}/>:<Tile number={number} />
        ))
    }

    render(){
        return(
            <div className="board-container">
                <div className="game-board">
                    <Grid width={50} gap={10}>
                    { this.createBoard() }
                    </Grid>       
                </div>
            </div>
        );
    }
}

