import ProfileShapka from "../../../images/shapka-profile.jpg";
import Avatar from "../../../images/avatar.jpeg";
import ProfileInfoStyles from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div className={ProfileInfoStyles["profile_info"]}>
            <div className={ProfileInfoStyles["profile_info_header"]}>
                <img src={ProfileShapka} alt="Profile" />
            </div>

            <div className={ProfileInfoStyles["photo_and_description"]}>
                <img className={ProfileInfoStyles["photo"]} src={Avatar} alt="avatar" draggable />
                <div className={ProfileInfoStyles["description"]}>
                    <h3>Егор Семёнов</h3>
                    <p>Возраст: <span>23</span></p>
                    <p>Не бойся когда ты один, бойся когда ты два</p>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo