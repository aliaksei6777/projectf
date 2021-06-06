import {
    setAppError,
    SetAppErrorActionType,
    setAppStatus,
    SetAppStatusActionType
} from "../../n1-main/m1-ui/app-reducer";
import {packApi} from "./pack-api";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../../n1-main/m2-bll/store";


const initialState = {
    cardPacks: [] as CardPacksType[],
    currentPage: 1,
    pageSize: 10,
    packsTotalCount: 5,
}

export const cardsPacksReducer = (state = initialState, actions: ActionsType): CardsPackInitialStateType => {
    switch (actions.type) {
        case 'CARD-PACKS/SET-CURRENT-PAGE':
            return {...state, currentPage: actions.currentPage};
        case 'CARD-PACKS/SET-CARDS':
            return {...state, cardPacks: actions.cardPacks}
        case 'CARD-PACKS/ADD-CARDS':
            return {...state, cardPacks: [actions.newPacks, ...state.cardPacks]}
        case 'CARD-PACKS/SET-PACKS-TOTAL-COUNT':
            return {...state, packsTotalCount: actions.packsTotalCount};
        default:
            return state
    }
}

export const setCardPacks = (cardPacks: CardPacksType[]) => ({type: 'CARD-PACKS/SET-CARDS', cardPacks} as const)
export const createCardPacks = (newPacks: CardPacksType) => ({type: 'CARD-PACKS/ADD-CARDS', newPacks} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'CARD-PACKS/SET-CURRENT-PAGE', currentPage} as const)
export const setPacksTotalCount = (packsTotalCount: number) => ({type: 'CARD-PACKS/SET-PACKS-TOTAL-COUNT', packsTotalCount} as const)

export const getCardPacksTC = (requestPage: number, pageSize: number) =>
    async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setCurrentPage(requestPage))
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))
    try {
        const res = await packApi.getCardPacks(requestPage, pageSize)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(setCardPacks(res.data.cardPacks))
        dispatch(setPacksTotalCount(res.data.cardPacksTotalCount))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

export const addCardPacksTC = (cardPacks: CardPacksType) =>
    async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>, getState: () => RootStateType) => {

    const requestPage = getState().cardPacks.currentPage
    const pageSize = getState().cardPacks.pageSize
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))

    try {
        await packApi.createCardsPack(cardPacks)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(getCardPacksTC(requestPage, pageSize))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

export const updateCardPacksTC = (cardsPack: CardPacksType) =>
    async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>, getState: () => RootStateType) => {

    const requestPage = getState().cardPacks.currentPage
    const pageSize = getState().cardPacks.pageSize
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))

    try {
        await packApi.updateCardsPack(cardsPack)
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(getCardPacksTC(requestPage, pageSize))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

export const deleteCardPacksTC = (id: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>, getState: () => RootStateType) => {

    const requestPage = getState().cardPacks.currentPage
    const pageSize = getState().cardPacks.pageSize
    dispatch(setAppStatus('loading'))
    dispatch(setAppError(null))

    const res = await packApi.deleteCardsPack(id)
    try {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError(null))
        dispatch(getCardPacksTC(requestPage, pageSize))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'))
        dispatch(setAppError(error))
        console.log('Error: ', {error})
    }
}

//types
export type CardsPackInitialStateType = typeof initialState

type ActionsType =
    | SetAppStatusActionType
    | SetAppErrorActionType
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof createCardPacks>
    | ReturnType<typeof setCardPacks>
    | ReturnType<typeof setPacksTotalCount>


export type CardPacksType = {
    _id: string
    user_id?: string
    user_name?: string
    private?: boolean
    name: string
    path?: string
    grade?: number
    shots?: number
    cardsCount?: number | undefined
    type: string
    rating?: number
    created?: string | undefined
    updated?: string
    more_id?: string
    __v?: number
}