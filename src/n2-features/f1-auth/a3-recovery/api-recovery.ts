import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export type ForgotType = {
    error: string
}

export const forgotAPI = {
    forgot(email: string){
        return instance.post<ForgotType>('auth/forgot',{
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `
<div style="background-color: lime; padding: 15px">
password recovery link:
<a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
</div>
`
        })
    }
}


