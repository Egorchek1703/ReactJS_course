import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import Preloader from "../Common/Preloader/Preloader";
import React from "react";
import {
    setCurrentUserProfileActionCreator,
    changeLoadingStatusActionCreator,
} from "../../redux/profile-reducer";


class ProfileAPIContainer extends React.Component {
    componentDidMount = () => {
        // Включаем загрузку перед получением данных
        this.props.changeLoadingStatus(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(
                (response) => {
                    // console.log(response)
                    let currentUser = response.data

                    this.props.setCurrentUserProfile(currentUser)
                }
            )
            .then(
                () => {
                    // Выключаем загрузку после получения данных
                    this.props.changeLoadingStatus(false)
                }
            )
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}
                <Profile {...this.props} />
            </>

        )
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.profilePage.currentUser,

        isLoading: state.profilePage.isLoading,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUserProfile: (user) => {
            dispatch(setCurrentUserProfileActionCreator(user));
        },

        // Preloader
        changeLoadingStatus: (loadingStatus) => {
            dispatch(changeLoadingStatusActionCreator(loadingStatus));
        },
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainer);

export default ProfileContainer;