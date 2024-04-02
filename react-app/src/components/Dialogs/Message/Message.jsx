import MessageStyles from "./Message.module.css"

function Message(props) {
    return (
        <div className={MessageStyles["message"]}>
            <img className={MessageStyles["avatar_of_user"]} src="" alt="User avatar" />
            <p className={MessageStyles["text_of_message"]}>{props.messageText}</p>
        </div>
    )
}

export default Message