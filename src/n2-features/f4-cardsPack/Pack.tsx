import {CardPacksType} from "./pack-reducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";
import React from "react";
import styled from "styled-components";



export const Pack: React.FC<CardType> = (props) => {
    return <>
        <Table>
            <thead>
            <ThStyled>Name</ThStyled>
            <ThStyled>Cards</ThStyled>
            <ThStyled>Last Updated</ThStyled>
            <ThStyled>Created by</ThStyled>
            <ThStyled>Actions</ThStyled>
            </thead>

            {props.cardPack.map(cardPack => {
                return <tr key={cardPack._id}>
                    <TdStyled>{cardPack.name}</TdStyled>
                    <TdStyled>{cardPack.cardsCount}</TdStyled>
                    <TdStyled>{cardPack.updated}</TdStyled>
                    <TdStyled>{cardPack.user_name}</TdStyled>
                    <TdStyled>
                        <button onClick={() => props.deletePack(cardPack._id)}>Delete</button>
                        <button>Edit</button>
                        <button>
                            <NavLink to={PATH.CARDS + '/' + cardPack._id}>Learn</NavLink>
                        </button>
                    </TdStyled>
                </tr>
            })}

        </Table>
    </>
}

//styled-components
const Table = styled.table`
  margin-top: 20px;
`

const ThStyled = styled.th`
  width: 250px;
  background-color: aquamarine;
  text-align: start;
`

const TdStyled = styled.td`
  width: 250px;
  margin: 20px;
  text-align: start;
`

//types
type CardType = {
    cardPack: Array<CardPacksType>
    deletePack: (id: string) => void
}

