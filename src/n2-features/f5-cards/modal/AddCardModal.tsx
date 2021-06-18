import {HiringModal} from "../../../n3-components/Modal/Modal";
import React from "react";
import styled from "styled-components";


export const AddCardModal = (props: addCardModalType) => {
    return (
        <HiringModal active={props.activeModal} setActive={props.setActiveModal}>
            <ModalTitle>Add card</ModalTitle>
            <ContainerStyle>
                <ModalSpan>Question</ModalSpan>
                <input type={'text'} value={props.valueQuestion} onChange={props.onChangeInputQuestionModal}/>
                <ModalSpan>Answer</ModalSpan>
                <input type={'text'} value={props.valueAnswer} onChange={props.onChangeInputAnswerModal}/>
            </ContainerStyle>
            <ModalButtonAdd onClick={props.addCard}>Save</ModalButtonAdd>
        </HiringModal>
    )
}

//type
type addCardModalType = {
    activeModal: boolean
    setActiveModal: Function
    onChangeInputQuestionModal: (e: React.FormEvent<HTMLInputElement>) => void
    valueQuestion: string
    valueAnswer: string
    onChangeInputAnswerModal: (e: React.FormEvent<HTMLInputElement>) => void
    addCard: () => void
}


//style
const ModalTitle = styled.h4`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #2D2E46;
`

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 150px;
`

const ModalSpan = styled.span`
  margin-bottom: 10px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
`

const ModalButtonAdd = styled.button`
  position: absolute;
  top: 200px;
  right: 30px;

`