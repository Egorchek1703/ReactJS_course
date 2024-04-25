const ADD_POST_IDEA = "ADD-POST-IDEA";
const UPDATE_NEW_POST_IDEA = "UPDATE-NEW-POST-IDEA";

let initialState = {
    postIdeaData: [
        { id: 1, likesCount: 7, text: "I'm pooping" },
        { id: 2, likesCount: 21, text: "Why don't we create an app" },
        { id: 3, likesCount: 14, text: "How to create a react app?" },
        { id: 4, likesCount: 52, text: "This's terribly difficult" },
    ],
    newPostIdeaText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
            }

        case UPDATE_NEW_POST_IDEA:
            return {
                ...state,
                newPostIdeaText: action.textFromNewPostIdeaTextarea,
            }

        default:
            return state
    }
}

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


export default profileReducer