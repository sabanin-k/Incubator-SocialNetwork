import { newsAPI } from "../../api/apiNews";

const SET_NEWS = 'news/SET-NEWS',
    TOGGLE_FETCHING = 'news/TOGGLE-FETCHING',
    TOGGLE_IS_CONTENT = 'news/TOGGLE-IS-CONTENT'

const initialState = {
    news: [] as object[],
    isFetching: true,
    hasContent: [] as number[]
}

type StateType = typeof initialState
type ActionType = {
    type: string
    news: object[]
    bool: boolean
    id: number
}

const newsReducer = (state = initialState, action:ActionType) :StateType => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        case TOGGLE_IS_CONTENT:
            return {
                ...state,
                hasContent: !state.hasContent.includes(action.id)
                ? [...state.hasContent, action.id]
                : state.hasContent.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

type setNewsActionType = {type: typeof SET_NEWS, news: object[]}
type toggleFetchingActionType = {type: typeof TOGGLE_FETCHING, bool: boolean}
type getContentActionType = {type: typeof TOGGLE_IS_CONTENT, id: number}

export const setNews = (news:object[]):setNewsActionType => ({ type: SET_NEWS, news })
export const toggleFetching = (bool: boolean):toggleFetchingActionType => ({ type: TOGGLE_FETCHING, bool })
export const getContent = (id: number):getContentActionType => ({ type: TOGGLE_IS_CONTENT, id })

export const getNewsThunk = () => {
    return (dispatch: any) => {
        newsAPI.getNews().then((data: {articles: object[]}) => {
            dispatch(setNews(data.articles))
            dispatch(toggleFetching(false))
        })
    }
}

export default newsReducer;