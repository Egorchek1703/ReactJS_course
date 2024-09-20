import Logo from "../../images/plannet-logo.png";
import HeaderStyles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className={HeaderStyles["header"]}>
            <a className={HeaderStyles["header_logo"]} href="/">
                <img className={HeaderStyles["logo_img"]} src={Logo} alt="Planet" />
                <h1 className={HeaderStyles["logo_text"]}>PlanNet</h1>
            </a>

            <div className={HeaderStyles["auth_buttons"]}>
                {
                    (props.isAuth)
                        ?
                        <span className={HeaderStyles["login"]}>
                            {props.login}
                        </span>
                        :
                        <>
                            <Link to={"/login"} className={HeaderStyles["sign_in_btn"]}></Link>
                            <Link to={"/login"} className={HeaderStyles["sign_up_btn"]}></Link>
                        </>
                }
            </div>
        </header>
    )
}

export default Header