// Action types
const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

// Initial state
const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: state.users.concat(action.users),
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


export default usersReducer;