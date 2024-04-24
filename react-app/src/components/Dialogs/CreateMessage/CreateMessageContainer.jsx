import { addMessageActionCreator, updateNewMessageActionCreator } from "../../../redux/dialogs-reducer";
import { connect } from "react-redux"
import CreateMessage from "./CreateMessage";

// import StoreContext from "../../../StoreContext";

// function CreateMessageContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let localState = store.getState().dialogsPage.newMessageTextFromTextarea

//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                     };
//                     let updateNewMessage = (text) => {
//                         store.dispatch(updateNewMessageActionCreator(text));
//                     };

//                     return (
//                         <CreateMessage
//                             state={localState}
//                             addMessage={addMessage}
//                             updateNewMessage={updateNewMessage}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

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
        updateNewMessageActionCreator: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
    }
};

const CreateMessageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateMessage);

export default CreateMessageContainer