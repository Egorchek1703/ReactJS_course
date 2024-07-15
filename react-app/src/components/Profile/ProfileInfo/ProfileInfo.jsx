import ProfileShapka from "../../../images/shapka-profile.jpg";
import BaseUserAvatar from "../../../images/user_without_photo.jpg";
import ProfileInfoStyles from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div className={ProfileInfoStyles["profile_info"]}>
            <div className={ProfileInfoStyles["profile_info_header"]}>
                <img src={ProfileShapka} alt="Profile" />
            </div>

            <div className={ProfileInfoStyles["photo_and_description"]}>
                <img className={ProfileInfoStyles["photo"]} src={(props.currentUser.photos && props.currentUser.photos.small !== "") ? props.currentUser.photos.small : BaseUserAvatar} alt="avatar" draggable />
                <div className={ProfileInfoStyles["description"]}>
                    <h3>{props.currentUser.fullName}</h3>
                    <p>{props.currentUser.aboutMe}</p>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo