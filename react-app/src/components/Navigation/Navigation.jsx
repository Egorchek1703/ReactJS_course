import NavigationStyles from "./Navigation.module.css";
import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <nav className={NavigationStyles["navigation"]}>
            <ul className={NavigationStyles["navigation_list"]}>
                <li className={NavigationStyles["item"]}>
                    <NavLink to="/profile" className={navData => navData.isActive ? NavigationStyles.active : NavigationStyles.link}>
                        Profile
                    </NavLink>
                </li>
                <li className={NavigationStyles["item"]}>
                    <NavLink to="/dialogs" className={navData => navData.isActive ? NavigationStyles.active : NavigationStyles.link}>
                        Messages
                    </NavLink>
                </li>
                <li className={NavigationStyles["item"]}>
                    <NavLink to="/news" className={navData => navData.isActive ? NavigationStyles.active : NavigationStyles.link}>
                        News
                    </NavLink>
                </li>
                <li className={NavigationStyles["item"]}>
                    <NavLink to="/music" className={navData => navData.isActive ? NavigationStyles.active : NavigationStyles.link}>
                        Music
                    </NavLink>
                </li>
                <li className={NavigationStyles["item"]}>
                    <NavLink to="/settings" className={navData => navData.isActive ? NavigationStyles.active : NavigationStyles.link}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation