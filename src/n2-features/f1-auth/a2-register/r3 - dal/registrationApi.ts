import axios from "axios";

const instance = axios.create({
    withCredentials: true
})

type registrationPostType = {
    error: string
}

export const registrationApi = {
    async registration(email: string, password: string) {
        return await instance.post<registrationPostType>(`http://localhost:7542/2.0/auth/register`, {
            email,
            password
        });

    }
}