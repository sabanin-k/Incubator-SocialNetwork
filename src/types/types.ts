export type TUser = {
    id: number
    name: string
    status: string
    photos: TPhotos
    followed: boolean
}
export type TUsers = TUser[]

export type TUserProfile = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: TContacts
    photos: TPhotos
}

export type TSetProfileData = {
    aboutMe: string | null
    // userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: TContacts
}

export type TContacts = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type TPhotos = {
    small: string | null
    large: string | null
}