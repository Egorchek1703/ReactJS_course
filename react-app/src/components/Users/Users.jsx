import UsersStyles from "./Users.module.css";
import BaseUserAvatar from "../../images/user_without_photo.jpg";

let Users = (props) => {

    // Считаем количество страниц для отображения пользователей:
    let quantityOfPages = Math.ceil(props.quantityOfUsers / props.pageSize);
    let pageNumbers = [];
    for (let i = 1; i <= quantityOfPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <section className={UsersStyles["users"]}>
            {/* Quantity of pages */}
            <div className={UsersStyles["pages_block"]}>
                {pageNumbers.map((page) => {
                    return (
                        <span
                            className={page === props.currentPage ? UsersStyles["selected_page"] : UsersStyles["page"]}
                            onClick={() => { props.handleChangeCurrentPage(page) }}
                            key={page}
                        >
                            {page}
                        </span>
                    )
                })
                }
            </div>
            {/* User card */}
            <ul className={UsersStyles["users_list"]}>
                {
                    props.users.map((user) => {
                        return (
                            <li key={user.id} className={UsersStyles["user_card"]}>
                                {/* Avatar + button */}
                                <div className={UsersStyles["avatar_and_btn"]}>
                                    <img src={user.photos.small !== null ? (user.photos.small) : BaseUserAvatar} alt="Avatar" />
                                    <button
                                        type="button"
                                        className={user.followed ? UsersStyles["unfollowButton"] : UsersStyles["followButton"]}
                                        data-id={user.id}
                                        onClick={user.followed ? (event) => { props.handleUnfollowUser(event) } : (event) => { props.handleFollowUser(event) }}
                                    >
                                        {user.followed ? "Unfollow" : "Follow"}
                                    </button>
                                </div>
                                {/* User information */}
                                <div className={UsersStyles["user_info"]}>
                                    <div className={UsersStyles["user_name_and_status"]}>
                                        <p className={UsersStyles["user_name"]}>
                                            {user.name}
                                        </p>
                                        <p className={UsersStyles["user_status"]}>
                                            {user.status}
                                        </p>
                                    </div>

                                    <div className={UsersStyles["user_location"]}>
                                        <p className={UsersStyles["city"]}>
                                            {"user.location.city"}
                                        </p>
                                        <p className={UsersStyles["country"]}>
                                            {"user.location.country"}
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
                onClick={() => { props.zaglushka() }}
            >
                Show more
            </button>
        </section >
    )
}
export default Users