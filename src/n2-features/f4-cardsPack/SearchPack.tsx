import React from "react";
import styled from "styled-components";

export const SearchPack = (props: searchPackType) => {
    return <>
        <InputSearchContainer type={'search'} placeholder={'Search...'}/>
        <ButtonStyled onClick={() => props.setActiveAddPackModal(true)}>Add new pack</ButtonStyled>
    </>
}

//type
type searchPackType = {
    setActiveAddPackModal: Function
}

//styled-components
const InputSearchContainer = styled.input`
  width: 50%;
  height: 30px;
  margin-right: 20px;
  background: #ECECF9;
  opacity: 0.5;
  border: 1px solid #635D80;
  box-sizing: border-box;
  border-radius: 2px;
  margin-left: 10px;
`

const ButtonStyled = styled.button`
  background: #21268F;
  width: 150px;
  height: 30px;
  box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: 1px;

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