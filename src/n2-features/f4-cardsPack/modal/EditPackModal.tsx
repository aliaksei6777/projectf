import {HiringModal} from "../../../n3-components/Modal/Modal";
import React from "react";
import styled from "styled-components";


export const EditPackModal = (props: editPackModalType) => {
    return (
        <HiringModal active={props.activeModal} setActive={props.setActiveModal}>
            <ModalTitle>Edit Pack</ModalTitle>
            <ContainerStyle>
                <ModalSpan>Change pack name</ModalSpan>
                <input type={'text'} value={props.value} onChange={props.onChangeInputModal}/>
            </ContainerStyle>
            <ModalButtonEdit onClick={props.editPack}>Edit</ModalButtonEdit>
        </HiringModal>
    )
}

//type
type editPackModalType = {
    activeModal: boolean
    setActiveModal: Function
    onChangeInputModal: (e: React.FormEvent<HTMLInputElement>) => void
    value: string
    editPack: () => void
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