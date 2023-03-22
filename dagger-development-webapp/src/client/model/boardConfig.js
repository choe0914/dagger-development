import ball_room from "../assets/rooms/ballroom.jpg";
import billiard_room from "../assets/rooms/billiards.jpg";
import conservatory from "../assets/rooms/conservatory.jpg";
import kitchen from "../assets/rooms/kitchen.jpg";
import library from "../assets/rooms/library.jpg";
import study_room from "../assets/rooms/study.jpg";
import dining_room from "../assets/rooms/dining.jpg";
import lounge from "../assets/rooms/lounge.jpg";



export const BoardConfig: BoardConfig = {

    rooms: {
        Studyroom: {
            coords: [[0, 0], [0, 0]],
            name: "StudyRoom",
            path: study_room,
        },
        Library: {
            coords: [[3, 0], [2, 0]],
            name: "Library",
            path: library,
        },
        Lounge: {
            coords: [[0, 4], [0, 4]],
            name: "Lounge",
            path: lounge,
        },
        Conservatory: {
            coords: [[5, 0], [5, 0]],
            name: "Conservatory",
            path: conservatory,
        },
        Billiard: {
            coords: [[3, 2], [2, 2]],
            name: "Billiard",
            path: billiard_room,

        },
        Ballroom: {
            coords: [[5, 2], [5, 2]],
            name: "BallRoom",
            path: ball_room,
        },
        Diningroom: {
            coords: [[3, 4], [2, 4]],
            name: "DiningRoom",
            path: dining_room,
        },
        Kitchen: {
            coords: [[5, 4], [5, 4]],
            name: "Kitchen",
            path: kitchen,
        }

    }
};
