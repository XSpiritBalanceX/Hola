import { useState } from "react";
import { Box, Container } from "@mui/material";
import logo from "@assets/logoblue.svg";
import ProfileLinks from "./ProfileLinks";
import UserPicture from "./UserPicture";
import ButtonLogOut from "./ButtonLogOut";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import TabMenu from "@components/tabMenu/TabMenu";
import {
  useGetProfileInformationQuery,
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
} from "@store/requestApi/profileInformationApi";
import ProfilePhotoModal from "@components/modal/ProfilePhotoModal";
import "./Profile.scss";

const ProfilePage = () => {
  const userID = localStorage.getItem("hola_user_id");

  const { data, error, isLoading } = useGetProfileInformationQuery(
    userID as string
  );
  const [, { isLoading: loadingMutation }] = useUploadAvatarMutation();
  const [, { isLoading: loadingDeleting }] = useDeleteAvatarMutation();

  const [isOpenPhotoModal, setIsOpenPhotoModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenPhotoModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenPhotoModal(true);
  };

  return error ? (
    <CustomError />
  ) : (
    <Container className="profileContainer">
      <Loader isLoading={isLoading || loadingMutation || loadingDeleting} />
      <ProfilePhotoModal
        isOpen={isOpenPhotoModal}
        cbCloseModal={handleCloseModal}
      />
      {data && !error && (
        <>
          <Box className="profilePictureAndLogo">
            <img src={logo} alt="logo" />
            <UserPicture
              photo={data.avatar}
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
