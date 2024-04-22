import React from "react";
import CreateMessageStyles from "./CreateMessage.module.css"

// Данные actionCreator'ы также теперь не нужны в презентационной компоненте
// import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";

function CreateMessage(props) {

    let textarea = React.createRef();

    // Добавление сообщения в state
    let handleAddMessage = () => {
        props.addMessage()
    };

    // Посимвольное обновление сообщения и его отрисовка
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

                // Зависимость от state
                value={props.state.newMessageTextFromTextarea}

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