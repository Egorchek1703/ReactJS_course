import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStyles from "./Profile.module.css";
import Ideas from "./Ideas/Ideas";

function Profile(props) {
    return (
        <section className={ProfileStyles["profile"]}>
            <ProfileInfo />
            <Ideas postIdeaData={props.state.postIdeaData} />
        </section>
    );
}
export default Profile