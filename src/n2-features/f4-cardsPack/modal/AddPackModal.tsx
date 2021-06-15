import {HiringModal} from "../../../n3-components/Modal/Modal";
import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addCardPacksTC} from "../pack-reducer";
import {v1} from "uuid";


type addPackModalType = {
    activeModal: boolean
    setActiveModal: Function
    setSuccess: () => void
}

export const AddPackModal = (props: addPackModalType) => {
    const [value, setValue] = useState<string>('aaa')
    const dispatch = useDispatch()
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addPack = () => {
        dispatch(addCardPacksTC({_id: v1(), name: value}))
        props.setActiveModal(false)
    }

    return (
        <HiringModal active={props.activeModal} setActive={props.setActiveModal}>
            <ModalTitle>Add Pack</ModalTitle>
            <SpanContainerStyle>
                <ModalSpan>Pack Name</ModalSpan>
                <input type={'text'} value={value} onChange={onChange}/>
            </SpanContainerStyle>
            <ModalButtonDelete
                onClick={addPack}>Add</ModalButtonDelete>
        </HiringModal>
    )
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

const SpanContainerStyle = styled.div`
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

const ModalButtonDelete = styled.button`
  position: absolute;
  top: 200px;
  right: 30px;

`