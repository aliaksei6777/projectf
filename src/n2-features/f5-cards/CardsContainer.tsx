import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {addCardTC, CardType, getCardsTC} from "./cards-reducer";
import {Card} from "./Card";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {v1} from "uuid";

export const CardsContainer = () => {
    const cards = useSelector<RootStateType, CardType[]>(state => state.cards.cards)

    const {id} = useParams<{id: string}>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [])
    const tempCart: CardType = {
        _id: v1(),
        type: 'sport',
        question: 'What is your favorite game?',
        answer: 'Football',
        cardsPack_id: id,
        grade: 5,
        rating: 0
    }

    const cardsMapped = cards.map((c: CardType) => <Card key={c._id} card={c}/>)
    return (
        <CardsStyledContainer>
            ------------
            {cardsMapped}
            -------------
            <button onClick={() => dispatch(addCardTC(tempCart))}>ADD</button>
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