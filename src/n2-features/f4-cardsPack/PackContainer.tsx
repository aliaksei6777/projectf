import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import React, {useEffect} from "react";
import {CardPacksType, getCardPacksTC} from "./pack-reducer";
import {Pack} from "./Pack";

export const PackContainer = () => {
    const cardPacks = useSelector<RootStateType, CardPacksType[]>(state => state.cardPacks.cardPacks)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardPacksTC(1, 10))
    }, [])

    const cardPacksMapped = cardPacks.map((c: CardPacksType) => <Pack key={c._id} cardPack={c}/>)
    return (
        <CardsStyledContainer>
            {cardPacksMapped}
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