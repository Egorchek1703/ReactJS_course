// Action types
const SET_USERS = "SET-USERS";
const SET_QUNATITY_OF_USERS = "SET-QUANTITY-OF-USERS";
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const TOOGLE_LOADING = "TOOGLE_LOADING"

// Initial state
const initialState = {
    users: [],
    pageSize: 4,
    quantityOfUsers: 0,
    currentPage: 1,

    // Preloader
    isLoading: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };

        case SET_QUNATITY_OF_USERS:
            return {
                ...state,
                quantityOfUsers: action.quantityOfUsers,
            };

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newCurrentPage,
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    else {
                        return user
                    }
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false,
                        }
                    }
                    else {
                        return user
                    }
                })
            };

        case TOOGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        default: {
            return state;
        }
    }
}

// Action creators
export const setUsersActionCreator = (usersArray) => {
    return {
        type: SET_USERS,
        users: usersArray,
    }
};
export const setQuantityOfUsersActionCreator = (totalUsersCount) => {
    return {
        type: SET_QUNATITY_OF_USERS,
        quantityOfUsers: totalUsersCount,
    }
};
export const changeCurrentPageActionCreator = (newCurrentPage) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        newCurrentPage: newCurrentPage,
    }
}
export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
};
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
};
export const changeLoadingStatusActionCreator = (loadingStatus) => {
    return {
        type: TOOGLE_LOADING,
        isLoading: loadingStatus,
    }
};


export default usersReducer;