const cellSize = 3.5;
const n = 25;
const roomPath = 'static/assets/img/';
const rooms = new Array('kitchen', 'dining', 'lounge', 
                        'ballroom', 'center', 'hall', 
                        'conservatory', 'billiards' , 'library', 'study');

const roomsProper = new Array('Kitchen', 'Dining Room', 'Lounge', 
                              'Ballroom', 'Interview Room', 'Hall', 
                              'Conservatory', 'Billiards Room' , 'Library', 'Study');

const testColors = new Array('blue', 'red', 'violet', 'teal', 'orange', 'yellow', 'green',
                             'aqua', 'cyan', 'brown');

const heights = new Array(8, 7, 6, 5, 12, 4, 6, 5, 5, 5);
const widths = new Array(6, 6, 6, 9, 9, 9, 6, 6, 6, 6);
var cellID = 1;

// function makeGrid(rows, columns, subName, target) {
//     var sc = document.createElement('div');
//     sc.id = subName;
//     sc.style.display = 'grid';
//     sc.style.gridTemplateColumns = `repeat(${columns}, ${cellSize}vh)`;
//     sc.style.gridTemplateRows = `repeat(${rows}, ${cellSize}vh)`;

//     var numCells = rows*columns;
//     for (let c = 1; c<numCells+1; c++) {
//         var cell = document.createElement('div');
//         cell.className = 'cell';
//         cell.id = cellID;
//         cell.innerHTML = cellID;
//         cellID++;
//         sc.appendChild(cell);
//     }
    

//     document.getElementById(target).appendChild(sc)
// }

// function makeBoard() {

//     const board = document.getElementById('board');
//     board.style.height = `${n * cellSize}vh`;
//     board.style.width = `${n * cellSize}vh`;
//     for (let rm=0; rm < rooms.length; rm++) {
//         var room = document.createElement('div');
//         room.className = 'room';
//         room.id = rooms[rm];
//         room.style.height = `${heights[rm] * cellSize}vh`;
//         room.style.width = `${widths[rm] * cellSize}vh`;
//         // room.style.backgroundColor = testColors[rm];

//         var roomJPG = document.createElement('img');
//         roomJPG.className = 'roomImg';
//         roomJPG.id = 'img-' + rooms[rm];
//         roomJPG.src = roomPath + rooms[rm] + '.jpg';
//         room.appendChild(roomJPG);
//         switch (rm) {
//             case 0:
//                 var element = document.getElementById('left-rooms');
//                 element.appendChild(room);
//                 console.log("here")
//                 makeGrid(2, 6, 'hall-1', 'left-rooms');
//                 break;
//             case 1:
//                 var element = document.getElementById('left-rooms');
//                 element.appendChild(room);
//                 makeGrid(2, 6, 'hall-2', 'left-rooms');
//                 break;
//             case 2:
//                 var element = document.getElementById('left-rooms');
//                 element.appendChild(room);
//                 makeGrid(25, 2, 'hall-3', 'left-hall');
//                 break;
//             case 3:
//                 var element = document.getElementById('center-rooms');
//                 element.appendChild(room);
//                 makeGrid(2, 9, 'hall-4', 'center-rooms');
//                 break;
//             case 4:
//                 var element = document.getElementById('center-rooms');
//                 element.appendChild(room);
//                 makeGrid(2, 9, 'hall-5', 'center-rooms');
//                 break;
//             case 5:
//                 var element = document.getElementById('center-rooms');
//                 element.appendChild(room);
//                 makeGrid(25, 2, 'hall-6', 'right-hall');
//                 break;
//             case 6:
//                 var element = document.getElementById('right-rooms');
//                 element.appendChild(room);
//                 makeGrid(1, 6, 'hall-7', 'right-rooms');
//                 break;
//             case 7:
//                 var element = document.getElementById('right-rooms');
//                 element.appendChild(room);
//                 makeGrid(1, 6, 'hall-8', 'right-rooms');
//                 break;
//             case 8:
//                 var element = document.getElementById('right-rooms');
//                 element.appendChild(room);
//                 makeGrid(2, 6, 'hall-9', 'right-rooms');
//                 break;
//             case 9:
//                 var element = document.getElementById('right-rooms');
//                 element.appendChild(room);
//                 break;
            
//         }
        

//     }
// }

function makeBoard() {
    const numCells = 25*25;
    const element = document.getElementById("board");
    for (let i=1; i<numCells+1; i++) {
        var cell = document.createElement('div');
        cell.className = "cell";
        cell.id = `cell-${i}`;
        cell.innerHTML = i;
        element.appendChild(cell);
        
    }

    for (let rm = 0; rm < rooms.length; rm++) {
        var room = document.createElement('div');
        room.className = 'room';
        room.id = rooms[rm];
        room.style.height = `${heights[rm] * cellSize}vh`;
        room.style.width = `${widths[rm] * cellSize}vh`;
        // room.style.backgroundColor = testColors[rm];
        room.style.position = "absolute";

        var roomJPG = document.createElement('img');
        roomJPG.className = 'roomImg';
        roomJPG.id = 'room-img-' + rooms[rm];
        roomJPG.src = roomPath + rooms[rm] + '.jpg';

        var roomLabel = document.createElement('span');
        roomLabel.className = 'roomLabel';
        roomLabel.id = 'room-label-' + rooms[rm];
        roomLabel.innerHTML = roomsProper[rm];

        room.appendChild(roomJPG);
        room.appendChild(roomLabel);
        switch (rm) {
            case 0:
                element.appendChild(room);
                break;
            case 1:
                element.appendChild(room);
                room.style.top = `${10*cellSize}vh`;
                break;
            case 2:
                element.appendChild(room);
                room.style.bottom = `0`;
                break;
            case 3:
                element.appendChild(room);
                room.style.left = `${8*cellSize}vh`;
                break;
            case 4:
                element.appendChild(room);
                room.style.left = `${8*cellSize}vh`;
                room.style.top = `${7*cellSize}vh`;
                break;
            case 5:
                element.appendChild(room);
                room.style.left = `${8*cellSize}vh`;
                room.style.bottom = `0`;
                break;
            case 6:
                element.appendChild(room);
                room.style.right = `0`;
                room.style.top = `0`;
                break;
            case 7:
                element.appendChild(room);
                room.style.right = `0`;
                room.style.top = `${7*cellSize}vh`;
                break;
            case 8:
                element.appendChild(room);
                room.style.right = `0`;
                room.style.top = `${13*cellSize}vh`;
                break;
            case 9:
                element.appendChild(room);
                room.style.right = `0`;
                room.style.bottom = `0`;
                break;
        }
    }
}

makeBoard()

// function makeRooms() {
//     var cells = $('.cell');
//     console.log(cells.length);

//     // for (let c = 0; c < cells.length; c++) {

//     // }
// }
// makeBoard()
// makeRooms()