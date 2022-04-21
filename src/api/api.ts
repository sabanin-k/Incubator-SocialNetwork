import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "api-key": "9243a6f9-d95e-4164-929d-e17b5c42d95f"
    }
})

export type TResponseData<D = {}> = {
    data: D
    resultCode: number
    messages: string[]
}