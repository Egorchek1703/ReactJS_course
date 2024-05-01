import UsersStyles from "./Users.module.css";
import BaseUserAvatar from "../../images/user_without_photo.jpg";
import axios from "axios";
import React from "react";

class Users extends React.Component {
    componentDidMount = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            let users = response.data.items
            this.props.setUsers(users)
        })
    }

    render() {
        return (
            <section className={UsersStyles["users"]}>
                {/* User card */}
                <ul className={UsersStyles["users_list"]}>
                    {
                        this.props.users.map((user) => {
                            return (
                                <li key={user.id} className={UsersStyles["user_card"]}>
                                    {/* Avatar + button */}
                                    <div className={UsersStyles["avatar_and_btn"]}>
                                        <img src={user.photos.small !== null ? (user.photos.small) : BaseUserAvatar} alt="Avatar" />
                                        <button
                                            type="button"
                                            className={user.followed ? UsersStyles["unfollowButton"] : UsersStyles["followButton"]}
                                            data-id={user.id}
                                            onClick={user.followed ? this.handleUnfollowUser : this.handleFollowUser}
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
                    onClick={this.zaglushka}
                >
                    Show more
                </button>
            </section >
        );
    }

    zaglushka = () => {
        alert("Заглушка")
    }

    handleFollowUser = (event) => {
        let userId = event.target.getAttribute("data-id");
        this.props.follow(userId);
    }

    handleUnfollowUser = (event) => {
        let userId = event.target.getAttribute("data-id");
        this.props.unfollow(userId);
    }

}

export default Users