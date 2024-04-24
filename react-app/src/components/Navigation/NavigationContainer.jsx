import Navigation from "./Navigation";
import { connect } from "react-redux"

// import StoreContext from "../../StoreContext";

// function NavigationContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let localState = store.getState().navigationBlock;

//                     return (
//                         <Navigation state={localState} />
//                     );
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

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