import { ThunkAction } from 'redux-thunk';
import { followAPI, userAPI } from "../../api/api";
import { TUsers } from "../../types/types";
import { TGlobalState, TReturnActionType } from '../reduxStore';

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

type TAction = TReturnActionType<typeof actionCreators>

const actionCreators = {
    toggleFollowThunk: (id: number, bool: boolean) => ({ type: TOGGLE_FOLLOW, id, bool } as const),
    setUsers: (users: TUsers) => ({ type: SET_USERS, users } as const),
    totalPages: (count: number) => ({ type: TOTAL_PAGES, count } as const),
    setCurrentPage: (number: number) => ({ type: SET_CURRENT_PAGE, number } as const),
    toggleFetching: (bool: boolean) => ({ type: TOGGLE_FETCHING, bool } as const),
    toggleFollowBtnActivity: (bool :boolean, id :number) => ({ type: TOGGLE_FOLLOW_BTN_ACTIVITY, bool, id } as const)
}

type TGetUsersData = {
    items: TUsers
    totalCount: number
}

type TThunkAction = ThunkAction<void, TGlobalState, unknown, TAction>

export const getUsersThunk = (currentPage: number, pageSize: number): TThunkAction => {
    return (dispatch) => {
        userAPI.getUsers(currentPage, pageSize)
            .then((data: TGetUsersData) => {
                dispatch(actionCreators.setUsers(data.items))
                dispatch(actionCreators.totalPages(data.totalCount))
                dispatch(actionCreators.toggleFetching(false))
            })
    }
}

export const setCurrentPageThunk = (number: number, pageSize: number): TThunkAction => {
    return (dispatch) => {
        dispatch(actionCreators.toggleFetching(true))
        dispatch(actionCreators.setCurrentPage(number))
        userAPI.getCurrentPage(number, pageSize)
            .then((data :TGetUsersData) => {
                dispatch(actionCreators.setUsers(data.items))
                dispatch(actionCreators.toggleFetching(false))
            })
    }
}

export const followThunk = (userId: number): TThunkAction => {
    return (dispatch) => {
        dispatch(actionCreators.toggleFollowBtnActivity(true, userId))
        followAPI.setFollow(userId).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(actionCreators.toggleFollowThunk(userId, true))
            dispatch(actionCreators.toggleFollowBtnActivity(false, userId))
        })
    }
}

export const unfollowThunk = (userId: number): TThunkAction => {
    return (dispatch) => {
        dispatch(actionCreators.toggleFollowBtnActivity(true, userId))
        followAPI.setUnfollow(userId).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(actionCreators.toggleFollowThunk(userId, false))
            dispatch(actionCreators.toggleFollowBtnActivity(false, userId))
        })
    }
}

export default usersReducer;