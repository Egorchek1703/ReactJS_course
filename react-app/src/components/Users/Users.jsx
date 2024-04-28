import UsersStyles from "./Users.module.css"

function Users(props) {

    if (props.users.length === 0) {
        props.setUsers([
            { id: "1", avatarURL: "https://worldpodium.ru/sites/default/files/styles/400x400sc/public/gosha_rubchinskiy.jpg?itok=q5UPHzac", firstName: "Gosha", secondName: "Rubchinskiy", status: "I'm a big lover of potatoes", followed: true, location: { country: "Russia", city: "Moscow" } },
            { id: "2", avatarURL: "https://sun9-21.userapi.com/impg/E0ae8Uliu5G7iW-SkYcbW8vRGislwMNPaVdSMw/OoltFhFrKYI.jpg?size=800x800&quality=96&sign=6c927f6e823a4af40468e1ac54d0dd12&c_uniq_tag=1nZ2zwsZBqrlTYcgjRkIH3jppxBw3QjzjRNLcCSgAlU&type=album", firstName: "Alexey", secondName: "Konovalov", status: "Don't be afraid if you are one, be afraid if you are two", followed: false, location: { country: "Russia", city: "Chelyabinsk" } },
            { id: "3", avatarURL: "https://yk-resurs.ru/wp-content/uploads/3/4/8/348cc2bd09923386ef3cc2a39a4453d7.jpeg", firstName: "Ramhat", secondName: "Kazandaev", status: "UoyBoy", followed: true, location: { country: "Kazahstan", city: "Alma-Aty" } },
            { id: "4", avatarURL: "https://asiaplustj.info/sites/default/files/articles/333185/6.jpg", firstName: "John", secondName: "Smith", status: "Democracy", followed: false, location: { country: "USA", city: "Chicago" } },
        ])
    }


    let handleShowMoreClick = (usersArray) => {
        props.setUsers(usersArray)
    }

    let handleFollowUser = (event) => {
        let userId = event.target.getAttribute("data-id");
        props.follow(userId);
    }

    let handleUnfollowUser = (event) => {
        let userId = event.target.getAttribute("data-id");
        props.unfollow(userId);
    }

    return (
        <section className={UsersStyles["users"]}>
            {/* User card */}
            <ul className={UsersStyles["users_list"]}>
                {
                    props.users.map((user) => {
                        return (
                            <li key={user.id} className={UsersStyles["user_card"]}>
                                {/* Avatar + button */}
                                <div className={UsersStyles["avatar_and_btn"]}>
                                    <img src={user.avatarURL} alt="Avatar" />
                                    <button
                                        type="button"
                                        className={user.followed ? UsersStyles["unfollowButton"] : UsersStyles["followButton"]}
                                        data-id={user.id}
                                        onClick={user.followed ? handleUnfollowUser : handleFollowUser}
                                    >
                                        {user.followed ? "Unfollow" : "Follow"}
                                    </button>
                                </div>
                                {/* User information */}
                                <div className={UsersStyles["user_info"]}>
                                    <div className={UsersStyles["user_name_and_status"]}>
                                        <p className={UsersStyles["user_name"]}>
                                            {user.firstName} {user.secondName}
                                        </p>
                                        <p className={UsersStyles["user_status"]}>
                                            {user.status}
                                        </p>
                                    </div>

                                    <div className={UsersStyles["user_location"]}>
                                        <p className={UsersStyles["city"]}>
                                            {user.location.city}
                                        </p>
                                        <p className={UsersStyles["country"]}>
                                            {user.location.country}
                                        </p>
                                    </div>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
            {/* Show more btn */}
            <button
                className={UsersStyles["show_more_btn"]}
                type="button"
                onClick={handleShowMoreClick}
            >
                Show more
            </button>
        </section>
    );
}
export default Users