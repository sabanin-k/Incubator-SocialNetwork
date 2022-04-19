import { ThunkAction } from "redux-thunk";
import { TGlobalState } from "../reduxStore";
import { getAuthThunk } from "./authReducer";

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

type TThunkAction = ThunkAction<void, TGlobalState, unknown, TAction>
export const initialApp = (): TThunkAction => (dispatch) => {
    dispatch(getAuthThunk()).then(() => dispatch(initialAppAC()))
}

export default appReducer