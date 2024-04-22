import StoreContext from "../../StoreContext";
import Navigation from "./Navigation";

function NavigationContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let localState = store.getState().navigationBlock;

                    return (
                        <Navigation state={localState} />
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default NavigationContainer