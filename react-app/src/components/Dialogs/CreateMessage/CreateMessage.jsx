import React from "react";
import CreateMessageStyles from "./CreateMessage.module.css"
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/state";

function CreateMessage(props) {

    let textarea = React.createRef();

    // Добавление сообщения в state
    let handleAddMessage = () => {
        props.dispatch(addMessageActionCreator())
    };

    // Посимвольное обновление сообщения и его отрисовка
    let handleUpdateNewMessage = () => {
        props.dispatch(updateNewMessageActionCreator(textarea.current.value));
    };


    return (
        <form className={CreateMessageStyles["create_message_form"]} action="/">
            <textarea
                className={CreateMessageStyles["write_message_textarea"]}
                placeholder="Введите сообщение"
                ref={textarea}

                value={props.newMessageTextFromTextarea}
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