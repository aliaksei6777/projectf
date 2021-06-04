import {instance} from "../../n1-main/m3-dal/api";
import {CardPacksType} from "./pack-reducer";

export const packApi = {
    getCardPacks(page: number, pageCount: number, packName: string = '') {
        return instance.get<GetCardPacksResponseType>(`cards/pack?page=${page}&pageCount=${pageCount}&packName=${packName}`);
    },
    createCardsPack(cardsPack: CardPacksType) {
        return instance.post('cards/pack', {cardsPack});
    },
    updateCardsPack(cardsPack: CardPacksType) {
        return instance.put('cards/pack', {cardsPack});
    },
    deleteCardsPack(id: string) {
        return instance.delete(`cards/pack?id=${id}`);
    }
}

type GetCardPacksResponseType = {
    cardPacks: CardPacksType[],
    page: number,
    pageCount: number,
    cardPacksTotalCount: number,
    minCardsCount: number,
    maxCardsCount: number,
    token: string,
    tokenDeathTime: string
}

export type UpdateCardsPackType = {
    _id: string,
    name: string
}