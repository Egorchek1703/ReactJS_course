import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";
import React from "react";
import { addIdeaPostActionCreator, updateNewPostIdeaActionCreator } from "../../../redux/state";


function Ideas(props) {
    let createPostTextarea = React.createRef();

    let handleAddPost = () => {
        props.dispatch(addIdeaPostActionCreator());
        props.dispatch(updateNewPostIdeaActionCreator(""));
    };

    let handleUpdateNewPostIdea = () => {
        let textFromCreatePostTextarea = createPostTextarea.current.value;
        props.dispatch(updateNewPostIdeaActionCreator(textFromCreatePostTextarea));
    };

    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form className={IdeasStyles["create_idea_form"]} action="/">
                <textarea
                    className={IdeasStyles["create_idea_textarea"]}
                    value={props.newPostIdeaText}
                    ref={createPostTextarea}
                    placeholder="What's your idea?"
                    onChange={handleUpdateNewPostIdea}
                >
                </textarea>
                <button
                    className={IdeasStyles["add_idea_btn"]}
                    onClick={handleAddPost}
                    type="button">
                    Post
                </button>
            </form>
            <ul className={IdeasStyles["list_of_ideas"]}>
                {props.postIdeaData.map(post => <Idea textOfIdea={post.text} quantityOfLikes={post.likesCount} />)}
            </ul>
        </div>
    );
}

export default Ideas