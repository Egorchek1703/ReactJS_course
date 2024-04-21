import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileRecuder from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationBlockReducer from "./navigation-block-reducer"

let reducers = combineReducers({
    profilePage: profileRecuder,
    dialogsPage: dialogsReducer,
    navigationBlock: navigationBlockReducer,
})

let store = configureStore({
    reducer: reducers,
})



export default store