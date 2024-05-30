import { Box, Avatar, Button } from "@mui/material";
import { IUserMatchProps } from "./TypesAdminUser";
import user from "@assets/user.png";
import { translate } from "@i18n";
import "./AdminUsers.scss";

const UserMatch = ({
  user_id,
  companion_id,
  name,
  age,
  photo,
  email,
  isChat,
}: IUserMatchProps) => {
  const { t } = translate("translate", { keyPrefix: "adminUsersPage" });

  const handleChat = () => {
    console.log(user_id, companion_id);
  };

  return (
    <Box className="userMatchItem">
      <Box className="avatarNameBox">
        <Avatar src={photo || user} className="userMatchAvatar" />
        <p>{`${name}, ${age}`}</p>
      </Box>
      <Box className="userMatchEmail">{email}</Box>
      {isChat && (
        <Button
          type="button"
          className="privateChatButton"
          onClick={handleChat}
        >
          {t("userChat")}
        </Button>
      )}
    </Box>
  );
};

export default UserMatch;
