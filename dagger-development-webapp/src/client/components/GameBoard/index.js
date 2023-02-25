import React from 'react'
import { BoardConfig, RoomName } from '../../model/room'

class GameBoard extends React.Component {    
	render() {
	const squares = [];
    // Max row and column size of the grid
	const [maxX, maxY] = [22,21];
	for (let x = 0; x <= maxX; x++) {
		for (let y = 0; y <= maxY; y++) {
			const squareStyle = {
				gridRowStart: x + 1,
				gridColumnStart: y + 1,
			};
			const squarePosition = `x${x}y${y}`;
			squares.push(
				<div
                    className="square"
					style={squareStyle}
				>
                {x},{y}
                </div>
			);
		}
	}
    const rooms = [];
    const url = "../../assets/rooms/";
    for(const roomName of Object.values(BoardConfig.rooms)){
		const [[minX, minY], [maxX, maxY]] = [roomName.coords][0];

        // Pull the image from the config and set the picture size within the room grid
		const roomStyle = {
			gridRowStart: minX + 1,
			gridRowEnd: maxX + 1 + 1,
			gridColumnStart: minY + 1,
			gridColumnEnd: maxY + 1 + 1,
            backgroundImage: `url(${roomName.path})`,
            backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
            backgroumdPoistion: 'center',

  };

		rooms.push(
			<div
            
            style={roomStyle}
			key={roomName}>
                {roomName.name}
			</div>
		);
    }

		return (
            <>
            {squares}
            {rooms}
            </>
		);
	}
}

export default GameBoard