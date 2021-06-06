import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import React, {useEffect} from "react";
import {addCardPacksTC, CardPacksType, getCardPacksTC} from "./pack-reducer";
import {Pack} from "./Pack";
import {v1} from "uuid";
import {SearchPack} from "./SearchPack";

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

    return (
        <CardsStyledContainer>
            <FirstColumn>

            </FirstColumn>
            <SecondColumn>
                <SearchPack/>
                <Pack cardPack={cardPacks}/>
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