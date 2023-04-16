import React, { useState, createContext } from 'react';

export const CurrentHandContext = createContext([{}, () => { }]);
export const CurrentHandProvider = (props) => {
    const [card, setCard] = useState({});

    return (
        <CurrentHandContext.Provider value={[card, setCard ]} >{props.children}</CurrentHandContext.Provider>
    );
}

