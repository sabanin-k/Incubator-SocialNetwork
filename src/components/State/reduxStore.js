import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import dialogsReducer from "./dialogsReducer";
import friendsOnlineReducer from "./friendsOnlineReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import newsReducer from "./newsReducer";
import UserProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsSection: friendsOnlineReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    userProfilePage: UserProfileReducer,
    auth: authReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;