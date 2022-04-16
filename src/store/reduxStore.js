import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import dialogsReducer from "./reducers/dialogsReducer.ts";
import friendsReducer from "./reducers/friendsReducer.ts";
import profileReducer from "./reducers/profileReducer.ts";
import usersReducer from "./reducers/usersReducer.ts";
import newsReducer from "./reducers/newsReducer.ts";
import userProfileReducer from "./reducers/userProfileReducer.ts";
import authReducer from "./reducers/authReducer.ts";
import appReducer from "./reducers/appReducer.ts";

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

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhacer(applyMiddleware(thunk)));

window.store = store;

export default store;