// Store
let store = {
    // Private properties
    _state: {
        dialogsPage: {
            usersForChats: [
                { id: 1, name: "Лиза", surname: "Кочеткова", age: 23 },
                { id: 2, name: "Юля", surname: "Семёнова", age: 46 },
                { id: 3, name: "Андрей", surname: "Семёнов", age: 49 },
                { id: 4, name: "Никита", surname: "Дубовой", age: 22 },
                { id: 5, name: "Борис", surname: "Зварыкин", age: 69 },
                { id: 6, name: "Наталья", surname: "Зварыкина", age: 67 },
            ],
            messagesData: [
                { id: 1, text: "How are you?", isMyMessage: false },
                { id: 2, text: "Let's go to learn ReactJS", isMyMessage: false },
                { id: 3, text: "Are you sure about this?", isMyMessage: true },
                { id: 4, text: "Not exactly", isMyMessage: false },
                { id: 5, text: "So let's go to the park", isMyMessage: true },
                { id: 6, text: "I don't feel like to go to the park today", isMyMessage: false },
                { id: 7, text: "Is anything OK?", isMyMessage: true },
            ],
            newMessageTextFromTextarea: "",
        },

        profilePage: {
            postIdeaData: [
                { id: 1, likesCount: 7, text: "I'm pooping" },
                { id: 2, likesCount: 21, text: "Why don't we create an app" },
                { id: 3, likesCount: 14, text: "How to create a react app?" },
                { id: 4, likesCount: 52, text: "This's terribly difficult" },
            ],
            newPostIdeaText: "",
        },

        navigationBlock: {
            friendsInSidebar: [
                { id: 1, name: "Лиза", surname: "Кочеткова", avatarSRC: "../../../images/friend_avatar.jpg" },
                { id: 2, name: "Никита", surname: "Дубовой", avatarSRC: "../../../images/friend_avatar.jpg" },
                { id: 3, name: "Юля", surname: "Семёнова", avatarSRC: "../../../images/friend_avatar.jpg" },
                { id: 4, name: "Борис", surname: "Зварыкин", avatarSRC: "../../../images/friend_avatar.jpg" },
                { id: 5, name: "Наталья", surname: "Зварыкина", avatarSRC: "../../../images/friend_avatar.jpg" },
                { id: 6, name: "Иван", surname: "Шульгин", avatarSRC: "../../../images/friend_avatar.jpg" },
            ]
        },
    },
    _callSubscriber() {
        console.log("Это заглушка");
    },

    // Methods of work with store
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // Dispatch
    dispatch(action) {
        // Posts
        if (action.type === ADD_POST_IDEA) {
            let newPostIdea = {
                id: this._state.profilePage.postIdeaData.length + 1,
                likesCount: 0,
                text: this._state.profilePage.newPostIdeaText,
            }

            this._state.profilePage.postIdeaData.push(newPostIdea)
            this._callSubscriber(this)
        }
        else if (action.type === UPDATE_NEW_POST_IDEA) {
            this._state.profilePage.newPostIdeaText = action.textFromNewPostIdeaTextarea
            this._callSubscriber(this)
        }
        // Messages
        else if (action.type === ADD_MESSAGE) {
            let messageObject = {
                id: this._state.dialogsPage.messagesData.length + 1,
                text: this._state.dialogsPage.newMessageTextFromTextarea,
                isMyMessage: true,
            }

            this._state.dialogsPage.messagesData.push(messageObject);
            this._state.dialogsPage.newMessageTextFromTextarea = "";
            this._callSubscriber(this)
        }
        else if (action.type === "UPDATE-NEW-MESSAGE") {
            this._state.dialogsPage.newMessageTextFromTextarea = action.textFromNewMessageTextarea
            this._callSubscriber(this)
        }
    },
}

// Action types
let ADD_POST_IDEA = "ADD-POST-IDEA";
let UPDATE_NEW_POST_IDEA = "UPDATE-NEW-POST-IDEA";
let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";


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

window.store = store

export default store