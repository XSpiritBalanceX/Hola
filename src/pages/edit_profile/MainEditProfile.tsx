import { Box } from "@mui/material";
import UserPhotos from "@components/userPhotos/UserPhotos";
import { translate } from "@i18n";
import { Link } from "react-router-dom";

interface IMainEditProfileProps {
  user_description: string;
  user_interests: Array<string>;
}

const MainEditProfile = ({
  user_description,
  user_interests,
}: IMainEditProfileProps) => {
  const { t } = translate("translate", { keyPrefix: "profile.editing" });

  return (
    <Box>
      <UserPhotos />
      <Box>
        <Link to={"/profile/edit/description"}>{t("description")}</Link>
        <p>{user_description}</p>
      </Box>
      <Box>
        <Link to={"/profile/edit/interests"}>{t("interests")}</Link>
        {user_interests.map((el, ind) => {
          return <p key={ind}>{el}</p>;
        })}
      </Box>
    </Box>
  );
};

export default MainEditProfile;
