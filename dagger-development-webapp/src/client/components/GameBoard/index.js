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
					squarePosition={squarePosition}
                    className="square"
					style={squareStyle}
				>
                {x},{y}
                </div>
			);
		}
	}
    const rooms = [];
    for(const roomName of Object.values(BoardConfig.rooms)){
		const [[minX, minY], [maxX, maxY]] = [roomName.coords][0];
		const roomStyle = {
			gridRowStart: minX + 1,
			gridRowEnd: maxX + 1 + 1,
			gridColumnStart: minY + 1,
			gridColumnEnd: maxY + 1 + 1,
		};
		rooms.push(
			<div
                style={roomStyle}
                class="room"
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