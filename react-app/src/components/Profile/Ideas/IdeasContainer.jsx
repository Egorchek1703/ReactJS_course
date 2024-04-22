import React from "react";
import { addIdeaPostActionCreator, updateNewPostIdeaActionCreator } from "../../../redux/profile-reducer";
import Ideas from "./Ideas";


function IdeasContainer(props) {
    // State
    let state = props.store.getState().profilePage

    // Callback'и
    let addPostIdea = () => {
        props.store.dispatch(addIdeaPostActionCreator());
        props.store.dispatch(updateNewPostIdeaActionCreator(""));
    }

    let updateNewPostIdea = (textFromCreatePostTextarea) => {
        props.store.dispatch(updateNewPostIdeaActionCreator(textFromCreatePostTextarea));
    }

    return (
        <Ideas
            // Функции взаимодейтсвия с store
            addPostIdea={addPostIdea}
            updateNewPostIdea={updateNewPostIdea}

            // Необходимый state
            state={state}
        />
    );
}

export default IdeasContainer