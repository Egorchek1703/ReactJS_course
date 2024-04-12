// Action types
let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";


const dialogsReducer = (state, action) => {
    // Messages
    switch (action.type) {
        case ADD_MESSAGE:
            let messageObject = {
                id: state.messagesData.length + 1,
                text: state.newMessageTextFromTextarea,
                isMyMessage: true,
            }

            state.messagesData.push(messageObject);
            state.newMessageTextFromTextarea = "";
            return state

        case UPDATE_NEW_MESSAGE:
            state.newMessageTextFromTextarea = action.textFromNewMessageTextarea;
            return state;

        default:
            // В случае если action не подошёл вернется тот же state который и был, а в случае если проверки (if else) сработали, вернется измененный state.
            return state;
    }


}

// Action creators
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}
export const updateNewMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        textFromNewMessageTextarea: text,
    }
}


export default dialogsReducer