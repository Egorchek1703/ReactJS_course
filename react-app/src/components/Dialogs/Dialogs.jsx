import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

let usersForChats = [
    { id: 1, name: "Лиза", age: 23 },
    { id: 2, name: "Юля", age: 46 },
    { id: 3, name: "Андрей", age: 49 },
    { id: 4, name: "Никита", age: 22 },
    { id: 5, name: "Борис", age: 69 },
    { id: 6, name: "Наталья", age: 67 },
]

let messagesData = [
    { id: 1, text: "How are you?" },
    { id: 2, text: "Let's go to learn ReactJS" },
    { id: 3, text: "Are you sure about this?" },
    { id: 4, text: "Not exactly" },
    { id: 5, text: "So let's go to the park" },
]

function Dialogs() {
    return (
        <section className={DialogsStyles["dialogs"]}>
            <ul className={DialogsStyles["chats_list"]}>
                {usersForChats.map((user) => <DialogItem name={user.name} id={user.id} />)}
            </ul>

            <div className="messages_with_user">
                {messagesData.map(messageObject => <Message messageText={messageObject.text} />)}
            </div>
        </section>
    );
}
export default Dialogs