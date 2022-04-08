import { followAPI, userAPI } from "../../api/api";

let initialState = {
    users: [],
    totalCount: 10,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    inProgressFollow: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-FOLLOW':
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return { ...item, followed: true }
                    }
                    return item;
                })
            }
        case 'SET-UNFOLLOW':
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return { ...item, followed: false }
                    }
                    return item;
                })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'TOTAL-PAGES':
            return {
                ...state,
                totalCount: action.count
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.number
            }
        case 'TOGGLE-FETCHING':
            return {
                ...state,
                isFetching: action.bool
            }
        case 'TOGGLE-FOLLOW-BTN-ACTIVITY':
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

const setFollow = (id) => ({ type: 'SET-FOLLOW', id })
const setUnfollow = (id) => ({ type: 'SET-UNFOLLOW', id })
const setUsers = (users) => ({ type: 'SET-USERS', users })
const totalPages = (count) => ({ type: 'TOTAL-PAGES', count })
const setCurrentPage = (number) => ({ type: 'SET-CURRENT-PAGE', number })
const toggleFetching = (bool) => ({ type: 'TOGGLE-FETCHING', bool })
const toggleFollowBtnActivity = (bool, id) => ({ type: 'TOGGLE-FOLLOW-BTN-ACTIVITY', bool, id })



export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(totalPages(data.totalCount))
                dispatch(toggleFetching(false))
            })
    }
}

export const setCurrentPageThunk = (number, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(number))
        userAPI.getCurrentPage(number, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(toggleFetching(false))
            })
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowBtnActivity(true, userId))
        followAPI.setFollow(userId).then(data => {
            data.resultCode === 0 && dispatch(setFollow(userId))
            dispatch(toggleFollowBtnActivity(false, userId))
        })
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowBtnActivity(true, userId))
        followAPI.setUnfollow(userId).then(data => {
            data.resultCode === 0 && dispatch(setUnfollow(userId))
            dispatch(toggleFollowBtnActivity(false, userId))
        })
    }
}

export default usersReducer;