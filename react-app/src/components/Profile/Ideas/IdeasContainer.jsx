// import React from "react";
import { addIdeaPostActionCreator, updateNewPostIdeaActionCreator } from "../../../redux/profile-reducer";
import Ideas from "./Ideas";
import { connect } from "react-redux";

// import StoreContext from "../../../StoreContext"

// function IdeasContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let localState = store.getState().profilePage

//                     let addPostIdea = () => {
//                         store.dispatch(addIdeaPostActionCreator());
//                         store.dispatch(updateNewPostIdeaActionCreator(""));
//                     }
//                     let updateNewPostIdea = (textFromCreatePostTextarea) => {
//                         store.dispatch(updateNewPostIdeaActionCreator(textFromCreatePostTextarea));
//                     }

//                     return (
//                         <Ideas
//                             addPostIdea={addPostIdea}
//                             updateNewPostIdea={updateNewPostIdea}
//                             state={localState}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostIdea: () => {
            dispatch(addIdeaPostActionCreator());
            dispatch(updateNewPostIdeaActionCreator(""));
        },
        updateNewPostIdea: (text) => {
            dispatch(updateNewPostIdeaActionCreator(text))
        },
    }
}

const IdeasContainer = connect(mapStateToProps, mapDispatchToProps)(Ideas)

export default IdeasContainer