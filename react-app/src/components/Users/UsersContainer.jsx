import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    changeCurrentPageActionCreator,
    setQuantityOfUsersActionCreator,
    changeLoadingStatusActionCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersAPIContainer extends React.Component {
    componentDidMount = () => {
        // Перед тем как выполнится запрос показываем preloader
        this.props.changeLoadingStatus(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                let users = response.data.items
                let totalUsersCount = response.data.totalCount
                this.props.setUsers(users)
                this.props.setQuantityOfUsers(totalUsersCount)
            })
            .then(() => {
                // После того, как данные получены выключаем preloader
                this.props.changeLoadingStatus(false)
            })
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}

                <Users
                    // Данные 
                    quantityOfUsers={this.props.quantityOfUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}

                    // Методы
                    handleFollowUser={this.handleFollowUser}
                    handleUnfollowUser={this.handleUnfollowUser}
                    handleChangeCurrentPage={this.handleChangeCurrentPage}
                    zaglushka={this.zaglushka}
                />
            </>
        );
    }

    handleFollowUser = (event) => {
        let userId = event.target.getAttribute("data-id");
        this.props.follow(userId);
    }

    handleUnfollowUser = (event) => {
        let userId = event.target.getAttribute("data-id");
        this.props.unfollow(userId);
    }

    handleChangeCurrentPage = (newPageNumber) => {
        // Перед тем как выполнится запрос показываем preloader
        this.props.changeLoadingStatus(true)

        this.props.changeCurrentPage(newPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`).then((response) => {
            let users = response.data.items
            this.props.setUsers(users)
        }).then(() => {
            // После того, как данные получены выключаем preloader
            this.props.changeLoadingStatus(false)
        })
    }

    zaglushka = () => {
        alert("Заглушка")
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,

        pageSize: state.usersPage.pageSize,
        quantityOfUsers: state.usersPage.quantityOfUsers,
        currentPage: state.usersPage.currentPage,
        // Preloader
        isLoading: state.usersPage.isLoading,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (usersArray) => {
            dispatch(setUsersActionCreator(usersArray));
        },
        setQuantityOfUsers: (quantityOfUsers) => {
            dispatch(setQuantityOfUsersActionCreator(quantityOfUsers))
        },
        changeCurrentPage: (newCurrentPage) => {
            dispatch(changeCurrentPageActionCreator(newCurrentPage))
        },
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        changeLoadingStatus: (loadingStatus) => {
            dispatch(changeLoadingStatusActionCreator(loadingStatus))
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;