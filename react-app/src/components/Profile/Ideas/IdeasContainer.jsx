import React from "react";
import { addIdeaPostActionCreator, updateNewPostIdeaActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext"
import Ideas from "./Ideas";


function IdeasContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let localState = store.getState().profilePage

                    let addPostIdea = () => {
                        store.dispatch(addIdeaPostActionCreator());
                        store.dispatch(updateNewPostIdeaActionCreator(""));
                    }
                    let updateNewPostIdea = (textFromCreatePostTextarea) => {
                        store.dispatch(updateNewPostIdeaActionCreator(textFromCreatePostTextarea));
                    }

                    return (
                        <Ideas
                            addPostIdea={addPostIdea}
                            updateNewPostIdea={updateNewPostIdea}
                            state={localState}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default IdeasContainer