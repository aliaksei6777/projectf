import React from "react";
import styled from "styled-components";

type showPacksCardsType = {
    showMyPacks: () => void
    showAllPacks: () => void
}

export const ShowPacksCards = (props: showPacksCardsType) => {
    return <div>
        <TitleStyled>Show pack cards</TitleStyled>
        <ButtonStyled onClick={props.showMyPacks}>My</ButtonStyled>
        <ButtonStyled onClick={props.showAllPacks}>All</ButtonStyled>
        <TitleStyled>Number of cards</TitleStyled>
        <InputStyled type="range" min="1" max="100" value="50"/>
    </div>
}


const TitleStyled = styled.h3`
  margin-top: 25px;
  margin-bottom: 30px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #2D2E46;
`

const ButtonStyled = styled.button`
  border-radius: 2px;
  background-color: #ffff;
  border: 1px solid black;
  width: 70px;

  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #2D2E46;

  &:focus {
    background-color: #9A91C8;
  }
`

const InputStyled = styled.input`
  -webkit-appearance: none;
  background-color: #21268F;
  border-radius: 10px;
  height: 5px;
  
`