import IdeaStyles from "./Idea.module.css"

function Idea(props) {
    return (
        <li className={IdeaStyles["idea"]}>
            <p>{props.textOfIdea}</p>
            <span className="quantity_of_likes">&#10084;{props.quantityOfLikes}</span>
        </li>
    );
}
export default Idea