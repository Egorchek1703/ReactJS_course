import StoreContext from "../../../StoreContext";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";
import CreateMessage from "./CreateMessage";

function CreateMessageContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let localState = store.getState().dialogsPage.newMessageTextFromTextarea

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    };
                    let updateNewMessage = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text));
                    };

                    return (
                        <CreateMessage
                            state={localState}
                            addMessage={addMessage}
                            updateNewMessage={updateNewMessage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default CreateMessageContainer