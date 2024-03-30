import IdeasStyles from "./Ideas.module.css"
import Idea from "./Idea/Idea";

function Ideas() {
    return (
        <div className={IdeasStyles["ideas"]}>
            <h4>Ideas</h4>
            <form action="/">
                <input className={IdeasStyles["create_idea_input"]} type="text" placeholder="What's your idea?" />
                <button className={IdeasStyles["add_idea_btn"]} type="button">Post</button>
            </form>
            <ul>
                <Idea textOfIdea="I'm pooping" quantityOfLikes="7" />
                <Idea textOfIdea="Why don't we create an app" quantityOfLikes="21" />
                <Idea textOfIdea="How to crate a react app?" quantityOfLikes="14" />
                <Idea textOfIdea="This's terribly difficult" quantityOfLikes="52" />
            </ul>
        </div>
    );
}
export default Ideas