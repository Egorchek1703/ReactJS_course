import Navigation from "./Navigation";

function NavigationContainer(props) {
    let localState = props.store.getState().navigationBlock;

    return (
        <Navigation state={localState} />
    );
}
export default NavigationContainer