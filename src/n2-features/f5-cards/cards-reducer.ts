import {setAppError, SetAppErrorActionType,
    setAppStatus, SetAppStatusActionType
} from "../../n1-main/m1-ui/app-reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../../n1-main/m2-bll/store";
import {cardsAPI} from "./cards-api";


const initialState = {
    cards: [] as CardType[],
    page: 1,
    pageCount: 3,
    cardsTotalCount: 5,
    packUserId: '',
} as const

export const cardsReducer = (state = initialState, actions: ActionsType): CardsInitialStateType => {
    switch (actions.type) {
        case 'CARDS/SET-CARDS':
            return {...state, cards: actions.cards}
        case 'CARDS/ADD-CARD':
            return {...state, cards: [actions.newCard, ...state.cards]}

        default:
            return state
    }
}

export const setCards = (cards: CardType[]) => ({type: 'CARDS/SET-CARDS', cards} as const)

export const createCard = (newCard: CardType) => ({type: 'CARDS/ADD-CARD', newCard} as const)


export const getCardsTC = (cardsPackId: string) => async(dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await cardsAPI.getCards(cardsPackId)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(setCards(res.data.cards))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }

}

export const addCardTC = (card: CardType) => async(dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await cardsAPI.createCard(card)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(getCardsTC(res.data.card.cardsPack_id))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

export const updateCardTC = (card: CardType) => async(dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await cardsAPI.updateCard(card)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(getCardsTC(res.data.updatedCard.cardsPack_id))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

export const deleteCardTC = (id: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await cardsAPI.deleteCard(id)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(getCardsTC(res.data.deletedCard.cardsPack_id))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}


//types
export type CardsInitialStateType = typeof initialState

type ActionsType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof createCard>
    | SetAppStatusActionType
    | SetAppErrorActionType

export type CardType = {
    _id: string,
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    type: string,
    user_id?: string,
    created?: string,
    updated?: string,
    __v?: 0,
    shots?: number
}
