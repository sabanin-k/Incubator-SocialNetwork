import { getAuthThunk } from "./authReducer";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('INITIAL-APP'):
            return ({
                ...state,
                initialized: true
            });
        default:
            return state;
    }
}

const initialAppAC = () => ({ type: 'INITIAL-APP' })

export const initialApp = () => (dispatch) => {
    dispatch(getAuthThunk()).then(() => dispatch(initialAppAC()))
}

export default appReducer;