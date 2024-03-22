import { Box } from "@mui/material";
import UserPhotos from "@components/userPhotos/UserPhotos";
import { translate } from "@i18n";
import { Link } from "react-router-dom";
import EditIcon from "@components/icons/EditIcon";
import "./EditProfile.scss";

interface IMainEditProfileProps {
  user_description: string;
  user_interests: Array<{ indInt: number; label: string }>;
}

const MainEditProfile = ({
  user_description,
  user_interests,
}: IMainEditProfileProps) => {
  const { t } = translate("translate", { keyPrefix: "profile.editing" });

  return (
    <Box className="mainContentEditing">
      <UserPhotos />
      <Box className="editingInfoBox">
        <Link to={"/profile/edit/description"} className="editingLink">
          {t("description")} <EditIcon fill="#554CB6" />
        </Link>
        <p className="userDescription">{user_description}</p>
      </Box>
      <Box className="editingInfoBox">
        <Link to={"/profile/edit/interests"} className="editingLink">
          {t("interests")} <EditIcon fill="#554CB6" />
        </Link>
        <Box className="userInterestsBox">
          {user_interests.map((el, ind) => {
            return (
              <p key={ind} className="userInterestItem">
                {t(el.label)}
              </p>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default MainEditProfile;
