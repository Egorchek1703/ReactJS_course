// Action types
const ADD_POST_IDEA = "ADD-POST-IDEA";
const UPDATE_NEW_POST_IDEA = "UPDATE-NEW-POST-IDEA";

// Initial state
let initialState = {
    postIdeaData: [
        { id: 1, likesCount: 7, text: "I'm pooping" },
        { id: 2, likesCount: 21, text: "Why don't we create an app" },
        { id: 3, likesCount: 14, text: "How to create a react app?" },
        { id: 4, likesCount: 52, text: "This's terribly difficult" },
    ],
    newPostIdeaText: "",
}

// Reducer
const profileRecuder = (state = initialState, action) => {
    // Posts
    switch (action.type) {
        case ADD_POST_IDEA:
            let newPostIdea = {
                id: state.postIdeaData.length + 1,
                likesCount: 0,
                text: state.newPostIdeaText,
            }

            state.postIdeaData.push(newPostIdea)
            return state

        case UPDATE_NEW_POST_IDEA:
            state.newPostIdeaText = action.textFromNewPostIdeaTextarea
            return state

        default:
            return state
    }
}

// Action creators
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


export default profileRecuder