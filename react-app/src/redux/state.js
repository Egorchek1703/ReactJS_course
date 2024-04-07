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
    },

    // Данные для Profile -> Ideas
    profilePage: {
        postIdeaData: [
            { id: 1, likesCount: 7, text: "I'm pooping" },
            { id: 1, likesCount: 21, text: "Why don't we create an app" },
            { id: 1, likesCount: 14, text: "How to create a react app?" },
            { id: 1, likesCount: 52, text: "This's terribly difficult" },
        ],
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

export default state