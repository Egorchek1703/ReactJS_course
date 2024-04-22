import DialogsStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";
import StoreContext from "../../StoreContext";

function Dialogs() {
    return (
        < StoreContext.Consumer >
            {
                (store) => {
                    let localState = store.getState().dialogsPage

                    return (
                        <section className={DialogsStyles["dialogs"]}>
                            <ul className={DialogsStyles["chats_list"]}>
                                {localState.usersForChats.map((user) => <DialogItem name={user.name} surname={user.surname} id={user.id} />)}
                            </ul>

                            <div className={DialogsStyles["messages_with_user"]}>
                                {localState.messagesData.map((messageObject) => <Message messageText={messageObject.text} isMyMessage={messageObject.isMyMessage} />)}
                            </div>

                            <CreateMessageContainer />
                        </section>
                    )
                }
            }
        </StoreContext.Consumer >
    );
}
export default Dialogs