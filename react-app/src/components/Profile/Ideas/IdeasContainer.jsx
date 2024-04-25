import { addIdeaPostActionCreator, updateNewPostIdeaActionCreator } from "../../../redux/profile-reducer";
import Ideas from "./Ideas";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostIdea: () => {
            dispatch(addIdeaPostActionCreator());
            dispatch(updateNewPostIdeaActionCreator(""));
        },
        updateNewPostIdea: (text) => {
            dispatch(updateNewPostIdeaActionCreator(text))
        },
    }
}

const IdeasContainer = connect(mapStateToProps, mapDispatchToProps)(Ideas)

export default IdeasContainer