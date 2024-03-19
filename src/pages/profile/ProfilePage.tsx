import { Box, Container } from "@mui/material";
import logo from "@assets/logoblue.svg";
import ProfileLinks from "./ProfileLinks";
import UserPicture from "./UserPicture";
import ButtonLogOut from "./ButtonLogOut";
import "./Profile.scss";

const ProfilePage = () => {
  return (
    <Container className="profileContainer">
      <Box className="profilePictureAndLogo">
        <img src={logo} alt="logo" />
        <UserPicture photo="" complete={75} />
      </Box>
      <Box className="userInformationBox">
        <p>user name,</p>
        <p>user age</p>
      </Box>
      <ProfileLinks />
      <ButtonLogOut />
    </Container>
  );
};

export default ProfilePage;
