import { getAuthThunk } from "./authReducer.ts";

const INITIAL_APP = 'app/INITIAL-APP';

type StateType = {initialized: boolean}
type ActionType = {type: string}

const initialState:StateType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionType):StateType => {
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

type InitialAppActionType = {type: typeof INITIAL_APP}

const initialAppAC = ():InitialAppActionType => ({ type: INITIAL_APP })

export const initialApp = () => (dispatch: any) => {
    dispatch(getAuthThunk()).then(() => dispatch(initialAppAC()))
}

export default appReducer;