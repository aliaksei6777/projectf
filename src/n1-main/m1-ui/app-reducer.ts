import React from "react";


const initialState = {}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    return state
}


//type

export type InitialStateType = typeof initialState
export type ActionsType = {}