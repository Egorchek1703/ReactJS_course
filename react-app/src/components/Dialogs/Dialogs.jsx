import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";

function Dialogs(props) {
    return (
        <section className={DialogsStyles["dialogs"]}>
            <ul className={DialogsStyles["chats_list"]}>
                {props.dialogsPage.usersForChats.map((user) => <DialogItem name={user.name} surname={user.surname} id={user.id} />)}
            </ul>

            <div className={DialogsStyles["messages_with_user"]}>
                {props.dialogsPage.messagesData.map((messageObject) => <Message messageText={messageObject.text} isMyMessage={messageObject.isMyMessage} />)}
            </div>

            <CreateMessageContainer />
        </section>
    );
}
export default Dialogs