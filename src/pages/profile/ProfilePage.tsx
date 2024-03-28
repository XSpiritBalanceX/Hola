import { Box, Container } from "@mui/material";
import logo from "@assets/logoblue.svg";
import ProfileLinks from "./ProfileLinks";
import UserPicture from "./UserPicture";
import ButtonLogOut from "./ButtonLogOut";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import TabMenu from "@components/tabMenu/TabMenu";
import { useGetProfileInformationQuery } from "@store/profileInformationApi";
import "./Profile.scss";

const ProfilePage = () => {
  const { data, error, isLoading } = useGetProfileInformationQuery();

  return error ? (
    <CustomError />
  ) : (
    <Container className="profileContainer">
      <Loader isLoading={isLoading} />
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
          <TabMenu />
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
