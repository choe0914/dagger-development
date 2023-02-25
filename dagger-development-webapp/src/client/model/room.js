import ball_room from "../assets/rooms/ballroom.jpg";
import billiard_room from "../assets/rooms/billiards.jpg";
import conservatory from "../assets/rooms/conservatory.jpg";
import kitchen from "../assets/rooms/kitchen.jpg";
import library from "../assets/rooms/library.jpg"

export const RoomName: RoomName = {
    ballroom: "Ballroom",
    billiard: "Billiard",
    conservatory: "Conservatory",
    dining: "Dining",
    hall: "Hall",
    kitchen: "Kitchen",
    library: "Library",
    lounge: "Lounge",
    study: "Study"
  };


export const BoardConfig: BoardConfig = {
	extent: [22,21],
	rooms: {
		Ballroom: {
			coords: [[9,0],[14,6]],
            name: "BallRoom",
            path: ball_room,
            class: ""
		},
		Kitchen: {
			coords: [[0,0],[5,4]],
            name: "Kitchen",
            path: kitchen,
            class: ""

		},
		Library: {
			coords: [[13,16],[17,21]],
            name: "Library",
            path: library,
            class: ""

		},
		Conservatory: {
			coords: [[18,0],[22,5]],
            name: "Conservatory",
            path: conservatory,
            class: ""

		},
		Billiard: {
			coords: [[20,16],[22,21]],
            name: "Billiard",
            path: billiard_room,
            class: ""

		}
	}
};