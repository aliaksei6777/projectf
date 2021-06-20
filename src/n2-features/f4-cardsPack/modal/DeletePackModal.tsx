import {HiringModal} from "../../../n3-components/Modal/Modal";
import React from "react";
import styled from "styled-components";


export const DeletePackModal = (props: deletePackModalType) => {
    return (
        <HiringModal active={props.activeModal} setActive={props.setActiveModal}>
            <ModalTitle>Delete Pack</ModalTitle>
            <ContainerStyle>
                <ModalSpan>Do you really want to remove pack?</ModalSpan>
                <ModalSpan>All cards will be excluded from this course.</ModalSpan>
            </ContainerStyle>
            <ModalButtonDelete onClick={props.deletePack}>Delete</ModalButtonDelete>
        </HiringModal>
    )
}

//type
type deletePackModalType = {
    activeModal: boolean
    setActiveModal: Function
    deletePack: () => void
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

const ModalButtonDelete = styled.button`
  position: absolute;
  top: 200px;
  right: 30px;

`