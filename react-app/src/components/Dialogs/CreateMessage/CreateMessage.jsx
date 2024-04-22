import React from "react";
import CreateMessageStyles from "./CreateMessage.module.css"

function CreateMessage(props) {

    let textarea = React.createRef();

    let handleAddMessage = () => {
        if (textarea.current.value !== "") {
            props.addMessage()
        }
    };

    let handleUpdateNewMessage = () => {
        let textFromCreateMessageTextarea = textarea.current.value
        props.updateNewMessage(textFromCreateMessageTextarea)
    };


    return (
        <form className={CreateMessageStyles["create_message_form"]} action="/">
            <textarea
                className={CreateMessageStyles["write_message_textarea"]}
                placeholder="Введите сообщение"
                ref={textarea}
                value={props.state}
                onChange={handleUpdateNewMessage}
            >

            </textarea>

            <button
                className={CreateMessageStyles["send_message_btn"]}
                type="button"
                onClick={handleAddMessage}
            >
                Send
            </button>
        </form>
    );
}

export default CreateMessage