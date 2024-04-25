import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux"
import CreateMessage from "./CreateMessage";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage.newMessageTextFromTextarea,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
    }
};

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

export default CreateMessageContainer