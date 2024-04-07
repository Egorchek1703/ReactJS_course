import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";
import React from "react";

function Ideas(props) {

    let createPostTextarea = React.createRef()

    let addPost = () => {
        let textFromCreatePostTextarea = createPostTextarea.current.value
        console.log(textFromCreatePostTextarea);
    }

    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form className={IdeasStyles["create_idea_form"]} action="/">
                <textarea
                    className={IdeasStyles["create_idea_textarea"]}
                    ref={createPostTextarea}
                    placeholder="What's your idea?">
                </textarea>
                <button
                    className={IdeasStyles["add_idea_btn"]}
                    onClick={addPost}
                    type="button">
                    Post
                </button>
            </form>
            <ul>
                {props.postIdeaData.map(post => <Idea textOfIdea={post.text} quantityOfLikes={post.likesCount} />)}
            </ul>
        </div>
    );
}
export default Ideas