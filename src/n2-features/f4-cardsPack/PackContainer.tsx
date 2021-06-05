import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import React, {useEffect} from "react";
import {addCardPacksTC, CardPacksType, getCardPacksTC} from "./pack-reducer";
import {Pack} from "./Pack";
import {v1} from "uuid";

export const PackContainer = () => {
    const cardPacks = useSelector<RootStateType, CardPacksType[]>(state => state.cardPacks.cardPacks)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardPacksTC(1, 10))
    }, [])
    const tempPack: CardPacksType = {
        _id: v1(),
        name: "test name",
        type: "test type"
    }
    const cardPacksMapped = cardPacks.map((c: CardPacksType) => <Pack key={c._id} cardPack={c}/>)
    return (
        <CardsStyledContainer>
            {cardPacksMapped}
            <button onClick={() => dispatch(addCardPacksTC(tempPack))}>ADD PACK</button>

        </CardsStyledContainer>

    )
}


//styled-components

const CardsStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`