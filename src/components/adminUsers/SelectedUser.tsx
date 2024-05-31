import { useState } from "react";
import { Avatar, Box, Button } from "@mui/material";
import { ISelectedUserProps } from "./TypesAdminUser";
import { translate } from "@i18n";
import user from "@assets/user.png";
import moment from "moment";
import UserMatch from "./UserMatch";
import ControlsSelectedUser from "./ControlsSelectedUser";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AdminUserPhotoModal from "@components/modal/AdminUserPhotoModal";
import "./AdminUsers.scss";

const SelectedUser = ({
  information,
  cbHandleCloseUser,
}: ISelectedUserProps) => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });

  const [isShowPhotoModal, setIsShowPhotoModal] = useState(false);
  const [currentPhotoToShow, setCurrentPhotoToShow] = useState(0);

  const subscriptionInformation = [
    { label: "startDate", content: information.subscription.start_date },
    { label: "lastPayment", content: information.subscription.last_payment },
    { label: "renewedUntil", content: information.subscription.end_date },
    { label: "card", content: information.subscription.card },
  ];

  const handleCloseUser = () => {
    cbHandleCloseUser(null);
  };

  const handleShowUserPhoto = (photo: number) => {
    setCurrentPhotoToShow(photo);
    setIsShowPhotoModal(true);
  };

  const handleClosePhotoModal = () => {
    setIsShowPhotoModal(false);
    setCurrentPhotoToShow(0);
  };

  return (
    <>
      {information.photos.length && (
        <AdminUserPhotoModal
          isOpen={isShowPhotoModal}
          cbCloseModal={handleClosePhotoModal}
          userPhotos={information.photos}
          currentPhoto={currentPhotoToShow}
        />
      )}
      <Box className="selectedUserContainer">
        <Box className="userIdInformationBox">
          <Button
            type="button"
            onClick={handleCloseUser}
            className="buttonCloseUser"
          >
            <ArrowBackIosNewIcon /> {`${t("user")} #${information.id}`}
          </Button>
          <p className="userStatusText">{information.user_status}</p>
        </Box>
        <p className="sectionName">{t("profile")}</p>
        <Box className="userProfileInformationContainer">
          <Box className="userAvatarBox">
            <p className="sectionNameProfile">{t("user")}</p>
            <p className="userName">{`${information.name}, ${information.age}`}</p>
            <Avatar src={information.avatar || user} className="userAvatar" />
          </Box>
          <Box className="userEmailBox">
            <p className="sectionNameProfile">E-mail</p>
            <p className="userEmail">{information.email}</p>
          </Box>
          <Box className="userAccTypeBox">
            <p className="sectionNameProfile">{t("accType")}</p>
            <p className="userAccType">{information.acc_type}</p>
          </Box>
          <Box className="userProfilePhotosBox">
            <p className="sectionNameProfile">{t("profilePhotos")}</p>
            <Box className="userPhotos">
              {information.photos.length &&
                information.photos.map((el, ind) => (
                  <img
                    key={ind}
                    src={el}
                    alt="user"
                    onClick={() => handleShowUserPhoto(ind)}
                  />
                ))}
            </Box>
          </Box>
          <Box className="userDescriptionBox">
            <p className="sectionNameProfile">{t("description")}</p>
            <p className="userDescription">{information.description}</p>
          </Box>
        </Box>
        <p className="sectionName">{t("subscription")}</p>
        <Box className="userSubscriptionBox">
          {subscriptionInformation.map((el, ind) => (
            <Box key={ind} className="itemSubscriptionBox">
              <p className="sectionNameSubscription">{t(el.label)}</p>
              <p className={`informationSection ${el.label}${ind}`}>
                {moment(el.content, "YYYY-MM-DD", true).isValid()
                  ? moment(el.content).format("DD / MM / YYYY")
                  : el.content}
              </p>
            </Box>
          ))}
        </Box>
        <p className="sectionName">{t("matches")}</p>
        <Box className="userMatchesBox">
          {information.matches.length &&
            information.matches.map((el) => (
              <UserMatch
                key={el.id}
                user_id={information.id}
                companion_id={el.id}
                name={el.name}
                age={el.age}
                email={el.email}
                photo={el.photo}
                isChat={!!el.messages.length}
              />
            ))}
        </Box>
        <ControlsSelectedUser user_id={information.id} />
      </Box>
    </>
  );
};

export default SelectedUser;
