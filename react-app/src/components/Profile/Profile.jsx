import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStyles from "./Profile.module.css";
import Ideas from "./Ideas/Ideas";

function Profile(props) {
    return (
        <section className={ProfileStyles["profile"]}>
            <ProfileInfo />
            <Ideas
                // Сами посты
                postIdeaData={props.state.postIdeaData}
                // Состояние textarea добавляющей посты
                newPostIdeaText={props.state.newPostIdeaText}
                // Функция добавления поста
                addPostIdea={props.addPostIdea}
                // Функция обновления текста в textarea
                updateNewPostIdea={props.updateNewPostIdea}
            />
        </section>
    );
}
export default Profile