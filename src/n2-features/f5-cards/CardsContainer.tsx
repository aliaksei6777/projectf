import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {addCardTC, CardType, deleteCardTC, getCardsTC} from "./cards-reducer";
import {Card} from "./Card";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {v1} from "uuid";
import {SearchCard} from "./SearchCard";


export const CardsContainer = () => {
    const cards = useSelector<RootStateType, CardType[]>(state => state.cards.cards)
    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [])

    const deleteCard = (id: string) => {
        dispatch(deleteCardTC(id))
    }

    const tempCart: CardType = {
        _id: v1(),
        type: 'sport',
        question: 'What is your favorite game?',
        answer: 'Football',
        cardsPack_id: id,
        grade: 5,
        rating: 0
    }

    return (
        <CardStyled>
            <CardsStyledContainer>
                <SearchCard/>
                <Card card={cards} deleteCard={deleteCard}/>
                <ButtonStyle onClick={() => dispatch(addCardTC(tempCart))}>ADD</ButtonStyle>
            </CardsStyledContainer>
        </CardStyled>

    )
}


//styled-components
const CardStyled = styled.div`
  display: flex;
  justify-content: center;
`

const CardsStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 80%;
  border-radius: 8px;
  background-color: #ffff;
  margin-top: 20px;
  min-height: 450px;
`

const ButtonStyle = styled.button`
  background: #21268F;
  width: 100px;
  height: 30px;
  box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: 1px;
  margin-top: 10px;
  margin-left: 10px;

  &:active {
    background-color: #b1b1b1 !important;
  }

  font-family: 'Popins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ECECF9;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`