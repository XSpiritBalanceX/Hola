import { Box, CircularProgress } from "@mui/material";
import user from "@assets/user.png";
import { translate } from "@i18n";
import "./Profile.scss";

interface IUserPictureProps {
  photo: string;
  complete: number;
}

const UserPicture = ({ photo, complete }: IUserPictureProps) => {
  const { t } = translate("translate", { keyPrefix: "profile" });

  return (
    <Box className="profilePictureBox">
      <CircularProgress
        variant="determinate"
        value={complete}
        className="profileCompleteness"
      />
      <p className="completeRate">
        {complete}% {t("complete")}
      </p>
      <img src={photo || user} alt="user" />
    </Box>
  );
};

export default UserPicture;
