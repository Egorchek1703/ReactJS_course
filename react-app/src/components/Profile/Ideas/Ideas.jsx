import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";
import React from "react";

function Ideas(props) {
    let createPostTextarea = React.createRef();

    let handleAddPost = () => {
        if (createPostTextarea.current.value !== "") {
            props.addPostIdea()
        }
    };

    let handleUpdateNewPostIdea = () => {
        let textFromCreatePostTextarea = createPostTextarea.current.value;
        props.updateNewPostIdea(textFromCreatePostTextarea)
    };

    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form className={IdeasStyles["create_idea_form"]} action="/">
                <textarea
                    className={IdeasStyles["create_idea_textarea"]}
                    value={props.profilePage.newPostIdeaText}
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
                {props.profilePage.postIdeaData.map(post => {
                    return <Idea textOfIdea={post.text} quantityOfLikes={post.likesCount} key={post.id} />
                })}
            </ul>
        </div>
    );
}

export default Ideas