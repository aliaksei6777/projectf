import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {addCardTC, CardType, deleteCardTC, getCardsTC, updateCardTC} from "./cards-reducer";
import {Card} from "./Card";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {v1} from "uuid";
import {SearchCard} from "./SearchCard";
import {AddCardModal} from "./modal/AddCardModal";
import {DeleteCardModal} from "./modal/DeleteCardModal";
import {EditCardModal} from "./modal/EditCardModal";


export const CardsContainer = () => {
    const cards = useSelector<RootStateType, CardType[]>(state => state.cards.cards)
    const myId = useSelector<RootStateType, string>(state => state.auth.user._id)
    const {id} = useParams<{ id: string }>()
    const [idCard, setIdCard] = useState<string>('')
    const [activeAddCardModal, setActiveAddCardModal] = useState(false)
    const [activeDeleteCardModal, setActiveDeleteCardModal] = useState(false)
    const [activeEditCardModal, setActiveEditCardModal] = useState(false)
    const [valueInputQuestion, setValueInputQuestion] = useState<string>('')
    const [valueInputAnswer, setValueInputAnswer] = useState<string>('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [])


    const onChangeInputQuestionModal = (e: React.FormEvent<HTMLInputElement>) => {
        setValueInputQuestion(e.currentTarget.value)
    }

    const onChangeInputAnswerModal = (e: React.FormEvent<HTMLInputElement>) => {
        setValueInputAnswer(e.currentTarget.value)
    }

    const addCard = () => {
        dispatch(addCardTC({_id: v1(), question: valueInputQuestion, answer: valueInputAnswer, cardsPack_id: id}))
        setActiveAddCardModal(false)
    }

    const deleteCard = () => {
        dispatch(deleteCardTC(idCard))
        setActiveDeleteCardModal(false)
    }

    const setActiveDeleteModal = (id: string) => {
        setActiveDeleteCardModal(true)
        setIdCard(id)
    }

    const setActiveEditModal = (id: string, question: string, answer: string) => {
        setActiveEditCardModal(true)
        setIdCard(id)
        setValueInputQuestion(question)
        setValueInputAnswer(answer)
    }

    const editCard = () => {
        dispatch(updateCardTC({_id: idCard, question: valueInputQuestion, answer: valueInputAnswer, cardsPack_id: id}))
        setActiveEditCardModal(false)
    }

    return (
        <CardStyled>
            <CardsStyledContainer>
                <SearchCard/>
                <Card
                    myId={myId}
                    card={cards}
                    setActiveDeleteModal={setActiveDeleteModal}
                    setActiveEditModal={setActiveEditModal}
                />
                <ButtonStyle onClick={() => setActiveAddCardModal(true)}>ADD</ButtonStyle>
                <AddCardModal
                    activeModal={activeAddCardModal}
                    setActiveModal={setActiveAddCardModal}
                    onChangeInputQuestionModal={onChangeInputQuestionModal}
                    valueQuestion={valueInputQuestion}
                    onChangeInputAnswerModal={onChangeInputAnswerModal}
                    valueAnswer={valueInputAnswer}
                    addCard={addCard}
                />
                <DeleteCardModal
                    activeModal={activeDeleteCardModal}
                    setActiveModal={setActiveDeleteCardModal}
                    deleteCard={deleteCard}
                />
                <EditCardModal
                    activeModal={activeEditCardModal}
                    setActiveModal={setActiveEditCardModal}
                    onChangeInputQuestionModal={onChangeInputQuestionModal}
                    valueQuestion={valueInputQuestion}
                    onChangeInputAnswerModal={onChangeInputAnswerModal}
                    valueAnswer={valueInputAnswer}
                    editCard={editCard}
                    />
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