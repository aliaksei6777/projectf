import { UserDataType } from "./auth-reducer";
import {instance, UpdateUserResponse} from "../../../n1-main/m3-dal/api";




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