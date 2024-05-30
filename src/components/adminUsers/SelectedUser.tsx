import { Avatar, Box } from "@mui/material";
import { ISelectedUserProps } from "./TypesAdminUser";
import { translate } from "@i18n";
import user from "@assets/user.png";
import moment from "moment";
import "./AdminUsers.scss";

const SelectedUser = ({ information }: ISelectedUserProps) => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });

  const subscriptionInformation = [
    { label: "startDate", content: information.subscription.start_date },
    { label: "lastPayment", content: information.subscription.last_payment },
    { label: "renewedUntil", content: information.subscription.end_date },
    { label: "card", content: information.subscription.card },
  ];

  return (
    <Box className="selectedUserContainer">
      <Box className="userIdInformation">
        <p className="userIdText">{`${t("user")} #${information.id}`}</p>
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
                <img key={ind} src={el} alt="user" />
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
    </Box>
  );
};

export default SelectedUser;
