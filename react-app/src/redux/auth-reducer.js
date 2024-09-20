const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"
const TOOGLE_LOADING = "TOOGLE-LOADING"


let initialState = {
    userId: null,
    email: null,
    login: null,

    isAuth: false,

    loadingStatus: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                login: action.userData.login,
                email: action.userData.email,
                userId: action.userData.id,
                isAuth: true,
            }

        // Preloader
        case TOOGLE_LOADING:
            return {
                ...state,
                isLoading: action.loadingStatus,
            };

        default:
            return state
    }
}

// Присвоение данных авторизованного пользователя
export const setAuthUserDataActionCreator = (userData) => {
    return {
        type: SET_AUTH_USER_DATA,
        userData: userData,
    }
}
// Preloader
export const changeLoadingStatusActionCreator = (loadingStatus) => {
    return {
        type: TOOGLE_LOADING,
        loadingStatus: loadingStatus,
    }
}

export default authReducer