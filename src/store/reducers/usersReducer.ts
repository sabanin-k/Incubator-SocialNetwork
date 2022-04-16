import { followAPI, userAPI } from "../../api/api";

const TOGGLE_FOLLOW = 'users/TOGGLE-FOLLOW',
    SET_USERS = 'users/SET-USERS',
    TOTAL_PAGES = 'users/TOTAL-PAGES',
    SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE',
    TOGGLE_FETCHING = 'users/TOGGLE-FETCHING',
    TOGGLE_FOLLOW_BTN_ACTIVITY = 'users/TOGGLE-FOLLOW-BTN-ACTIVITY'

const initialState = {
    users: [] as UsersType,
    totalCount: 10 as number,
    pageSize: 10 as number,
    currentPage: 1 as number,
    isFetching: true,
    inProgressFollow: []
}

type StateType = typeof initialState
type ActionType = {
    type: string
    id: number
    users: UsersType
    count: number
    number: number
    bool: boolean
}
type UsersType = Array<{
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
}>

const usersReducer = (state = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return { ...item, followed: action.bool }
                    }
                    return item;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case TOTAL_PAGES:
            return {
                ...state,
                totalCount: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.number
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        case TOGGLE_FOLLOW_BTN_ACTIVITY:
            return {
                ...state,
                inProgressFollow: action.bool
                    ? [...state.inProgressFollow, action.id]
                    : state.inProgressFollow.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

type SetFollowActionType = { type: typeof TOGGLE_FOLLOW, id: number, bool: boolean}
type SetUsersActionType = {type: typeof SET_USERS, users: UsersType}
type TotalPages = {type: typeof TOTAL_PAGES, count: number}
type SetCurrentPageActionType = {type: typeof SET_CURRENT_PAGE, number: number}
type ToggleFetchingActionType = {type: typeof TOGGLE_FETCHING, bool: boolean}
type ToggleFollowBtnActivity = {type: typeof TOGGLE_FOLLOW_BTN_ACTIVITY, bool: boolean, id: number}

const toggleFollowThunk = (id: number, bool: boolean) :SetFollowActionType => ({ type: TOGGLE_FOLLOW, id, bool })
const setUsers = (users: UsersType) :SetUsersActionType => ({ type: SET_USERS, users })
const totalPages = (count: number) :TotalPages => ({ type: TOTAL_PAGES, count })
const setCurrentPage = (number: number) :SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, number })
const toggleFetching = (bool: boolean) :ToggleFetchingActionType => ({ type: TOGGLE_FETCHING, bool })
const toggleFollowBtnActivity = (bool :boolean, id :number) :ToggleFollowBtnActivity => ({ type: TOGGLE_FOLLOW_BTN_ACTIVITY, bool, id })

type GetUsersDataType = {
    items: UsersType
    totalCount: number
}
export const getUsersThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        userAPI.getUsers(currentPage, pageSize)
            .then((data: GetUsersDataType) => {
                dispatch(setUsers(data.items))
                dispatch(totalPages(data.totalCount))
                dispatch(toggleFetching(false))
            })
    }
}

export const setCurrentPageThunk = (number: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(number))
        userAPI.getCurrentPage(number, pageSize)
            .then((data :GetUsersDataType) => {
                dispatch(setUsers(data.items))
                dispatch(toggleFetching(false))
            })
    }
}

export const followThunk = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowBtnActivity(true, userId))
        followAPI.setFollow(userId).then(data => {
            data.resultCode === 0 && dispatch(toggleFollowThunk(userId, true))
            dispatch(toggleFollowBtnActivity(false, userId))
        })
    }
}

export const unfollowThunk = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowBtnActivity(true, userId))
        followAPI.setUnfollow(userId).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(toggleFollowThunk(userId, false))
            dispatch(toggleFollowBtnActivity(false, userId))
        })
    }
}

export default usersReducer;