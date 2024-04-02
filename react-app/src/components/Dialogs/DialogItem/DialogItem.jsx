import DialogItemStyles from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

function DialogItem(props) {

    let pathToMessages = "/dialogs/" + props.id

    return (
        <li>
            <NavLink to={pathToMessages} className={navData => navData.isActive ? DialogItemStyles.activeChat : DialogItemStyles.chat}>
                <p className={DialogItemStyles["user_name"]}>{props.name}</p>
            </NavLink>
        </li>
    )
}

export default DialogItem