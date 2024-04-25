import Navigation from "./Navigation";
import { connect } from "react-redux"

let mapStateToProps = (state) => {
    return {
        friendsInSidebar: state.navigationBlock.friendsInSidebar,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer