import MyProfile from "../components/MyProfile";
import ViewProfilePic from "../components/ProfilePicture/ViewProfilePic";
import Grid from "@mui/material/Grid/";
import { styled } from "@mui/material/styles";
const ProfileRootGrid = styled(Grid)({
    height: "100%",
});
const ProfileGrid = styled(Grid)({
    backgroundColor: "#fff",
});
const ViewProfileGrid = styled(Grid)({
    backgroundColor: "#eee",
});
const Profile = () => {
    return (
        <ProfileRootGrid container>
            <ProfileGrid item xs={8} className="h-pad-base">
                <MyProfile isShowEditForm={true}/>
            </ProfileGrid>
            <ViewProfileGrid item xs={4} className="h-pad-base" >
                <ViewProfilePic/>
            </ViewProfileGrid>
        </ProfileRootGrid>
    );
};

export default Profile;
