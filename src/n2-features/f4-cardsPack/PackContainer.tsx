import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../n1-main/m2-bll/store";
import React, {ChangeEvent, useEffect, useState} from "react";
import {
    addCardPacksTC,
    CardPacksType,
    deleteCardPacksTC,
    getCardPacksTC,
    setCardPacks,
    setPageSize,
    updateCardPacksTC,
} from "./pack-reducer";
import {Pack} from "./Pack";
import {v1} from "uuid";
import {SearchPack} from "./SearchPack";
import {ShowPacksCards} from "./ShowPacksCards";
import {Redirect} from "react-router-dom";
import {PATH} from "../../n1-main/m1-ui/u3-routes/Routes";
import {Paginator} from "../../n3-components/Paginator/Paginator";
import {AddPackModal} from "./modal/AddPackModal";
import {DeletePackModal} from "./modal/DeletePackModal";
import {EditPackModal} from "./modal/EditPackModal";

export const PackContainer = React.memo(() => {
        console.log("render")
        const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
        const cardPacks = useSelector<RootStateType, CardPacksType[]>(state => state.cardPacks.cardPacks)
        const myId = useSelector<RootStateType, string>(state => state.auth.user._id)
        const totalPageCount = useSelector<RootStateType, number>(state => state.cardPacks.packsTotalCount)
        const currentPage = useSelector<RootStateType, number>(state => state.cardPacks.currentPage)
        const pageSize = useSelector<RootStateType, number>(state => state.cardPacks.pageSize)
        const [activeDeletePackModal, setActiveDeletePackModal] = useState(false)
        const [activeAddPackModal, setActiveAddPackModal] = useState(false)
        const [activeEditPackModal, setActiveEditPackModal] = useState(false)
        const [valueInput, setValueInput] = useState<string>('')
        const [idPack, setIdPack] = useState<string>('')
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(getCardPacksTC(1, pageSize))
        }, [pageSize])

        const onChangeInputModal = (e: React.FormEvent<HTMLInputElement>) => {
            setValueInput(e.currentTarget.value)
        }

        const addPack = () => {
            dispatch(addCardPacksTC({_id: v1(), name: valueInput}))
            setActiveAddPackModal(false)
        }

        const pageChangeHandler = (pageNumber: number) => {
            dispatch(getCardPacksTC(pageNumber, pageSize))
        }

        const changeCardsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setPageSize(+e.currentTarget.value))
        }

        const showMyPacks = () => {
            const myCardPack = cardPacks.filter(c => c.user_id === myId)
            dispatch(setCardPacks(myCardPack))
        }

        const showAllPacks = () => {
            dispatch(getCardPacksTC(1, pageSize))
        }

        const deletePack = () => {
            dispatch(deleteCardPacksTC(idPack))
            setActiveDeletePackModal(false)
        }

        const setActiveDeleteModal = (id: string) => {
            setActiveDeletePackModal(true)
            setIdPack(id)
        }


        const setActiveEditModal = (id: string, name: string) => {
            setActiveEditPackModal(true)
            setIdPack(id)
            setValueInput(name)
        }

        const editPack = () => {
            dispatch(updateCardPacksTC({_id: idPack, name: valueInput}))
            setActiveEditPackModal(false)
        }

        if (!isLoggedIn) {
            return <Redirect to={PATH.LOGIN}/>
        }


        return (
            <DivContainerStyle>
                <CardsStyledContainer>
                    <FirstColumn>
                        <ShowPacksCards showMyPacks={showMyPacks} showAllPacks={showAllPacks}/>
                    </FirstColumn>
                    <SecondColumn>
                        <H3>Pack list</H3>
                        <SearchPack/>
                        <Pack
                            cardPack={cardPacks}
                            myId={myId}
                            setActiveDeleteModal={setActiveDeleteModal}
                            setActiveEditModal={setActiveEditModal}
                        />
                        <ButtonStyle onClick={() => setActiveAddPackModal(true)}>Add Pack</ButtonStyle>
                        <PaginatorStyled>
                            <Paginator totalItemsCount={totalPageCount}
                                       pageSize={10}
                                       currentPage={currentPage}
                                       onPageChanged={pageChangeHandler}/>
                            <div>
                                <span>Show </span>
                                <select value={pageSize} onChange={changeCardsPerPage}>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                                <span> cards per Page</span>
                            </div>
                        </PaginatorStyled>
                        <AddPackModal
                            activeModal={activeAddPackModal}
                            setActiveModal={setActiveAddPackModal}
                            addPack={addPack}
                            onChangeInputModal={onChangeInputModal}
                            value={valueInput}
                        />
                        <DeletePackModal
                            activeModal={activeDeletePackModal}
                            setActiveModal={setActiveDeletePackModal}
                            deletePack={deletePack}
                        />
                        <EditPackModal
                            activeModal={activeEditPackModal}
                            setActiveModal={setActiveEditPackModal}
                            onChangeInputModal={onChangeInputModal}
                            value={valueInput}
                            editPack={editPack}
                        />
                    </SecondColumn>
                </CardsStyledContainer>
            </DivContainerStyle>
        )
    }
)


//styled-components
const DivContainerStyle = styled.div`
  display: flex;
  justify-content: center;
`
const CardsStyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  border-radius: 8px;
`
const FirstColumn = styled.div`
  width: 20%;
  background: #ECECF9;
  min-height: 575px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

`
const SecondColumn = styled.div`
  background: #FEFEFF;
  min-height: 575px;
`
const H3 = styled.h3`
  font-family: sans-serif;
  color: #2D2E46;
  size: 22px;
  line-height: 33px;
  margin-left: 10px;
`

const ButtonStyle = styled.button`
  background: #21268F;
  width: 100px;
  height: 30px;
  box-shadow: 0px 4px 18px rgba(33, 38, 143, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: 1px;
  margin-top: 10px;
  margin-left: 10px;

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

const PaginatorStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`