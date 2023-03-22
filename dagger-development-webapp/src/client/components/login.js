import React, { useState, useEffect, useContext } from "react";
import { SuspectImageList, Suspect } from '../model/suspect';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Gallery } from "react-grid-gallery";
import { GameStateContext, SelectedSuspect }from '../model/context';

// TODO:: Provide error message when user did not provide information
export function playerSetup(userName: string, suspect: string): string | null {
	if (!userName) {
		return 'You must provide a user name!';
	}
    if (!suspect) {
        return 'You must provide a user name!';

    }
	return null;
}


export function SelectSuspect() {
    const [selectedSuspect, setSelectedSuspect] = useContext(SelectedSuspect);
 	const [userName, setUserName] = React.useState('');
    const [canStart, setCanStart] = useContext(GameStateContext);
	const err = playerSetup(userName, selectedSuspect);
    const canSetUp = err === null;

    const handleSubmit = (e) => {
        // In order to not lose data 
        e.preventDefault();
        // TODO:: Need to add input validation
        setCanStart(true);
    }

     return (
         <form onSubmit={handleSubmit}>
            <label >
                User ID 
                <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Put your user name" id="userId" name="userId" />
            </label>
            <Gallery images={SuspectImageList} onClick={(e) => setSelectedSuspect(Suspect[e])} enableImageSelection={true} />
			<input disabled={!canSetUp} type="submit" value="Submit" />
         </form>
     )
}
