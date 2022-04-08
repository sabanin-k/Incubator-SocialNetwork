import { newsAPI } from "../../api/apiNews";

const initialState = {
    news: [],
    isFetching: true,
    hasContent: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-NEWS':
            return {
                ...state,
                news: action.news
            }
        case 'TOGGLE-FETCHING':
            return {
                ...state,
                isFetching: action.bool
            }
        case 'TOGGLE-IS-CONTENT':
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

export const setNews = (news) => ({ type: 'SET-NEWS', news })
export const toggleFetching = (bool) => ({ type: 'TOGGLE-FETCHING', bool })
export const getContent = (id) => ({ type: 'TOGGLE-IS-CONTENT', id })

export const getNewsThunk = () => {
    return (dispatch) => {
        newsAPI.getNews().then(data => {
            dispatch(setNews(data.articles))
            dispatch(toggleFetching(false))
        })
    }
}

export default newsReducer;