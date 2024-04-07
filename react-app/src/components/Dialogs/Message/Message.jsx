import MessageStyles from "./Message.module.css";
import UserAvatarInMessage from "../../../images/user_avatar.jpeg"

function Message(props) {
    return (
        <div className={props.isMyMessage ? MessageStyles["my_message"] : MessageStyles["message_card"]}>
            <div className={MessageStyles["user_description_card"]}>
                <img className={MessageStyles["user_avatar"]} src={UserAvatarInMessage} alt="User avatar" />
                <p className={MessageStyles["user_name"]}>Лиза</p>
            </div>

            <p className={MessageStyles["text_of_message"]}>{props.messageText}</p>
        </div>
    )
}

export default Message