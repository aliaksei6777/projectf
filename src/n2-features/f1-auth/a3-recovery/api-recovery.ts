import {APIResponseType, instance} from "../../../n1-main/m3-dal/api";


export type RecoverType = {
    error: string
    info: string
}

export const recoverAPI = {
    recover(email: string){
        return instance.post<APIResponseType<RecoverType>>('auth/forgot',{
            email,
            from: "test-front-admin <aliaksei6777@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link:
                    <a href='https://aliaksei6777.github.io/projectf/#/set-new-password/$token$'>link</a>
                    </div>`
        })
    },
    reset(password: string, token: string | undefined) {
        return instance.post<APIResponseType<RecoverType>>('auth/set-new-password', {
            password,
            resetPasswordToken: token
        });
    }
}


