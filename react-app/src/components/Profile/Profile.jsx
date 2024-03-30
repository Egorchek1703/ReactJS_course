import ProfileShapka from "../../images/shapka-profile.jpg";
import Avatar from "../../images/avatar.jpeg";
import ProfileStyles from "./Profile.module.css";
import Ideas from "./Ideas/Ideas";

function Profile() {
    return (
        <main className={ProfileStyles["profile"]}>
            <div className={ProfileStyles["profile_header"]}>
                <img src={ProfileShapka} alt="Profile" />
            </div>

            <div className={ProfileStyles["photo_and_description"]}>
                <img className={ProfileStyles["photo"]} src={Avatar} alt="avatar" draggable />
                <div className={ProfileStyles["description"]}>
                    Description
                </div>
            </div>

            <Ideas />
        </main>
    );
}
export default Profile