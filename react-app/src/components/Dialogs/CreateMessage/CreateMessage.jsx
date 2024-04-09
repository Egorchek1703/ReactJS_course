import React from "react";
import CreateMessageStyles from "./CreateMessage.module.css"

function CreateMessage(props) {

    let textFromWriteMessageTextarea = React.createRef();

    // Добавление сообщения в state
    let handleAddMessage = () => {
        props.addMessage()
    };

    // Посимвольное обновление сообщения и его отрисовка
    let handleUpdateWrittingMessage = () => {
        props.updateNewMessage(textFromWriteMessageTextarea.current.value)
    };


    return (
        <form className={CreateMessageStyles["create_message_form"]} action="/">
            <textarea
                className={CreateMessageStyles["write_message_textarea"]}
                placeholder="Введите сообщение"
                ref={textFromWriteMessageTextarea}

                value={props.newMessageTextFromTextarea}
                onChange={handleUpdateWrittingMessage}
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