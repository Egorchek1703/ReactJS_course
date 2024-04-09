import { renderEntireTree } from "../render"

let state = {
    // Данные для Dialogs
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

    // Данные для Profile -> Ideas
    profilePage: {
        postIdeaData: [
            { id: 1, likesCount: 7, text: "I'm pooping" },
            { id: 2, likesCount: 21, text: "Why don't we create an app" },
            { id: 3, likesCount: 14, text: "How to create a react app?" },
            { id: 4, likesCount: 52, text: "This's terribly difficult" },
        ],
        newPostIdeaText: "",
    },

    // Данные для Navigation -> FriendsInSidebar
    navigationBlock: {
        friendsInSidebar: [
            { id: 1, name: "Лиза", surname: "Кочеткова", avatarSRC: "../../../images/friend_avatar.jpg" },
            { id: 2, name: "Никита", surname: "Дубовой", avatarSRC: "../../../images/friend_avatar.jpg" },
            { id: 3, name: "Юля", surname: "Семёнова", avatarSRC: "../../../images/friend_avatar.jpg" },
            { id: 4, name: "Борис", surname: "Зварыкин", avatarSRC: "../../../images/friend_avatar.jpg" },
            { id: 5, name: "Наталья", surname: "Зварыкина", avatarSRC: "../../../images/friend_avatar.jpg" },
            { id: 6, name: "Лиза", surname: "Кочеткова", avatarSRC: "../../../images/friend_avatar.jpg" },
        ]
    },
}

// Posts
export let addPostIdea = () => {
    // Создаем новый объект сообщения
    let newPostIdea = {
        id: state.profilePage.postIdeaData.length + 1,
        likesCount: 0,
        text: state.profilePage.newPostIdeaText,
    }

    // Добавляем его в массив данных
    state.profilePage.postIdeaData.push(newPostIdea)

    // Перерисовываем приложение опираясь на обновленные данные
    renderEntireTree(state, addPostIdea, updateNewPostIdea, addMessage, updateNewMessage)
}

export let updateNewPostIdea = (textOfNewPostIdea) => {
    // Меняем соответствующее значение state
    state.profilePage.newPostIdeaText = textOfNewPostIdea

    // Перерисовываем приложение опираясь на обновленные данные
    renderEntireTree(state, addPostIdea, updateNewPostIdea, addMessage, updateNewMessage)
}

// Messages
export let addMessage = () => {
    // Создаем объект сообщения
    let messageObject = {
        id: state.dialogsPage.messagesData.length + 1,
        text: state.dialogsPage.newMessageTextFromTextarea,
        isMyMessage: true,
    }

    // Добавяем в массив сообщений сообщение опираясь на текущее состояние textarea
    state.dialogsPage.messagesData.push(messageObject);

    // Обнуляем содержимое textarea
    state.dialogsPage.newMessageTextFromTextarea = "";

    // Перерисовываем приложение, учитывая добавленное сообщение
    renderEntireTree(state, addPostIdea, updateNewPostIdea, addMessage, updateNewMessage)
}

export let updateNewMessage = (textOfNewMessageTextarea) => {
    // Обновляем текущий текст в textarea
    state.dialogsPage.newMessageTextFromTextarea = textOfNewMessageTextarea

    // Ререндерим страницу, исходя из обновленных данных (отображаем изменения состояния textarea в UI)
    renderEntireTree(state, addPostIdea, updateNewPostIdea, addMessage, updateNewMessage)
}

export default state