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
            path: ""
		},
		Kitchen: {
			coords: [[0,0],[5,4]],
            name: "Kitchen",
            path: "",
		},
		Library: {
			coords: [[13,16],[17,21]],
            name: "Library",
            path: ""
		},
		Lounge: {
			coords: [[18,0],[22,5]],
            name: "Lounge",
            path: ""
		},
		Study: {
			coords: [[20,16],[22,21]],
            name: "Study",
            path:""
		}
	}
};