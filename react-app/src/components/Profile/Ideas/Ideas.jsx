import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";
import React from "react";

function Ideas(props) {

    // Создание ссылки для обращения к VDOM элементу
    let createPostTextarea = React.createRef()

    // Обработчик добавления поста (на кнопку)
    let handleAddPost = () => {
        // Вызываем функцию добавления поста в state (без параметра т.к. актуальное значение textarea уже содержится в state в поле newPostIdeaText)
        props.addPostIdea()

        // Обнуление текста внутри textarea после добавления поста
        props.updateNewPostIdea("")
    }

    // Обработчик изменения поста (на change)
    let handleUpdateNewPostIdea = () => {
        let textFromCreatePostTextarea = createPostTextarea.current.value
        props.updateNewPostIdea(textFromCreatePostTextarea)
    }

    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form className={IdeasStyles["create_idea_form"]} action="/">
                <textarea
                    className={IdeasStyles["create_idea_textarea"]}
                    value={props.newPostIdeaText}
                    // Присваивание ссылки самого элемента
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