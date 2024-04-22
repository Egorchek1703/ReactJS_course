import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";
import React from "react";
// Теперь импорты actionCreator'ов не нужны поэтому их можно удалить.
// import { addIdeaPostActionCreator, updateNewPostIdeaActionCreator } from "../../../redux/profile-reducer";


function Ideas(props) {
    let createPostTextarea = React.createRef();

    let handleAddPost = () => {
        // Функция взаимодейтсвия с store внутри контейнерной компоненты:
        props.addPostIdea()
    };

    let handleUpdateNewPostIdea = () => {
        let textFromCreatePostTextarea = createPostTextarea.current.value;

        // Функция взаимодейтсвия с store внутри контейнерной компоненты:
        props.updateNewPostIdea(textFromCreatePostTextarea)
    };

    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form className={IdeasStyles["create_idea_form"]} action="/">
                <textarea
                    className={IdeasStyles["create_idea_textarea"]}

                    // Зависимость от state
                    value={props.state.newPostIdeaText}

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

                {
                    // Зависимость от state
                }
                {props.state.postIdeaData.map(post => <Idea textOfIdea={post.text} quantityOfLikes={post.likesCount} />)}

            </ul>
        </div>
    );
}

export default Ideas