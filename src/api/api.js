import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "api-key": "9243a6f9-d95e-4164-929d-e17b5c42d95f"
    }
})

export const userAPI = {
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
    },
    getCurrentPage(pageNumber, pageSize) {
        return (
            instance.get(`users?page=${pageNumber}&count=${pageSize}`)
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

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    setProfile(profileData) {
        return instance.put(`profile`, profileData).then(response => response.data)
    },
    setStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    setPhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me').then(response => response.data)
    },
    login(values) {
        return instance.post('auth/login', values).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}