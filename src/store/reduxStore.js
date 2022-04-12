import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import dialogsReducer from "./reducers/dialogsReducer";
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import newsReducer from "./reducers/newsReducer";
import UserProfileReducer from "./reducers/userProfileReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSection: friendsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    userProfilePage: UserProfileReducer,
    auth: authReducer,
    app: appReducer
})

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhacer(applyMiddleware(thunk)));

window.store = store;

export default store;