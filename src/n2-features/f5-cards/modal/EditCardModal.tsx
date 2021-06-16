import {HiringModal} from "../../../n3-components/Modal/Modal";
import React from "react";
import styled from "styled-components";


export const EditCardModal = (props: editCardModalType) => {
    return (
        <HiringModal active={props.activeModal} setActive={props.setActiveModal}>
            <ModalTitle>Edit Card</ModalTitle>
            <ContainerStyle>
                <ModalSpan>Change card question</ModalSpan>
                <input type={'text'} value={props.valueQuestion} onChange={props.onChangeInputQuestionModal}/>
                <ModalSpan>Change card answer</ModalSpan>
                <input type={'text'} value={props.valueAnswer} onChange={props.onChangeInputAnswerModal}/>
            </ContainerStyle>
            <ModalButtonEdit onClick={props.editCard}>Edit</ModalButtonEdit>
        </HiringModal>
    )
}

//type
type editCardModalType = {
    activeModal: boolean
    setActiveModal: Function
    onChangeInputQuestionModal: (e: React.FormEvent<HTMLInputElement>) => void
    valueQuestion: string
    onChangeInputAnswerModal: (e: React.FormEvent<HTMLInputElement>) => void
    valueAnswer: string
    editCard: () => void
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

const ModalButtonEdit = styled.button`
  position: absolute;
  top: 200px;
  right: 30px;

`