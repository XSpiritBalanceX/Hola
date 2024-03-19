import { Box, Container } from "@mui/material";
import logo from "@assets/logoblue.svg";
import ProfileLinks from "./ProfileLinks";
import UserPicture from "./UserPicture";

const ProfilePage = () => {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo" />
      </Box>
      <UserPicture photo="" />
      <Box>
        <p>user name,</p>
        <p>user age</p>
      </Box>
      <ProfileLinks />
    </Container>
  );
};

export default ProfilePage;
