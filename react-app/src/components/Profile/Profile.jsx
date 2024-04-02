import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStyles from "./Profile.module.css";
import Ideas from "./Ideas/Ideas";

function Profile() {
    return (
        <section className={ProfileStyles["profile"]}>
            <ProfileInfo />
            <Ideas />
        </section>
    );
}
export default Profile