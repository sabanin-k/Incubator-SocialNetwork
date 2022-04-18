import { ThunkAction } from 'redux-thunk';
import { newsAPI } from "../../api/apiNews";
import { TGlobalState } from '../reduxStore';

const SET_NEWS = 'news/SET-NEWS',
    TOGGLE_FETCHING = 'news/TOGGLE-FETCHING',
    TOGGLE_IS_CONTENT = 'news/TOGGLE-IS-CONTENT'

const initialState = {
    news: [] as object[],
    isFetching: true,
    hasContent: [] as number[]
}

type TState = typeof initialState
type TAction = TSetNewsAction | TToggleFetchingAction | TGetContentAction

const newsReducer = (state = initialState, action:TAction) :TState => {
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

type TSetNewsAction = {type: typeof SET_NEWS, news: object[]}
type TToggleFetchingAction = {type: typeof TOGGLE_FETCHING, bool: boolean}
type TGetContentAction = {type: typeof TOGGLE_IS_CONTENT, id: number}

export const setNews = (news:object[]):TSetNewsAction => ({ type: SET_NEWS, news })
export const toggleFetching = (bool: boolean):TToggleFetchingAction => ({ type: TOGGLE_FETCHING, bool })
export const getContent = (id: number):TGetContentAction => ({ type: TOGGLE_IS_CONTENT, id })

export const getNewsThunk = (): ThunkAction<void, TGlobalState, unknown, TAction> => {
    return (dispatch) => {
        newsAPI.getNews().then((data: {articles: object[]}) => {
            dispatch(setNews(data.articles))
            dispatch(toggleFetching(false))
        })
    }
}

export default newsReducer;