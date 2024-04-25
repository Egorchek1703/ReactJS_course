import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileRecuder from "./redux/profile-reducer";
import dialogsReducer from "./redux/dialogs-reducer";
import navigationBlockReducer from "./redux/navigation-block-reducer"


let reducers = combineReducers({
    profilePage: profileRecuder,
    dialogsPage: dialogsReducer,
    navigationBlock: navigationBlockReducer,
})

let store = configureStore({
    reducer: reducers,
})


export default store