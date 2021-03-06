import {CardPacksType} from "./pack-reducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";
import React from "react";
import styled from "styled-components";


export const Pack: React.FC<CardType> = (props) => {
    return <>
        <Table>
            <Thead>
                <ThStyled>Name</ThStyled>
                <ThStyled>Cards</ThStyled>
                <ThStyled>Last Updated</ThStyled>
                <ThStyled>Created by</ThStyled>
                <ThStyled>Actions</ThStyled>
            </Thead>
            {props.cardPack.map(cardPack => {
                return <TrStyled key={cardPack._id}>
                    <TdStyled> <StyledLink to={PATH.CARDS + '/' + cardPack._id}>{cardPack.name}</StyledLink></TdStyled>
                    <TdStyled>{cardPack.cardsCount}</TdStyled>
                    <TdStyled>{cardPack.updated}</TdStyled>
                    <TdStyled>{cardPack.user_name}</TdStyled>
                    <TdStyled>
                        {cardPack.user_id === props.myId
                        &&
                        <ButtonDelete onClick={() => props.setActiveDeleteModal(cardPack._id)}>Delete</ButtonDelete>}
                        {cardPack.user_id === props.myId
                        &&
                        <ButtonEdit onClick={() => props.setActiveEditModal(cardPack._id, cardPack.name)}>Edit</ButtonEdit>}
                        <ButtonLearn>
                            Learn
                        </ButtonLearn>
                    </TdStyled>
                </TrStyled>
            })}
        </Table>
    </>
}


//types
type CardType = {
    cardPack: Array<CardPacksType>
    setActiveDeleteModal: (id: string) => void
    setActiveEditModal: (id: string, name: string) => void
    myId: string
}

//styled-components
const Table = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  border: 3px solid #ECECF9;
  margin-left: 10px;
  margin-right: 10px;

  filter: drop-shadow(0px 4px 14px rgba(45, 46, 70, 0.15));
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
const ButtonLearn = styled.button`
  background: #D7D8EF;
  border-radius: 2px;
  margin-left: 3px;
  border: none;

  &:active {
    background-color: #b1b1b1 !important;
  }
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #21268F;
`


