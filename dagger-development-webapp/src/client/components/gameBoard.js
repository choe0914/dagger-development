import React, { useContext } from 'react';
import { BoardConfig } from '../model/boardConfig';
import { SelectedSuspect } from '../model/context';
import { SuspectConfig } from '../model/suspect';

export function GameBoard() {


	const squares = [];
	// Max row and column size of the grid
	const [maxX, maxY] = [4, 4];
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
	for (const roomName of Object.values(BoardConfig.rooms)) {
		const [[minX, minY], [maxX, maxY]] = [roomName.coords][0];

		// Pull the image from the config and set the picture size within the room grid
		const roomStyle = {
			gridRowStart: minX,
			gridRowEnd: maxX + 1 + 1,
			gridColumnStart: minY + 1 + 1,
			gridColumnEnd: maxY + 1,
			backgroundImage: `url(${roomName.path})`,
			backgroundRepeat: 'no-repeat',
			backgroumdPoistion: 'center'
		};

		rooms.push(
			<div
				style={roomStyle}
				key={roomName}>
				{roomName.name}
			</div>
		);
	}

	const character = [];
	const [selectedSuspect, setSelectedSuspect] = useContext(SelectedSuspect);

	for (const suspect of Object.values(SuspectConfig.suspects)) {

		if (selectedSuspect === suspect.name) {
			const [[minX, minY], [maxX, maxY]] = [suspect.coords][0];
			const suspectCellStyle = {
				gridRowStart: minX,
				gridRowEnd: maxX + 1 + 1,
				gridColumnStart: minY + 1 + 1,
				gridColumnEnd: maxY + 1,
				borderColor: "black",
				backgroundColor: suspect.class
			};

			character.push(
				<div class="dot" style={suspectCellStyle} key={suspect.name}></div>)

		}

	}

	return (
		<>
			{squares}
			{rooms}
			{character}
		</>
	);

}

export default GameBoard