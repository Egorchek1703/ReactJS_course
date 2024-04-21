
// Initial state
let initialState = {
    friendsInSidebar: [
        { id: 1, name: "Лиза", surname: "Кочеткова", avatarSRC: "../../../images/friend_avatar.jpg" },
        { id: 2, name: "Никита", surname: "Дубовой", avatarSRC: "../../../images/friend_avatar.jpg" },
        { id: 3, name: "Юля", surname: "Семёнова", avatarSRC: "../../../images/friend_avatar.jpg" },
        { id: 4, name: "Борис", surname: "Зварыкин", avatarSRC: "../../../images/friend_avatar.jpg" },
        { id: 5, name: "Наталья", surname: "Зварыкина", avatarSRC: "../../../images/friend_avatar.jpg" },
        { id: 6, name: "Иван", surname: "Шульгин", avatarSRC: "../../../images/friend_avatar.jpg" },
    ]
}

const navigationBlockReducer = (state = initialState, action) => {


    // В случае если action не подошёл
    return state
}

export default navigationBlockReducer