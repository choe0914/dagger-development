import * as React from "react";
import { Room } from "../Room";
import BallRoom from "../../assets/rooms/study.png";

export function Board() {
        return(
        <table>
            <tbody>
                <tr>
                    <Room
                    room={BallRoom}
                    />
                </tr>
                <tr>
                  hi there
                </tr>
            </tbody>
        </table>
        );
}