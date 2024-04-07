import FriendStyles from "./Friend.module.css"
import FriendAvatar from "../../../images/friend_avatar.jpg";

function Friend(props) {
    return (
        <div className={FriendStyles["friend_card"]} >
            <img className={FriendStyles["friend_avatar"]} src={FriendAvatar} alt="friend_avatar" />
            <p className={FriendStyles["friend_name"]}>
                {props.name}
            </p>
        </div>
    );
}
export default Friend