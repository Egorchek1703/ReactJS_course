import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import axios from "axios"
import { changeLoadingStatusActionCreator } from "../../redux/profile-reducer";
import { setAuthUserDataActionCreator } from "../../redux/auth-reducer";


class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.changeLoadingStatus(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
                //console.log(response)
            })
            .then(() => {
                this.props.changeLoadingStatus(false)
            })
    }

    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,

        loadingStatus: state.auth.loadingStatus,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: (authData) => {
            dispatch(setAuthUserDataActionCreator(authData))
        },
        changeLoadingStatus: (loadingStatus) => {
            dispatch(changeLoadingStatusActionCreator(loadingStatus))
        },

    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer);

export default HeaderContainer;