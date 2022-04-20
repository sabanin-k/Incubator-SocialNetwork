import { instance } from "./api"

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },
    getFriends() {
        return (
            instance.get(`users?count=100&friend=true`)
                .then(response => response.data)
        )
    }
}

export const followAPI = {
    setFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    setUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
