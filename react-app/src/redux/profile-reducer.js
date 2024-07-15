const ADD_POST_IDEA = "ADD-POST-IDEA";
const UPDATE_NEW_POST_IDEA = "UPDATE-NEW-POST-IDEA";

const SET_CURRENT_USER_PROFILE = "SET-CURRENT-USER-PROFILE";

const TOOGLE_LOADING = "TOOGLE-LOADING";


let initialState = {
    currentUser: {
        fullName: "",
        aboutMe: "",
        photos: {
            small: "",
            large: "",
        },
    },

    // Общие посты отображаемые на всех профилях
    postIdeaData: [
        { id: 1, likesCount: 7, text: "I'm pooping" },
        { id: 2, likesCount: 21, text: "Why don't we create an app" },
        { id: 3, likesCount: 14, text: "How to create a react app?" },
        { id: 4, likesCount: 52, text: "This's terribly difficult" },
    ],
    newPostIdeaText: "",

    // Preloader
    isLoading: true,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // Функционал добавления постов на стену (общий для всех пользователей)
        case ADD_POST_IDEA:
            let newPostIdeaObject = {
                id: state.postIdeaData.length + 1,
                likesCount: 0,
                text: state.newPostIdeaText,
            }

            return {
                ...state,
                postIdeaData: state.postIdeaData.concat(newPostIdeaObject),
                newPostIdeaText: "",
            };

        case UPDATE_NEW_POST_IDEA:
            return {
                ...state,
                newPostIdeaText: action.textFromNewPostIdeaTextarea,
            };

        // Изменение текущего пользователя отображаемого на странице Profile

        case SET_CURRENT_USER_PROFILE:
            return {
                ...state,

                currentUser: {
                    ...action.newCurrentUser,
                    photos: {
                        ...action.newCurrentUser.photos
                    }
                },

            };

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

// Этот функционал постов будет одинаковый повсюду т.к. пока запрос на получение постов я не делал (возможно в будущем изменю)
export const addIdeaPostActionCreator = () => {
    return {
        type: ADD_POST_IDEA,
    }
}
export const updateNewPostIdeaActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_IDEA,
        textFromNewPostIdeaTextarea: text,
    }
}
// Изменение текущего пользователя отображаемого на странице Profile
export const setCurrentUserProfileActionCreator = (newUser) => {
    return {
        type: SET_CURRENT_USER_PROFILE,
        newCurrentUser: newUser,
    }
}
// Preloader
export const changeLoadingStatusActionCreator = (loadingStatus) => {
    return {
        type: TOOGLE_LOADING,
        loadingStatus: loadingStatus,
    }
}

export default profileReducer