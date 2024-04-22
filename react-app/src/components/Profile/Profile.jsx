import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStyles from "./Profile.module.css";
import IdeasContainer from "./Ideas/IdeasContainer";

function Profile(props) {
    return (
        <section className={ProfileStyles["profile"]}>
            <ProfileInfo />
            <IdeasContainer />
        </section>
    );
}
export default Profile