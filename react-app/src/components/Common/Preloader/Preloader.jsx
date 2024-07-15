import PreloaderStyles from "./Preloader.module.css"
import preloader from "../../../images/preloader.svg";


const Preloader = () => {
    return (
        <div className={PreloaderStyles["loading_block"]}>
            <div className={PreloaderStyles["preloading_overlay"]}>
                <img className={PreloaderStyles["preloading_svg"]} src={preloader} alt="Loading..." />
            </div>
        </div>
    );
}

export default Preloader