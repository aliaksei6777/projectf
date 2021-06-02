import {instance} from "../../../../n1-main/m3-dal/api";

type registrationPostType = {
    error: string
}

export const registrationApi = {
    async registration(email: string, password: string) {
        return await instance.post<registrationPostType>(`auth/register`, {
            email,
            password
        });

    }
}
