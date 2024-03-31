import DialogsStyles from "./Dialogs.module.css";

function Dialogs() {
    return (
        <section className={DialogsStyles["dialogs"]}>
            <ul className={DialogsStyles["chats"]}>
                <li className={DialogsStyles["chat"] + " " + DialogsStyles["activeChat"]}>
                    <p className={DialogsStyles["user_name"]}>Лиза</p>
                </li>

                <li className={DialogsStyles["chat"]}>
                    <p className={DialogsStyles["user_name"]}>Юля</p>
                </li>

                <li className={DialogsStyles["chat"]}>
                    <p className={DialogsStyles["user_name"]}>Андрей</p>
                </li>

                <li className={DialogsStyles["chat"]}>
                    <p className={DialogsStyles["user_name"]}>Никита</p>
                </li>

                <li className={DialogsStyles["chat"]}>
                    <p className={DialogsStyles["user_name"]}>Борис</p>
                </li>

                <li className={DialogsStyles["chat"]}>
                    <p className={DialogsStyles["user_name"]}>Наталья</p>
                </li>
            </ul>

            <div className="messages_with_user">
                <div className={DialogsStyles["message"]}>
                    <img className={DialogsStyles["avatar_of_user"]} src="" alt="User avatar" />
                    <p className={DialogsStyles["text_of_message"]}>Zdarova bedolaga</p>
                </div>

                <div className={DialogsStyles["message"]}>
                    <img className={DialogsStyles["avatar_of_user"]} src="" alt="User avatar" />
                    <p className={DialogsStyles["text_of_message"]}>Let's go to learn ReactJS</p>
                </div>

                <div className={DialogsStyles["message"]}>
                    <img className={DialogsStyles["avatar_of_user"]} src="" alt="User avatar" />
                    <p className={DialogsStyles["text_of_message"]}>Are you sure about this?</p>
                </div>
            </div>
        </section>
    );
}
export default Dialogs