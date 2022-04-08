import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import dialogsReducer from "./reducers/dialogsReducer";
import friendsOnlineReducer from "./reducers/friendsOnlineReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import newsReducer from "./reducers/newsReducer";
import UserProfileReducer from "./reducers/userProfileReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";

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