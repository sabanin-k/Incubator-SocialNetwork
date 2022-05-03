import { ThunkAction } from 'redux-thunk';
import { newsAPI } from "../../api/newsAPI";
import { TNews } from '../../api/newsAPI';
import { TThunkAction } from '../../types/types';
import { TGlobalState, TReturnActionType } from '../reduxStore';

const SET_NEWS = 'news/SET-NEWS',
    TOGGLE_FETCHING = 'news/TOGGLE-FETCHING',
    TOGGLE_IS_CONTENT = 'news/TOGGLE-IS-CONTENT',
    SET_NEXT_PAGE = 'news/SET-NEXT-PAGE',
    TOGGLE_SCROLL_FETCHING = 'news/TOGGLE-SCROLL-FETCHING'

const initialState = {
    news: [] as TNews[],
    isFetching: true,
    hasContent: [] as string[],
    nextPage: 1,
    scrollFetching: true
}

const newsReducer = (state = initialState, action: TAction): TState => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.news]
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
        case SET_NEXT_PAGE:
            return {
                ...state,
                nextPage: action.page
            }
        case TOGGLE_SCROLL_FETCHING:
            return {
                ...state,
                scrollFetching: action.bool
            }
        default:
            return state;
    }
}

export const actionCreators = {
    setNews: (news: TNews[]) => ({ type: SET_NEWS, news } as const),
    toggleFetching: (bool: boolean) => ({ type: TOGGLE_FETCHING, bool } as const),
    getContent: (id: string) => ({ type: TOGGLE_IS_CONTENT, id } as const),
    setNextPage: (page: number) => ({ type: SET_NEXT_PAGE, page } as const),
    setScrollFetching: (bool: boolean) => ({ type: TOGGLE_SCROLL_FETCHING, bool } as const)
}

export const getNewsThunk = (page: number): TThunk => async (dispatch) => {
    const data = await newsAPI.getNews(page)
    dispatch(actionCreators.setNews(data.results))
    dispatch(actionCreators.setNextPage(data.nextPage))
    dispatch(actionCreators.setScrollFetching(false))
    dispatch(actionCreators.toggleFetching(false))
}

export const getContent = (id: string): TThunkAction<TAction, void> => (dispatch) => {
    return dispatch(actionCreators.getContent(id))
}

export default newsReducer;

type TState = typeof initialState
type TAction = TReturnActionType<typeof actionCreators>
type TThunk = ThunkAction<Promise<void>, TGlobalState, unknown, TAction>
