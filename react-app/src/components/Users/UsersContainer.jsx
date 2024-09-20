import React from "react";
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
import { usersAPI } from "../../api/API";


class UsersAPIContainer extends React.Component {
    componentDidMount = () => {
        // Перед тем как выполнится запрос показываем preloader
        this.props.changeLoadingStatus(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                let users = data.items
                let totalUsersCount = data.totalCount
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
                />
            </>
        );
    }

    handleFollowUser = (userId) => {
        this.props.follow(userId);
    }

    handleUnfollowUser = (userId) => {
        this.props.unfollow(userId);
    }

    handleChangeCurrentPage = (newPageNumber) => {
        // Перед тем как выполнится запрос показываем preloader
        this.props.changeLoadingStatus(true)

        this.props.changeCurrentPage(newPageNumber)

        usersAPI.getUsers(newPageNumber, this.props.pageSize)
            .then((data) => {
                let users = data.items
                this.props.setUsers(users)
            }).then(() => {
                // После того, как данные получены выключаем preloader
                this.props.changeLoadingStatus(false)
            })
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