import { Dispatch } from "redux";
import { getAuthThunk } from "./authReducer.ts";

const INITIAL_APP = 'app/INITIAL-APP';

type TState = typeof initialState
type TAction = TInitialAppAction

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: TAction):TState => {
    switch (action.type) {
        case (INITIAL_APP):
            return ({
                ...state,
                initialized: true
            });
        default:
            return state;
    }
}

type TInitialAppAction = {type: typeof INITIAL_APP}

const initialAppAC = ():TInitialAppAction => ({ type: INITIAL_APP })

export const initialApp = () => (dispatch: Dispatch) => {
    dispatch(getAuthThunk()).then(() => dispatch(initialAppAC()))
}

export default appReducer