import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";
import CreateMessage from "./CreateMessage";

function CreateMessageContainer(props) {
    // State
    let localState = props.store.getState().dialogsPage.newMessageTextFromTextarea

    // Функции взаимодействия с store
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    };

    let updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    };


    return (
        <CreateMessage
            state={localState}
            addMessage={addMessage}
            updateNewMessage={updateNewMessage}
        />
    );
}

export default CreateMessageContainer