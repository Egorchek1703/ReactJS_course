import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";

function Dialogs(props) {
    return (
        <section className={DialogsStyles["dialogs"]}>
            <ul className={DialogsStyles["chats_list"]}>
                {props.dialogsPage.usersForChats.map((user) => {
                    return <DialogItem name={user.name} surname={user.surname} id={user.id} key={user.id} />
                })}
            </ul>

            <div className={DialogsStyles["messages_with_user"]}>
                {props.dialogsPage.messagesData.map((messageObject) => {
                    return <Message messageText={messageObject.text} isMyMessage={messageObject.isMyMessage} key={messageObject.id} />
                })}
            </div>

            <CreateMessageContainer />
        </section>
    );
}
export default Dialogs