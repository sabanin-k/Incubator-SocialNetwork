import { ThunkAction } from 'redux-thunk';
import { followAPI, userAPI } from "../../api/api";
import { TUsers } from "../../types/types";
import { TGlobalState } from '../reduxStore';

const TOGGLE_FOLLOW = 'users/TOGGLE-FOLLOW',
    SET_USERS = 'users/SET-USERS',
    TOTAL_PAGES = 'users/TOTAL-PAGES',
    SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE',
    TOGGLE_FETCHING = 'users/TOGGLE-FETCHING',
    TOGGLE_FOLLOW_BTN_ACTIVITY = 'users/TOGGLE-FOLLOW-BTN-ACTIVITY'

const initialState = {
    users: [] as TUsers,
    totalCount: 10,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    inProgressFollow: [] as number[]
}

type TState = typeof initialState
type TAction = TSetFollowAction | TSetUsersAction | TTotalPages | TSetCurrentPageAction | TToggleFetchingAction | TToggleFollowBtnActivity


const usersReducer = (state = initialState, action: TAction): TState => {
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

type TSetFollowAction = { type: typeof TOGGLE_FOLLOW, id: number, bool: boolean}
type TSetUsersAction = {type: typeof SET_USERS, users: TUsers}
type TTotalPages = {type: typeof TOTAL_PAGES, count: number}
type TSetCurrentPageAction = {type: typeof SET_CURRENT_PAGE, number: number}
type TToggleFetchingAction = {type: typeof TOGGLE_FETCHING, bool: boolean}
type TToggleFollowBtnActivity = {type: typeof TOGGLE_FOLLOW_BTN_ACTIVITY, bool: boolean, id: number}

const toggleFollowThunk = (id: number, bool: boolean) :TSetFollowAction => ({ type: TOGGLE_FOLLOW, id, bool })
const setUsers = (users: TUsers) :TSetUsersAction => ({ type: SET_USERS, users })
const totalPages = (count: number) :TTotalPages => ({ type: TOTAL_PAGES, count })
const setCurrentPage = (number: number) :TSetCurrentPageAction => ({ type: SET_CURRENT_PAGE, number })
const toggleFetching = (bool: boolean) :TToggleFetchingAction => ({ type: TOGGLE_FETCHING, bool })
const toggleFollowBtnActivity = (bool :boolean, id :number) :TToggleFollowBtnActivity => ({ type: TOGGLE_FOLLOW_BTN_ACTIVITY, bool, id })

type TGetUsersData = {
    items: TUsers
    totalCount: number
}

type TThunkAction = ThunkAction<void, TGlobalState, unknown, TAction>

export const getUsersThunk = (currentPage: number, pageSize: number): TThunkAction => {
    return (dispatch) => {
        userAPI.getUsers(currentPage, pageSize)
            .then((data: TGetUsersData) => {
                dispatch(setUsers(data.items))
                dispatch(totalPages(data.totalCount))
                dispatch(toggleFetching(false))
            })
    }
}

export const setCurrentPageThunk = (number: number, pageSize: number): TThunkAction => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(number))
        userAPI.getCurrentPage(number, pageSize)
            .then((data :TGetUsersData) => {
                dispatch(setUsers(data.items))
                dispatch(toggleFetching(false))
            })
    }
}

export const followThunk = (userId: number): TThunkAction => {
    return (dispatch) => {
        dispatch(toggleFollowBtnActivity(true, userId))
        followAPI.setFollow(userId).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(toggleFollowThunk(userId, true))
            dispatch(toggleFollowBtnActivity(false, userId))
        })
    }
}

export const unfollowThunk = (userId: number): TThunkAction => {
    return (dispatch) => {
        dispatch(toggleFollowBtnActivity(true, userId))
        followAPI.setUnfollow(userId).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(toggleFollowThunk(userId, false))
            dispatch(toggleFollowBtnActivity(false, userId))
        })
    }
}

export default usersReducer;