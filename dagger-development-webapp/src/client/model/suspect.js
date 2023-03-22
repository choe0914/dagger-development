import colonel_mustard from "../assets/suspects/colonel_mustard.png"
import miss_scarlet from "../assets/suspects/miss_scarlet.png"
import mr_green from "../assets/suspects/mr_green.png"
import mrs_peacock from "../assets/suspects/mrs_peacok.png"
import mrs_white from "../assets/suspects/mrs_white.png"
import professor_plum from "../assets/suspects/professor_plum.png"


export const Suspect: Suspect = {
    0: "Colonel Mustard",
    1: "Miss Scarlet",
    2: "Mr Green",
    3: "Mrs Peacoxk",
    4: "Mrs White",
    5: "Professor Plum",
  }

/** 
 * SuspectImageList will include images to display login page 
 */
export const SuspectImageList: SuspectImageList = [
    {
        name: "Colonel. Mustard",
        src: colonel_mustard,
        width: 200,
        height: 150,
    },
    {
        name: "Miss. Scarlet",
        src: miss_scarlet,
        width: 200,
        height: 150,
	},
    {
        name: "Mr. Green",
        src: mr_green,
        width: 200,
        height: 150,
    },
    {
        name: "Mrs. Peacok",
        src: mrs_peacock,
        width: 200,
        height: 150,
    },
    {
        name: "Mrs. White",
        src: mrs_white,
        width: 200,
        height: 150,
	},
    {   name: "Professor. Plum",
        src: professor_plum,
        width: 200,
        height: 150,
    }
];

/** 
 * SuspectConfig will include suspect location on the board 
 */
export const SuspectConfig: SuspectConfig = {
    suspects: {
        Scarlet: {
            coords: [[0,3],[0,3]],
            name: "Miss. Scarlet",
            class: "red", 
        },
        Mustard: {
            coords: [[2,4],[2,4]],
            name: "Colonel Mustard",
            class: "pink", 

        },
        Plum: {
            coords: [[1,0],[1,0]],
            name: "Professor Plum",
            class: "purple", 

        },
        Peacock: {
            coords: [[4,0],[4,0]],
            name: "Mrs. Peacock",
            class: "yellow", 

        },
        Green: {
            coords: [[5,1],[5,1]],
            name: "Mr. Green",
            class: "green", 

        },
        White: {
            coords: [[5,3],[5,3]],
            name: "Mrs. White",
            class:"blue", 
        }
    
    }
};