import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import CreateMessage from "./CreateMessage/CreateMessage";

function Dialogs(props) {
    return (
        <section className={DialogsStyles["dialogs"]}>
            <ul className={DialogsStyles["chats_list"]}>
                {props.state.usersForChats.map((user) => <DialogItem name={user.name} surname={user.surname} id={user.id} />)}
            </ul>

            <div className={DialogsStyles["messages_with_user"]}>
                {props.state.messagesData.map((messageObject) => <Message messageText={messageObject.text} isMyMessage={messageObject.isMyMessage} />)}
            </div>

            <CreateMessage
                newMessageTextFromTextarea={props.state.newMessageTextFromTextarea}
                updateNewMessage={props.updateNewMessage}
                addMessage={props.addMessage}
            />
        </section>
    );
}
export default Dialogs