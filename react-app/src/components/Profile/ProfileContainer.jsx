import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import Preloader from "../Common/Preloader/Preloader";
import React from "react";
import {
    setCurrentUserProfileActionCreator,
    changeLoadingStatusActionCreator,
} from "../../redux/profile-reducer";
// Костыль из комментариев к уроку
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileAPIContainer extends React.Component {
    componentDidMount = () => {
        // Включаем загрузку перед получением данных
        this.props.changeLoadingStatus(true)

        // Получаем из URL контекста с помощью params id клиента
        let userIdForRequest = this.props.router.params.user_id

        // Если параметр не передан
        if (!userIdForRequest) {
            userIdForRequest = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userIdForRequest}`)
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

const ProfileAPIContainerWithRouter = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIContainerWithRouter);

export default ProfileContainer;