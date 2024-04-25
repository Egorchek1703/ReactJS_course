let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    // Создание общей переменной для копии объекта state
    // Менее удобный вариант (для меня)
    // let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE:
            let messageObject = {
                id: state.messagesData.length + 1,
                text: state.newMessageTextFromTextarea,
                isMyMessage: true,
            }

            // Глубокое копирование тех частей которые будут изменены
            // Менее удобный вариант (для меня)
            // stateCopy = {
            //     ...state,
            //     messagesData: state.messagesData.concat(messageObject),
            //     newMessageTextFromTextarea: "",
            // }
            // return stateCopy;

            return {
                ...state,
                messagesData: state.messagesData.concat(messageObject),
                newMessageTextFromTextarea: "",
            };

        case UPDATE_NEW_MESSAGE:

            // Глубокое копирование тех частей которые будут изменены
            // Менее удобный вариант (для меня)
            // stateCopy = {
            //     ...state,
            //     newMessageTextFromTextarea: action.textFromNewMessageTextarea,
            // }
            // return stateCopy;

            return {
                ...state,
                newMessageTextFromTextarea: action.textFromNewMessageTextarea,
            };

        default:
            return state;
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


export default dialogsReducer