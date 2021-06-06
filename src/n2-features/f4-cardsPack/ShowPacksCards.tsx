import React from "react";

type showPacksCardsType = {
    showMyPacks: () => void
    showAllPacks: () => void
}

export const ShowPacksCards = (props: showPacksCardsType) => {
    return <>
        <h3>Show pack cards</h3>
        <button onClick={props.showMyPacks}>My</button>
        <button onClick={props.showAllPacks}>All</button>
        <h3>Number of cards</h3>
        <input type="range" min="1" max="100" value="50"/>
    </>
}