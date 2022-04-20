import { TSetProfileData, TUserProfile } from "../types/types"
import { instance } from "./api"

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<TUserProfile>(`profile/${userId}`).then(response => response.data)
    },
    setProfile(profileData: TSetProfileData) {
        return instance.put(`profile`, profileData).then(response => response.data)
    },
    setStatus(status: string) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
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

// setProfile put:
    // resultCode: required(number)
    // messages: required(array of string)
    // data: required(object)

// setStatus put:
    // resultCode: required(number)
    // messages: required(array of string)
    // data: required(object)

// setPhoto get:
    // resultCode: required(number)
    // messages: required(array of string)
    // data: required(object)
