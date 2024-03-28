import { useState } from "react";
import { Box, Container } from "@mui/material";
import logo from "@assets/logoblue.svg";
import ProfileLinks from "./ProfileLinks";
import UserPicture from "./UserPicture";
import ButtonLogOut from "./ButtonLogOut";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import TabMenu from "@components/tabMenu/TabMenu";
import { useGetProfileInformationQuery } from "@store/profileInformationApi";
import ProfilePhotoModal from "@components/modal/ProfilePhotoModal";
import "./Profile.scss";

const ProfilePage = () => {
  const { data, error, isLoading } = useGetProfileInformationQuery();

  const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);
  const [snapshot, setSnapshot] = useState<string | null>(null);

  const handleCloseModal = () => {
    setIsOpenPhotoModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenPhotoModal(true);
  };

  const handleSnapshot = (photo: string) => {
    setSnapshot(photo);
  };

  return error ? (
    <CustomError />
  ) : (
    <Container className="profileContainer">
      <Loader isLoading={isLoading} />
      <ProfilePhotoModal
        isOpen={isOpenPhotoModal}
        cbCloseModal={handleCloseModal}
        cbHandleSnapshot={handleSnapshot}
      />
      {data && !error && (
        <>
          <Box className="profilePictureAndLogo">
            <img src={logo} alt="logo" />
            <UserPicture
              photo={snapshot}
              complete={data.complete || 0}
              cbHandleOpenModal={handleOpenModal}
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
