import NavigationStyles from "./Navigation.module.css";

console.log(NavigationStyles);
function Navigation() {
    return (
        <nav className={NavigationStyles["navigation"]}>
            <ul className={NavigationStyles["navigation_list"]}>
                <li className={NavigationStyles["item"]}>
                    <a href="/">Profile</a>
                </li>
                <li className={NavigationStyles["item"]}>
                    <a href="/">Messages</a>
                </li>
                <li className={NavigationStyles["item"]}>
                    <a href="/">Feed</a>
                </li>
                <li className={NavigationStyles["item"]}>
                    <a href="/">Music</a>
                </li>
                <li className={NavigationStyles["item"]}>
                    <a href="/">Settings</a>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation