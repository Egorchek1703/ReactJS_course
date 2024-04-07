import React from "react";
import CreateMessageStyles from "./CreateMessage.module.css"

function CreateMessage() {

    let textFromWriteMessageTextarea = React.createRef();

    let sendMessage = () => {
        console.log(textFromWriteMessageTextarea.current.value)
    };

    return (
        <form className={CreateMessageStyles["create_message_form"]} action="/">
            <textarea
                className={CreateMessageStyles["write_message_textarea"]}
                placeholder="Введите сообщение"
                ref={textFromWriteMessageTextarea}
            >

            </textarea>

            <button
                className={CreateMessageStyles["send_message_btn"]}
                type="button"
                onClick={sendMessage}
            >
                Send
            </button>
        </form>
    );
}
export default CreateMessage