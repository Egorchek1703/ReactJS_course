import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";

let postIdeaData = [
    { id: 1, likesCount: 7, text: "I'm pooping" },
    { id: 1, likesCount: 21, text: "Why don't we create an app" },
    { id: 1, likesCount: 14, text: "How to create a react app?" },
    { id: 1, likesCount: 52, text: "This's terribly difficult" },
]

function Ideas() {
    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form className={IdeasStyles["create_idea_form"]} action="/">
                <textarea className={IdeasStyles["create_idea_textarea"]} placeholder="What's your idea?"></textarea>
                <button className={IdeasStyles["add_idea_btn"]} type="button">Post</button>
            </form>
            <ul>
                {postIdeaData.map(post => <Idea textOfIdea={post.text} quantityOfLikes={post.likesCount} />)}
            </ul>
        </div>
    );
}
export default Ideas