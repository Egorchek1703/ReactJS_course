import axios from "axios"
import UsersStyles from "./Users.module.css";
import BaseUserAvatar from "../../images/user_without_photo.jpg";
import { Link } from "react-router-dom"

let Users = (props) => {

    // Считаем количество страниц для отображения пользователей:
    let quantityOfPages = Math.ceil(props.quantityOfUsers / props.pageSize);
    let pageNumbers = [];
    for (let i = 1; i <= quantityOfPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <section className={UsersStyles["users"]}>
            {/* User cards */}
            <ul className={UsersStyles["users_list"]}>
                {
                    props.users.map((user) => {
                        return (
                            <li key={user.id} className={UsersStyles["user_card"]}>
                                {/* Avatar + button */}
                                <div className={UsersStyles["avatar_and_btn"]}>
                                    <Link to={`/profile/${user.id}`}>
                                        <img src={user.photos.small !== null ? (user.photos.small) : BaseUserAvatar} alt="Avatar" />
                                    </Link>
                                    <button
                                        type="button"
                                        className={user.followed ? UsersStyles["unfollowButton"] : UsersStyles["followButton"]}
                                        data-id={user.id}
                                        onClick={
                                            (user.followed)
                                                ?
                                                () => {
                                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "4b9057e8-16c5-442d-8521-d75c29c7639f",
                                                        }
                                                    })
                                                        .then((response) => {
                                                            if (response.data.resultCode === 0) {
                                                                props.handleUnfollowUser(user.id)
                                                            }
                                                        })
                                                }
                                                :
                                                () => {
                                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "4b9057e8-16c5-442d-8521-d75c29c7639f",
                                                        }
                                                    })
                                                        .then((response) => {
                                                            if (response.data.resultCode === 0) {
                                                                props.handleFollowUser(user.id)
                                                            }
                                                        })
                                                }
                                        }
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
            {/* Quantity of pages */}
            <div className={UsersStyles["pages_block"]}>
                {
                    // Рисуем точки впереди списка номеров страниц если единица не видна (currentPage > 4)
                    (props.currentPage > 4)
                        ?
                        <span
                            className={UsersStyles["page"]}
                            onClick={() => { props.handleChangeCurrentPage(1) }}
                        >...</span>
                        : null
                }

                {
                    // Убираем все что больше чем на 3 страницы больше чем currentPage, и всё что меньше более чем на 3
                    pageNumbers.map((page) => {
                        if ((Number(page) <= Number(props.currentPage) + 3 && Number(page) >= Number(props.currentPage) - 3)) {
                            return (
                                <span
                                    className={page === props.currentPage ? UsersStyles["selected_page"] : UsersStyles["page"]}
                                    onClick={() => { props.handleChangeCurrentPage(page) }}
                                    key={page}
                                >
                                    {page}
                                </span>
                            )
                        }
                    })
                }

                {
                    // Добавляем точки в конце если (currentPage - 3) < Math.ceil(props.quantityOfUser / props.pageSize)  
                    ((props.currentPage + 3) < Math.ceil(props.quantityOfUsers / props.pageSize))
                        ?
                        <span
                            className={UsersStyles["page"]}
                            onClick={() => {
                                props.handleChangeCurrentPage(Math.ceil(props.quantityOfUsers / props.pageSize))
                            }}
                        >...</span>
                        : null
                }

            </div>
        </section >
    )
}
export default Users