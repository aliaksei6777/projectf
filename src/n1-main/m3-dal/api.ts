import axios from "axios";
import {UserDataType} from "../../n2-features/f1-auth/a1-login/auth-reducer";

export const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export type APIResponseType<D = {}> = {
    data: D
    statusText: string
}

export type UpdateUserResponse = {
    error: string
    updatedUser: UserDataType
}