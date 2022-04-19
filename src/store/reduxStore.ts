import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import dialogsReducer from "./reducers/dialogsReducer";
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import newsReducer from "./reducers/newsReducer";
import userProfileReducer from "./reducers/userProfileReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSection: friendsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    userProfilePage: userProfileReducer,
    auth: authReducer,
    app: appReducer
})

export type TGlobalState = ReturnType<typeof reducers>

type TInferValue<T> = T extends { [key: string]: infer U } ? U : never // определяем тип передоваемого объекта
export type TReturnActionType< T extends { [key: string]: (...args: any[]) => any }> = ReturnType<TInferValue<T> >
// создаем тип для любого экшона, чтобы не писать каждый раз ReturnType<>

//@ts-ignore
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store: TGlobalState = createStore(reducers, composeEnhacer(applyMiddleware(thunk)));
//@ts-ignore
window.store = store;

export default store;