import React from 'react'
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
		return (
            <>
            {squares}
            </>
		);
	}
}

export default GameBoard