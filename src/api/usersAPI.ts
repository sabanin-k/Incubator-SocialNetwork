import { instance, TResponseData } from "./api"

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get<TResponseUsers>(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async getFriends() {
        const response = await instance.get<TResponseUsers>(`users?count=100&friend=true`)
        return response.data
    }
}

export const followAPI = {
    async setFollow(id: number) {
        const response = await instance.post<TResponseData>(`follow/${id}`)
        return response.data
    },
    async setUnfollow(id: number) {
        const response = await instance.delete<TResponseData>(`follow/${id}`)
        return response.data
    }
}

type TResponseUsers = {
    items: TUser[]
    totalCount: number
    error: string
}
type TUser = {
    id: number
    name: string
    status: string
    photos:{
        small: string
        large: string
    }
    followed: boolean
}