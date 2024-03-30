import Logo from "../../images/plannet-logo.png";
import HeaderStyles from "./Header.module.css"

function Header() {
    return (
        <header className={HeaderStyles["header"]}>
            <a className={HeaderStyles["header_logo"]} href="/">
                <img className={HeaderStyles["logo_img"]} src={Logo} alt="Planet" />
                <h1 className={HeaderStyles["logo_text"]}>Plannet</h1>
            </a>
        </header>
    )
}

export default Header