import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import React, {useEffect} from "react";
import {
    addCardPacksTC,
    CardPacksType,
    deleteCardPacksTC,
    getCardPacksTC,
    setCardPacks,
} from "./pack-reducer";
import {Pack} from "./Pack";
import {v1} from "uuid";
import {SearchPack} from "./SearchPack";
import {ShowPacksCards} from "./ShowPacksCards";

export const PackContainer = () => {
    const cardPacks = useSelector<RootStateType, CardPacksType[]>(state => state.cardPacks.cardPacks)
    const myId = useSelector<RootStateType, string>(state => state.auth.user._id)
    const packId = useSelector<RootStateType, string[]>(state => state.cardPacks.cardPacks.map(p => p._id))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardPacksTC(1, 10))
    }, [])

    const tempPack: CardPacksType = {
        _id: v1(),
        name: "test name",
        type: "test type"
    }

    const showMyPacks = () => {
        const myCardPack = cardPacks.filter(c => c.user_id === myId)
        dispatch(setCardPacks(myCardPack))
    }

    const showAllPacks = () => {
        dispatch(getCardPacksTC(1, 10))
    }

    const deletePack = (id: string) => {
            dispatch(deleteCardPacksTC(id))
    }


    return (
        <CardsStyledContainer>
            <FirstColumn>
                <ShowPacksCards showMyPacks={showMyPacks} showAllPacks={showAllPacks}/>
            </FirstColumn>
            <SecondColumn>
                <SearchPack/>
                <Pack cardPack={cardPacks} deletePack={deletePack}/>
                <button onClick={() => dispatch(addCardPacksTC(tempPack))}>ADD PACK</button>
            </SecondColumn>
        </CardsStyledContainer>
    )
}


//styled-components
const CardsStyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: start;
`

const FirstColumn = styled.div`
  width: 20%;
`

const SecondColumn = styled.div`

`