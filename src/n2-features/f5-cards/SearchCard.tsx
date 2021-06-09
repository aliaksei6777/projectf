import React from "react";
import styled from "styled-components";


export const SearchCard = () => {
    return <SearchPackStyled>
        <InputSearchContainer type={'search'} placeholder={'Search...'}/>
        <ButtonSearch>Add new card</ButtonSearch>
    </SearchPackStyled>
}

//styled-components
const SearchPackStyled = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
  flex-direction: row;
  width: 100%;
`

const InputSearchContainer = styled.input`
  width: 60%;
  height: 30px;
  margin-right: 20px;
  background: #ECECF9;
  opacity: 0.5;
  border: 1px solid #635D80;
  box-sizing: border-box;
  border-radius: 2px;
  margin-left: 10px;
`

const ButtonSearch = styled.button`
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