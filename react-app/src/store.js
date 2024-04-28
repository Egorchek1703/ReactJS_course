import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileRecuder from "./redux/profile-reducer";
import dialogsReducer from "./redux/dialogs-reducer";
import navigationBlockReducer from "./redux/navigation-block-reducer"
import usersReducer from "./redux/users-reducer";


let reducers = combineReducers({
    profilePage: profileRecuder,
    dialogsPage: dialogsReducer,
    navigationBlock: navigationBlockReducer,
    usersPage: usersReducer,
})

let store = configureStore({
    reducer: reducers,
})


export default store