import {CardPacksType} from "./pack-reducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";
import React from "react";
import styled from "styled-components";


export const Pack: React.FC<PropsType> = ({cardPack}) => {
    return <>
            <div>{cardPack.name}</div>
            <span><NavLink to={PATH.CARDS + '/' + cardPack._id}>Cards</NavLink></span>
            <div>{cardPack.type}</div>
    </>
}

//styled-components


//types
type PropsType = {
    cardPack: CardPacksType
}

