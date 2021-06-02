import axios from "axios";
import { UserDataType } from "./auth-reducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
})

type UpdateUserResponse = {
    error: string
    updatedUser: UserDataType
}

export const authAPI = {
    me() {
        return instance.post<UserDataType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<UserDataType>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/me')
    },
    updateUserData(name?: string, avatar?: string) {
        return instance.put<UpdateUserResponse>('auth/me', {name, avatar})
    }
}