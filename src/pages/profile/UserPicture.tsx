import { Box, CircularProgress } from "@mui/material";
import user from "@assets/user.png";
import { translate } from "@i18n";
import { HOST } from "@axiosApi/axiosAPI";
import "./Profile.scss";

interface IUserPictureProps {
  photo: string | null;
  complete: number;
  cbHandleOpenModal: () => void;
}

const UserPicture = ({
  photo,
  complete,
  cbHandleOpenModal,
}: IUserPictureProps) => {
  const { t } = translate("translate", { keyPrefix: "profile" });

  const handleClick = () => {
    cbHandleOpenModal();
  };

  return (
    <Box className="profilePictureBox" onClick={handleClick}>
      <CircularProgress
        variant="determinate"
        value={complete}
        className="profileCompleteness"
      />
      <p className="completeRate">
        {complete}% {t("complete")}
      </p>
      <img src={photo ? photo.replace("minio", HOST) : user} alt="user" />
    </Box>
  );
};

export default UserPicture;
