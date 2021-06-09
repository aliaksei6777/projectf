import {CardType} from "./cards-reducer";
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const Card: React.FC<CardPropsType> = ({card, deleteCard}) => {
    return <>
        <Table>
            <Thead>
                <ThStyled>Question</ThStyled>
                <ThStyled>Answer</ThStyled>
                <ThStyled>Last Updated</ThStyled>
                <ThStyled>Grade</ThStyled>
                <ThStyled>Actions</ThStyled>
            </Thead>
            {card.map(card => {
                return <TrStyled key={card._id}>
                    <TdStyled>{card.question}</TdStyled>
                    <TdStyled>{card.answer}</TdStyled>
                    <TdStyled>{card.updated}</TdStyled>
                    <TdStyled>{card.grade}</TdStyled>
                    <TdStyled>
                        <ButtonDelete onClick={() => deleteCard(card._id)}>DELETE</ButtonDelete>
                        <ButtonEdit>Edit</ButtonEdit>
                    </TdStyled>
                </TrStyled>
            })}
        </Table>
    </>
}

//styled-components
const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  border: 3px solid #ECECF9;
  margin-left: 10px;
  margin-right: 10px;
`

const Thead = styled.thead`
  height: 48px;
  background-color: #ECECF9;
`

const ThStyled = styled.th`
  width: 210px;
  text-align: start;
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #2D2E46;
`

const TrStyled = styled.tr`
  &:nth-child(even) {
    background-color: #FFFFFF;
  }

  &:nth-child(odd) {
    background-color: #ECECF9;
  }

`

const TdStyled = styled.td`
  width: 210px;
  height: 25px;
  padding: 5px;
  text-align: start;

  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
`
const ButtonDelete = styled.button`
  background: #F1453D;
  border-radius: 2px;
  margin-left: 3px;
  color: #ffff;
  border: none;

  &:active {
    background-color: #b1b1b1 !important;
  }
`
const ButtonEdit = styled.button`
  background: #D7D8EF;
  border-radius: 2px;
  margin-left: 3px;
  color: #21268F;
  border: none;

  &:active {
    background-color: #b1b1b1 !important;
  }
`

//types
type CardPropsType = {
    card: CardType[]
    deleteCard: (id: string) => void
}

