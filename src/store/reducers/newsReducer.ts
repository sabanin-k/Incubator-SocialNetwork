import { ThunkAction } from 'redux-thunk';
import { newsAPI } from "../../api/apiNews";
import { TGlobalState, TReturnActionType } from '../reduxStore';

const SET_NEWS = 'news/SET-NEWS',
    TOGGLE_FETCHING = 'news/TOGGLE-FETCHING',
    TOGGLE_IS_CONTENT = 'news/TOGGLE-IS-CONTENT'

const initialState = {
    news: [] as object[],
    isFetching: true,
    hasContent: [] as string[]
}

const newsReducer = (state = initialState, action: TAction): TState => {
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

const actionCreators = {
    setNews: (news: object[]) => ({ type: SET_NEWS, news } as const),
    toggleFetching: (bool: boolean) => ({ type: TOGGLE_FETCHING, bool } as const),
    getContent: (id: string) => ({ type: TOGGLE_IS_CONTENT, id } as const)
}

export const getNewsThunk = (): TThunk => async (dispatch) => {
    const data = await newsAPI.getNews()
    dispatch(actionCreators.setNews(data.articles))
    dispatch(actionCreators.toggleFetching(false))
}

export const getContent = (id: string): TThunk => (dispatch) => {
    return dispatch(actionCreators.getContent(id))
}

export default newsReducer;

type TState = typeof initialState
type TAction = TReturnActionType<typeof actionCreators>
type TThunk = ThunkAction<void, TGlobalState, unknown, TAction>
