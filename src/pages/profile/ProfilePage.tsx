import { Box, Container } from "@mui/material";
import logo from "@assets/logoblue.svg";
import ProfileLinks from "./ProfileLinks";
import UserPicture from "./UserPicture";
import ButtonLogOut from "./ButtonLogOut";
import Loader from "@components/loader/Loader";
import { useGetProfile } from "@hook/useGetProfile";
import CustomError from "@components/error/CustomError";
import "./Profile.scss";

const ProfilePage = () => {
  const { data, loading, error } = useGetProfile();

  return error ? (
    <CustomError />
  ) : (
    <Container className="profileContainer">
      <Loader isLoading={loading} />
      {data && !error && (
        <>
          <Box className="profilePictureAndLogo">
            <img src={logo} alt="logo" />
            <UserPicture
              photo={data.avatar || ""}
              complete={data.complete || 0}
            />
          </Box>
          <Box className="userInformationBox">
            <p>{data.name},</p>
            <p>{data.age}</p>
          </Box>
          <ProfileLinks />
          <ButtonLogOut />
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
